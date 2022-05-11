import { WEATHER_URL } from "./apiConfig";

export function getWeather(lat,lon) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }
    
    return fetch(WEATHER_URL.databaseURL+WEATHER_URL.weather+"lat="+lat+"&lon="+lon+WEATHER_URL.locate+WEATHER_URL.apiKey, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}