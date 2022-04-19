import { GEO_URL } from "./apiConfig";

export function getGeo(cityName) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }
    
    return fetch(GEO_URL.databaseURL+cityName+GEO_URL.limit+GEO_URL.locate+GEO_URL.apiKey, {
        method: "GET",
        headers: {
        },
        //redirect: 'follow'
    }).then(treatHTTPResponseACB);
}