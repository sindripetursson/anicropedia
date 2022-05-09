import MenuBarView from "../views/menuBarView.js";
import React from "react";
import { getGeo } from "../source/geoSource.js";
import Timer from "../views/timer.js";
import { ReactSession } from "react-client-session";

// global hour and audio
let currentHour; 
let cityHour;
let isHourChange = false;
// let currentMinute; 

var audio = document.createElement('audio');
audio.id = "bgmMute";
document.body.appendChild(audio);
let initialBackgroundAudioCheck = false;
//let isBackgroundMusicPlaying = false;

export default 
function MenuBar(props) {
    // // geo
    const [geoPromise, setGeoPromise]= React.useState();
    const [geoData, setGeoData]= React.useState(null);
    const [, setGeoError]= React.useState(null);
    // city
    const [chosenCity, setChosenCity]= React.useState(''); //props.weatherModel.getUserCity());
    var typedCity;
    // timer
    const [timerCreated, setTimerCreated ]= React.useState(false);
    
    // promise to data for geographic coordinates
    function geoPromiseChangedACB(){ 
        setGeoData(null); 
        setGeoError(null); 

        let cancelled = false;
        function changedAgainACB() { 
              cancelled = true; 
        };  // also called at teardown!
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
    
    // catch input element
    function saveTypedCityACB(typedCityName) {
        typedCity = typedCityName;
    };
    
    // get the promise for the input
    function searchNowACB() {
        setGeoPromise(getGeo(typedCity));
        props.weatherModel.setBackgroundMusicPromise();
    };

    // catch the select element
    function setChosenCityACB(chosenCity) {     
        // save the city in the model, so that the city persists for the next weather search   
        props.weatherModel.setUserCity(chosenCity);
        setChosenCity(props.weatherModel.getUserCity());
        
        updateData();
    };


    // final song filter function
    function filterWeatherDataOnAudio() {
        var checkToday = new Date();
        var checkHour = checkToday.getHours();

        // var checkMinute = checkToday.getMinutes();

        // console.log("Compare checkHour vs currentHour: " + checkHour + ', ' + currentHour);

        // console.log('weather: ' + props.weatherModel.getCityWeather());
        
        // console.log(props.weatherModel.getCityWeather() != null && (checkHour !== currentHour));
        if(props.weatherModel.getCityWeather(props.userModel.getCityCoordinates()) != null && (checkHour !== currentHour)) {

            var today = new Date();
            currentHour = today.getHours();
            
            // currentMinute = today.getMinutes();

                var currentWeather = props.weatherModel.getCityWeather().weather[0].main; 
                cityHour = (today.getUTCHours() + (props.weatherModel.getCityWeather().timezone / 60 / 60)) % 24;
                if (cityHour < 0) cityHour += 24; //Corrects hour if it goes into minus
                const relevantMusic = []
                var weatherIndex;

            console.log("-----------------------------");
            console.log('Weather in ' + props.userModel.getCityAddress() + ': ' + props.weatherModel.getCityWeather().weather[0].main);

            matchCityWeatherOnACWeather();

            console.log('Weather mapped to AC weather: ' + weatherIndex)

            filterAllSongsFittingCurrentHour(relevantMusic);

            filterSongFittingCurrentWeather(relevantMusic);

            audio.loop = true;
            //audio.play();
            if (isHourChange) {
                console.log('Updating weather, hour change true, background audio; ', props.isBackgroundMusicPlaying);

                if (props.isBackgroundMusicPlaying) audio.play();
                isHourChange = false;
            }

            console.log("Information: Song is playing!");
            console.log("-----------------------------");
        }

        
        function matchCityWeatherOnACWeather() {
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
                    console.log('Following song was chosen: ' + finalSong['file-name'])
                    console.log('Song URI: ' + finalSong.music_uri);
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
        console.log('Hour change, background audio; ', props.isBackgroundMusicPlaying);

        isHourChange = true;
        updateData();
    }

    function muteAudioACB() {
        console.log('Audio mute triggered, background audio; ', props.isBackgroundMusicPlaying);
        if (initialBackgroundAudioCheck) {
            if(props.isBackgroundMusicPlaying) {
                audio.pause();
                // id to use audio in musicPresenter
                audio.id = "bgmMute";
    
                // set mute to mute (sound is off)
                let muteBt = document.getElementById("muteId");
                muteBt.src = "../../images/soundOff.svg";
                props.setIsBackgroundMusicPlaying(false);
            } else {
                
                // play the BGM only when no vinyl is played
                if(document.getElementById("vinyl").paused) {    
                    audio.play();
                    // id to use audio in musicPresenter
                    audio.id = "bgmMuteOff";
        
                    // set mute button to on (sound in on)
                    let muteBt = document.getElementById("muteId");
                    muteBt.src = "../../images/soundOn.svg";
                    props.setIsBackgroundMusicPlaying(true);
                }
            }
        } else {
            initialBackgroundAudioCheck = true;
            audio.play();
            audio.id = "bgmMuteOff";
            let muteBt = document.getElementById("muteId");
            muteBt.src = "../../images/soundOn.svg";
            props.setIsBackgroundMusicPlaying(true);
        }
    }
    updateData();
    React.useEffect(geoPromiseChangedACB, [geoPromise]);

    return <div> 
            <MenuBarView 
                onUserInput={saveTypedCityACB} 
                onSearchNow={searchNowACB} 
                data={geoData} 
                onSetChosenCity={setChosenCityACB} 
                chosenCity={chosenCity} 
                onMuteAudio={muteAudioACB}
                userModel={props.userModel}
            /> 

            {timerCreated ||
                <Timer 
                onUpdateData={onHourChangeACB}
                onTimerCreated={setTimerCreated}
                />
            }
        </div> 
}