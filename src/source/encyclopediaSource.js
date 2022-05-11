import { BASE_URL } from "./apiConfig";

export function getSpecies(species) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }
    
    return fetch(BASE_URL+"/"+species, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}