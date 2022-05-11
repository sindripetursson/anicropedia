import { WEATHER_URL } from "./apiConfig";

export function getGeo(cityName) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }

    if (cityName === '') {
        return 
    }
    
    return fetch(WEATHER_URL.databaseURL+WEATHER_URL.geo+cityName+WEATHER_URL.limit+WEATHER_URL.locate+WEATHER_URL.apiKey, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}