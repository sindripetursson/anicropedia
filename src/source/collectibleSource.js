import { BASE_URL } from "./apiConfig";

export function getCollectible(collectible) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }
    
    return fetch(BASE_URL+"/"+collectible, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}