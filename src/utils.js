import { ReactSession } from 'react-client-session';

function capitalizeFirstLetter(string){
    let arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

function isItemInCollection(itemToCheck, category, hasId, userModel) {
    function itemInCollectionCB(item) {
        if(hasId) return item.id === itemToCheck.id;
        else return item.name["name-EUen"] === itemToCheck.name["name-EUen"];
    }
    return (userModel.getCategoryArray(category).filter(itemInCollectionCB)).length > 0; 
}

function sessionCheck() {
    const user = ReactSession.get("uid");
    if (!user) {
        window.location = "/login";
        return true;
    }
    return false;
}

function sessionCheckDetails() {
    const user = ReactSession.get("uid");
    if (!user) {
        return true;
    }
    return false;
}

export {capitalizeFirstLetter, isItemInCollection, sessionCheck, sessionCheckDetails}