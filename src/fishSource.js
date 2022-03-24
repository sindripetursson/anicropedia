import { BASE_URL } from "./apiConfig";

export function getFishDetails(fishId) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw "Error:" + response.status;
        return response.json(); 
    }
    
    return fetch(BASE_URL+"/fish/"+fishId, {
        method: "GET",
        headers: {
            //'Content-Type': 'application/json'
            //
            //
        },
        //redirect: 'follow'
    }).then(treatHTTPResponseACB);
}