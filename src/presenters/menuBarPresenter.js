import MenuBarView from "../views/menuBarView.js";
import React from "react";
import Timer from "../components/timer.js";
import { ReactSession } from "react-client-session";

// global hour and audio
let currentHour; 
let cityHour;
let isHourChange = false;
let isCityChange = false;
let weatherIndex;

let audio = document.createElement('audio');
audio.id = "bgmMute";
document.body.appendChild(audio);
let initialBackgroundAudioCheck = true;
let isBackgroundMusicPlaying = false;

export default 
function MenuBar(props) {
    // geo
    const [geoPromise,]= React.useState();
    const [geoData, setGeoData]= React.useState(null);
    const [, setGeoError]= React.useState(null);
    const [name, setName] = React.useState('');
    // timer
    const [timerCreated, setTimerCreated ]= React.useState(false);
    
    // promise to data for geographic coordinates
    function geoPromiseChangedACB(){ 
        setGeoData(null); 
        setGeoError(null); 

        let cancelled = false;
        function changedAgainACB() { 
              cancelled = true; 
        };
        if(geoPromise) {
            geoPromise
              .then(function saveDataACB(dt) {  
                if(!cancelled) setGeoData(dt);
              })
              .catch(function saveErrACB(err) { 
                if(!cancelled) setGeoError(err);
              });
        }
        return changedAgainACB; 
    }

    // final song filter function
    function filterWeatherDataOnAudio() {
        let checkToday = new Date();
        let checkHour = checkToday.getHours();

        if(isCityChange || (props.weatherModel.getCityWeather(props.userModel.getCityCoordinates()) != null  && (checkHour !== currentHour))) {
            let today = new Date();
            currentHour = today.getHours();

            let currentWeather = props.weatherModel.getCityWeather().weather[0].main; 
            cityHour = Math.floor((today.getUTCHours() + (props.weatherModel.getCityWeather().timezone / 60 / 60)) % 24);
            // Corrects hour if it goes into minus
            if (cityHour < 0) cityHour += 24;
            const relevantMusic = []

            matchCityWeatherOnACWeather(currentWeather);
            filterAllSongsFittingCurrentHour(relevantMusic);
            filterSongFittingCurrentWeather(relevantMusic);

            audio.loop = true;
            if (isHourChange || isCityChange) {
                if (isBackgroundMusicPlaying) {
                    audio.play();   
                }
                isHourChange = false;
            }
            isCityChange = false;
        }
        
        function matchCityWeatherOnACWeather(currentWeather) {
            switch (currentWeather) {
                case "Snow":
                    weatherIndex = "Snowy";
                    break;
                case "Clear":
                    weatherIndex = "Sunny";
                    break;
                case "Clouds":
                    weatherIndex = "Sunny";
                    break;
                default:
                    weatherIndex = "Rainy";
                    break;
            }
        }

        function filterAllSongsFittingCurrentHour(relevantMusic) {
            Object.values(props.weatherModel.getBackgroundMusicData()).map(renderSingleData);

            function renderSingleData(singleResult) {
                if (singleResult.hour === cityHour) {
                    relevantMusic.push(singleResult);
                };
            }
        }

        function filterSongFittingCurrentWeather(relevantMusic) {
            Object.values(relevantMusic).map(renderFinalSong);

            function renderFinalSong(finalSong) {
                if (finalSong.weather === weatherIndex) { 
                    audio.src = finalSong.music_uri;
                }
            }
        }
    }

    function updateData() {
        if(ReactSession.get('uid') !== null && props.userModel) {
            props.weatherModel.setBackgroundMusicPromise();
            props.weatherModel.setCityWeatherPromise(props.userModel.getCityCoordinates());
            setTimeout(filterWeatherDataOnAudio, 2000);
        }   
    }

    function onHourChangeACB() {
        isHourChange = true;
        updateData();
    }

    function muteAudioACB() {
        if (!initialBackgroundAudioCheck) {
            if(isBackgroundMusicPlaying) {
                audio.pause();
                // id to use audio in musicPresenter
                audio.id = "bgmMute";
    
                // set mute to mute (sound is off)
                let muteBt = document.getElementById("muteId");
                muteBt.src = "../../images/playBg.svg";
                isBackgroundMusicPlaying = false;
            } else {
                // play the BGM only when no vinyl is played
                if(document.getElementById("vinyl").paused) {    
                    audio.play();
                    // id to use audio in musicPresenter
                    audio.id = "bgmMuteOff";
        
                    // set mute button to on (sound in on)
                    let muteBt = document.getElementById("muteId");
                    muteBt.src = "../../images/pauseBg.svg";
                    isBackgroundMusicPlaying = true;
                }
            }
        } else {
            initialBackgroundAudioCheck = false;
            audio.play();
            audio.id = "bgmMuteOff";
            let muteBt = document.getElementById("muteId");
            muteBt.src = "../../images/pauseBg.svg";
            isBackgroundMusicPlaying = true;
        }
    }

    function cityChangeObserverACB(payload) {
        if (payload && payload.updateCityLng) {
            isCityChange = true;
            updateData();
        }
    }

    function nameChangeACB(payload) {
        if (payload && payload.updateUserName) {
            setName(payload.updateUserName);
        }
    }

    function wasCreatedACB() {
        updateData();
        if (props.userModel) {
            setName(props.userModel.getUserName());
            props.userModel.addObserver(cityChangeObserverACB);
            props.userModel.addObserver(nameChangeACB);
            return function isTakenDownACB() {
                props.userModel.removeObserver(cityChangeObserverACB);
                props.userModel.removeObserver(nameChangeACB);
            }
        }
    }

    function stopVinylTrack() {
        props.onStopVinylTrack();
    }

    React.useEffect(wasCreatedACB, []);

    React.useEffect(geoPromiseChangedACB, [geoPromise]);

    return <div> 
        <MenuBarView 
            data={geoData} 
            onMuteAudio={muteAudioACB}
            userModel={props.userModel}
            name={name}
            onStopTrack={stopVinylTrack}
        /> 

        {timerCreated ||
            <Timer 
            onUpdateData={onHourChangeACB}
            onTimerCreated={setTimerCreated}
            />
        }
    </div> 
}