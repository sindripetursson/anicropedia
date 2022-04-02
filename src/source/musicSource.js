import { BASE_URL } from "./apiConfig";

export function getMusic(songs) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }

    return fetch(BASE_URL+"/"+songs, {
        method: "GET",
        headers: {
        },
    }).then(treatHTTPResponseACB);
}