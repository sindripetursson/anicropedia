import resolvePromise from "./resolvePromise";
import { getWeather } from "./source/weatherSource";
import { getBackgroundMusic } from "./source/musicSource";

class WeatherModel {
    constructor(userCityArray = []) {
        this.userCity = userCityArray;
        this.currentWeatherPromiseState = {};
        this.currentBackgroundMusicPromiseState = {};
    }

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

    setCityWeather() {
        resolvePromise(getWeather(this.getCityLat(),this.getCityLon()), this.currentWeatherPromiseState)
        resolvePromise(getBackgroundMusic(), this.currentBackgroundMusicPromiseState)
    }

    getCityWeather() {
        return this.currentWeatherPromiseState.data;
    }

    getBackgroundMusicData() {
        return this.currentBackgroundMusicPromiseState.data;
    }
}

export default WeatherModel;