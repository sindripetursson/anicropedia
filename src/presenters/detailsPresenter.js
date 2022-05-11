import DetailsView from "../views/detailsView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getDetails } from "../source/detailsSource.js";
import { sessionCheckDetails } from "../utils.js";

export default 
function Details(props) {
    const [promise, setPromise] = React.useState(function initializePromiseACB() {return getDetails('villagers',1)});
    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);
	const [isInCollection, setIsInCollection] = React.useState(false);
    
    function isItemInCurrentCollection() {
        function itemInCollectionCB(item) {
            if (props.detailsModel.currentCategory === 'fossils') {
                return item['file-name'] === props.detailsModel.currentId;
            } else {
                return item.id === props.detailsModel.currentId;
            }
      	}
		return (props.userModel.getCategoryArray(props.detailsModel.currentCategory).filter(itemInCollectionCB)).length > 0; 
    }

    function detailsObserverACB(){ 
        setPromise(getDetails(props.detailsModel.currentCategory,props.detailsModel.currentId)); 
		setIsInCollection(isItemInCurrentCollection());
    }

    function changeCollectionACB() {
      	if(isInCollection) {
			props.userModel.removeItem(data, props.detailsModel.currentCategory);
			setIsInCollection(isItemInCurrentCollection());
		} else {
			props.userModel.addItem(data, props.detailsModel.currentCategory);
			setIsInCollection(isItemInCurrentCollection());
		}
    }

    function closeClicked(){
    	props.setDetailsOn(false);
    }

    function wasCreatedACB(){  
      	props.detailsModel.addObserver(detailsObserverACB);
        if (props.userModel) {
            props.userModel.addObserver(detailsModelObserverACB);
        }
        function isTakenDownACB(){ 
            props.detailsModel.removeObserver(detailsObserverACB);
            if (props.userModel) {
                props.userModel.removeObserver(detailsModelObserverACB);
            }
        }
        return isTakenDownACB;
    }

    React.useEffect(wasCreatedACB, []);

    function detailsModelObserverACB(payload) {
        if (props.islandView) {
            setData({...data});
        } else if (payload && payload.addFish && document.getElementById('details_checkmark1_fish_' + payload.addFish.id)) { 
            document.getElementById('details_checkmark1_fish_' + payload.addFish.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_fish_' + payload.addFish.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_fish_' + payload.addFish.id).classList = 'button__negative';
            document.getElementById('details_collection_button_fish_' + payload.addFish.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeFish && document.getElementById('details_checkmark1_fish_' + payload.removeFish.id)) {
            document.getElementById('details_checkmark1_fish_' + payload.removeFish.id).classList = "hidden";
            document.getElementById('details_checkmark2_fish_' + payload.removeFish.id).classList = "hidden";
            document.getElementById('details_collection_button_fish_' + payload.removeFish.id).classList = 'button__positive';
            document.getElementById('details_collection_button_fish_' + payload.removeFish.id).innerHTML = 'Add to my collection';
        } else if (payload && payload.addInsect && document.getElementById('details_checkmark1_bugs_' + payload.addInsect.id)) { 
            document.getElementById('details_checkmark1_bugs_' + payload.addInsect.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_bugs_' + payload.addInsect.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_bugs_' + payload.addInsect.id).classList = 'button__negative';
            document.getElementById('details_collection_button_bugs_' + payload.addInsect.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeInsect && document.getElementById('details_checkmark1_bugs_' + payload.removeInsect.id)) {
            document.getElementById('details_checkmark1_bugs_' + payload.removeInsect.id).classList = "hidden";
            document.getElementById('details_checkmark2_bugs_' + payload.removeInsect.id).classList = "hidden";
            document.getElementById('details_collection_button_bugs_' + payload.removeInsect.id).classList = 'button__positive';
            document.getElementById('details_collection_button_bugs_' + payload.removeInsect.id).innerHTML = 'Add to my collection';
        } else if (payload && payload.addSeaCreature && document.getElementById('details_checkmark1_sea_' + payload.addSeaCreature.id)) { 
            document.getElementById('details_checkmark1_sea_' + payload.addSeaCreature.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_sea_' + payload.addSeaCreature.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_sea_' + payload.addSeaCreature.id).classList = 'button__negative';
            document.getElementById('details_collection_button_sea_' + payload.addSeaCreature.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeSeaCreature && document.getElementById('details_checkmark1_sea_' + payload.removeSeaCreature.id)) {
            document.getElementById('details_checkmark1_sea_' + payload.removeSeaCreature.id).classList = "hidden";
            document.getElementById('details_checkmark2_sea_' + payload.removeSeaCreature.id).classList = "hidden";
            document.getElementById('details_collection_button_sea_' + payload.removeSeaCreature.id).classList = 'button__positive';
            document.getElementById('details_collection_button_sea_' + payload.removeSeaCreature.id).innerHTML = 'Add to my collection';
        } else if (payload && payload.addArt && document.getElementById('details_checkmark1_art_' + payload.addArt.id)) { 
            document.getElementById('details_checkmark1_art_' + payload.addArt.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_art_' + payload.addArt.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_art_' + payload.addArt.id).classList = 'button__negative';
            document.getElementById('details_collection_button_art_' + payload.addArt.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeArt && document.getElementById('details_checkmark1_art_' + payload.removeArt.id)) {
            document.getElementById('details_checkmark1_art_' + payload.removeArt.id).classList = "hidden";
            document.getElementById('details_checkmark2_art_' + payload.removeArt.id).classList = "hidden";
            document.getElementById('details_collection_button_art_' + payload.removeArt.id).classList = 'button__positive';
            document.getElementById('details_collection_button_art_' + payload.removeArt.id).innerHTML = 'Add to my collection';
        } else if (payload && payload.addArt && document.getElementById('details_checkmark1_art_' + payload.addArt.id)) { 
            document.getElementById('details_checkmark1_art_' + payload.addArt.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_art_' + payload.addArt.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_art_' + payload.addArt.id).classList = 'button__negative';
            document.getElementById('details_collection_button_art_' + payload.addArt.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeArt && document.getElementById('details_checkmark1_art_' + payload.removeArt.id)) {
            document.getElementById('details_checkmark1_art_' + payload.removeArt.id).classList = "hidden";
            document.getElementById('details_checkmark2_art_' + payload.removeArt.id).classList = "hidden";
            document.getElementById('details_collection_button_art_' + payload.removeArt.id).classList = 'button__positive';
            document.getElementById('details_collection_button_art_' + payload.removeArt.id).innerHTML = 'Add to my collection';
        } else if (payload && payload.addFossil && document.getElementById('details_checkmark1_fossils_' + payload.addFossil['file-name'])) { 
            document.getElementById('details_checkmark1_fossils_' + payload.addFossil['file-name']).classList = "checkmark__image";
            document.getElementById('details_checkmark2_fossils_' + payload.addFossil['file-name']).classList = "checkmark__details";
            document.getElementById('details_collection_button_fossils_' + payload.addFossil['file-name']).classList = 'button__negative';
            document.getElementById('details_collection_button_fossils_' + payload.addFossil['file-name']).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeFossils && document.getElementById('details_checkmark1_fossils_' + payload.removeFossils['file-name'])) {
            document.getElementById('details_checkmark1_fossils_' + payload.removeFossils['file-name']).classList = "hidden";
            document.getElementById('details_checkmark2_fossils_' + payload.removeFossils['file-name']).classList = "hidden";
            document.getElementById('details_collection_button_fossils_' + payload.removeFossils['file-name']).classList = 'button__positive';
            document.getElementById('details_collection_button_fossils_' + payload.removeFossils['file-name']).innerHTML = 'Add to my collection';
        } else if (payload && payload.addVillager && document.getElementById('details_checkmark1_villagers_' + payload.addVillager.id)) {
            document.getElementById('details_checkmark1_villagers_' + payload.addVillager.id).classList = "checkmark__image";
            document.getElementById('details_checkmark2_villagers_' + payload.addVillager.id).classList = "checkmark__details";
            document.getElementById('details_collection_button_villagers_' + payload.addVillager.id).classList = 'button__negative';
            document.getElementById('details_collection_button_villagers_' + payload.addVillager.id).innerHTML = 'Remove from my villagers';
        } else if (payload && payload.removeVillager && document.getElementById('details_checkmark1_villagers_' + payload.removeVillager.id)) {
            document.getElementById('details_checkmark1_villagers_' + payload.removeVillager.id).classList = "hidden";
            document.getElementById('details_checkmark2_villagers_' + payload.removeVillager.id).classList = "hidden";
            document.getElementById('details_collection_button_villagers_' + payload.removeVillager.id).classList = 'button__positive';
            document.getElementById('details_collection_button_villagers_' + payload.removeVillager.id).innerHTML = 'Add to my villagers';
        }
    }

    function promiseChangedACB(){ 
        setData(null); 
        setError(null); 

        let cancelled = false;
        function changedAgainACB() { 
            cancelled = true; 
        };
        if(promise) {
            promise.then(function saveDataACB(dt) {  
                if(!cancelled) setData(dt);
            })
            .catch(function saveErrACB(err) { 
                if(!cancelled) setError(err);
            });
        }

        return changedAgainACB;
    }

    React.useEffect(promiseChangedACB, [promise]);

    return  sessionCheckDetails() || 
    (<div onClick={(event) => event.stopPropagation()}>
        {promiseNoData({promise, data, error}) ||
        <DetailsView onCloseClicked={closeClicked} data={data} onCollectionChange={changeCollectionACB} isInCollection={isInCollection} userModel={props.userModel}/>}
    </div>)
} 