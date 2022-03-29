import { BASE_URL } from "./apiConfig";

export function getDetails(type,id) {
    function treatHTTPResponseACB(response){
        if(!response.ok) throw new Error(response.status);
        return response.json(); 
    }
    
    return fetch(BASE_URL+"/"+type+'/'+id, {
        method: "GET",
        headers: {
        },
        //redirect: 'follow'
    }).then(treatHTTPResponseACB);
}