import { BASE_URL } from "./apiConfig";

export function getVillagers(villagers) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }

    return fetch(BASE_URL+"/"+villagers, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}