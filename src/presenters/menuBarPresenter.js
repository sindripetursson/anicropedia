import MenuBarView from "../views/menuBarView.js";
import React from "react";
import { getGeo } from "../source/geoSource.js";
import Timer from "../views/timer.js";

// global hour and audio
let currentHour; 
var audio = new Audio();

export default 
function MenuBar(props) {
    // // geo
    const [geoPromise, setGeoPromise]= React.useState();
    const [geoData, setGeoData]= React.useState(null);
    const [, setGeoError]= React.useState(null);
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

            // console.log(checkHour + ', ' + currentHour);
            
            if(props.weatherModel.getCityWeather() != null && (checkHour !== currentHour)) {

                var today = new Date();
                currentHour = today.getHours();

                var currentWeather = props.weatherModel.getCityWeather().weather[0].main; 
                const relevantMusic = []
                var weatherIndex;

                console.log("-----------------------------");
                console.log('Weather in your city: ' + props.weatherModel.getCityWeather().weather[0].main);

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
                if (singleResult.hour === currentHour) {
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
        
        if(props.weatherModel.getUserCity()) {

            props.weatherModel.setCityWeatherPromise();
            
            setTimeout(filterWeatherDataOnAudio, 1000);

            // console.log('Update');
        }   
    }

    React.useEffect(geoPromiseChangedACB, [geoPromise]);

    return <div> 

            <MenuBarView 
                onUserInput={saveTypedCityACB} 
                onSearchNow={searchNowACB} 
                data={geoData} 
                onSetChosenCity={setChosenCityACB} 
                chosenCity={chosenCity} 
            /> 

            {timerCreated ||
                <Timer 
                onUpdateData={updateData}
                onTimerCreated={setTimerCreated}
                />
            }

        </div> 
}