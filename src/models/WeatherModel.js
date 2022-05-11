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