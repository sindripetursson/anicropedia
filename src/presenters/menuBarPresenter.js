import MenuBarView from "../views/menuBarView.js";
import React from "react";
import { getGeo } from "../source/geoSource.js";
import { getWeather } from "../source/weatherSource.js";
import { getBackgroundMusic } from "../source/musicSource.js";
import Timer from "../views/timer.js";

export default 
function MenuBar(props) {
    // geo
    const [geoPromise, setGeoPromise]= React.useState();
    const [geoData, setGeoData]= React.useState(null);
    const [geoError, setGeoError]= React.useState(null);
    // weather
    const [weatherPromise, setWeatherPromise]= React.useState();
    const [weatherData, setWeatherData]= React.useState(null);
    const [weatherError, setWeatherError]= React.useState(null);
    // background music
    const [bgmPromise, setBGMPromise]= React.useState(getBackgroundMusic());
    const [bgmData, setBGMData]= React.useState(null);
    const [bgmError, setBGMError]= React.useState(null);
    // city
    const [chosenCity, setChosenCity]= React.useState(props.weatherModel.getUserCity());
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

    // promise to data for weather data
    function weatherPromiseChangedACB(){ 
        setWeatherData(null); 
        setWeatherError(null); 

        let cancelled = false;
        function changedAgainACB() { 
              cancelled = true; 
        };  // also called at teardown!
        if(weatherPromise) {
            weatherPromise
              .then(function saveDataACB(dt) {  
                if(!cancelled) setWeatherData(dt);
              })
              .catch(function saveErrACB(err) { 
                if(!cancelled) setWeatherError(err);
              });
        }
        return changedAgainACB; 
    }

    // promise to data for background music
    function bgmPromiseChangedACB(){ 
        setBGMData(null); 
        setBGMError(null); 

        let cancelled = false;
        function changedAgainACB() { 
              cancelled = true; 
        };  // also called at teardown!
        if(bgmPromise) {
            bgmPromise
              .then(function saveDataACB(dt) {  
                if(!cancelled) setBGMData(dt);
              })
              .catch(function saveErrACB(err) { 
                if(!cancelled) setBGMError(err);
              });
        }
        return changedAgainACB; 
    }
    
    // catch input element
    function saveTypedCity(typedCityName) {
        typedCity = typedCityName;
    };
    
    // get the promise for the input
    function searchNowACB() {
        setGeoPromise(getGeo(typedCity));
    };

    // catch the select element
    function setChosenCityACB(chosenCity) {        
        props.weatherModel.setUserCity(chosenCity);
        setChosenCity(props.weatherModel.getUserCity());
        props.weatherModel.setCityWeather();
    };

    // // get the weather data for the user's city
    // // e.g., promise for the specific lat and lon values
    // function initWeatherData() {
    //     // var lat = props.userModel.getCityLat();
    //     // var lon = props.userModel.getCityLon();
    //     // console.log(getWeather(lat,lon));
    //     // setWeatherPromise(getWeather(lat,lon));
        
    // }

    // global audio
    var audio = new Audio();
    let currentHour; 
    // final filter
    function filterWeatherDataOnAudio() {
            var checkToday = new Date();
            var checkHour = checkToday.getHours();

            // console.log(checkHour + ', ' + currentHour);
            
            if(props.weatherModel.getCityWeather() != null && (checkHour !== currentHour)) {
            var today = new Date();
            currentHour = today.getHours();

            var currentWeather = props.weatherModel.getCityWeather().weather[0].main; 
            const relevantMusic = []
            var weatherIndex;

            console.log("-----------------------------");
            console.log('Weather in you City: ' + props.weatherModel.getCityWeather().weather[0].main);

            matchCityWeatherOnACWeather();

            console.log('Weather mapped to AC weather: ' + weatherIndex)

            filterAllSongsFittingCurrentHour(relevantMusic);

            filterSongFittingCurrentWeather(relevantMusic);

            audio.loop = true;
            audio.play();

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
                if (singleResult.hour == currentHour) {
                    relevantMusic.push(singleResult);
                };
            }
        }

        function filterSongFittingCurrentWeather(relevantMusic) {
            Object.values(relevantMusic).map(renderFinalSong);

            function renderFinalSong(finalSong) {
                if (finalSong.weather == weatherIndex) {
                    audio.src = finalSong.music_uri;
                    console.log('Following song was chosen: ' + finalSong['file-name'])
                    console.log('Song URI: ' + finalSong.music_uri);
                }
            }
        }
    }

    function updateData() {
        filterWeatherDataOnAudio()
    }

    function toggleTimerCreated() {
        setTimerCreated(true);
    }

    React.useEffect(bgmPromiseChangedACB, [bgmPromise]);
    React.useEffect(geoPromiseChangedACB, [geoPromise]);
    React.useEffect(weatherPromiseChangedACB, [weatherPromise]);

    return <div> 

            <MenuBarView 
                onUserInput={saveTypedCity} 
                onSearchNow={searchNowACB} 
                data={geoData} 
                onSetChosenCity={setChosenCityACB} 
                chosenCity={chosenCity} 
                // onWeatherData={filterWeatherDataOnAudio}
            /> 

            {timerCreated ||
            <Timer 
            onUpdateData={updateData}
            onTimerCreated={setTimerCreated}
            // timer={timerCreated}
            />
            }
        </div> 
}