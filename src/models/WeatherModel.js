import resolvePromise from "../resolvePromise";
import { getWeather } from "../source/weatherSource";
import { getBackgroundMusic } from "../source/musicSource";
import { getGeo } from "../source/geoSource";

class WeatherModel {
    constructor() {
        this.currentWeatherPromiseState = {};
        this.currentBackgroundMusicPromiseState = {};
        this.currentGeoPromiseState = [];
    }
/*
    setUserCity(chosenCity) {

        const cityArray = chosenCity.split(",");
        
        // 0 = Latitude, 1 = Longitude, 2 = CityName, 3 = Country, 4 = State
        this.userCity[0] = cityArray[0];
        this.userCity[1] = cityArray[1];
        this.userCity[2] = cityArray[2];
    }

    getCityLat() {
        if(this.userCity[0] != null) {
            return this.userCity[0];
        } else
        return "No City selected";
    }
    
    getCityLon() {
        if(this.userCity[1] != null) {
            return this.userCity[1];
        } else
        return "No City selected";
    }

    getUserCity() {
        if(this.userCity[2] != null) {
            return this.userCity[2];
        } else
        return "No City selected";
    }
*/
    setBackgroundMusicPromise() {
        resolvePromise(getBackgroundMusic(), this.currentBackgroundMusicPromiseState)
    }

    setCityWeatherPromise(coords) {
        resolvePromise(getWeather(coords.lat,coords.lng), this.currentWeatherPromiseState)
    }

    setGeoPromise(typedCity) {
        resolvePromise(getGeo(typedCity), this.currentGeoPromiseState)
    }

    getCityWeather() {
        return this.currentWeatherPromiseState.data;
    }

    getBackgroundMusicData() {
        return this.currentBackgroundMusicPromiseState.data;
    }

    getGeoData() {
        return this.currentGeoPromiseState.data;
    }
}

export default WeatherModel;