import DetailsView from "../views/detailsView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getDetails } from "../source/detailsSource.js";
import { sessionCheckDetails } from "../utils.js";

export default 
function Details(props) {
    const [promise, setPromise]= React.useState(function initializePromiseACB() {return getDetails('villagers',1)});
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
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
      	props.detailsModel.addObserver(detailsObserverACB);   // 1. subscribe
        if (props.userModel) {
            props.userModel.addObserver(detailsModelObserverACB);
        }
        function isTakenDownACB(){ 
            props.detailsModel.removeObserver(detailsObserverACB);
            if (props.userModel) {
                props.userModel.removeObserver(detailsModelObserverACB);
            }
        } // 2.unsubscribe

        return isTakenDownACB;
    }
    React.useEffect(wasCreatedACB, []);//  stricter: [props.model] but that never changes 


    function detailsModelObserverACB(payload) {
        console.log('Payload: ', payload);
        console.log('data: ', data);
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
        } /*else if (payload && ((payload.addFish && payload.addFish.id === data.id) || (payload.addInsect && payload.addInsect.id === data.id) || 
            (payload.addSeaCreature && payload.addSeaCreature.id === data.id) || (payload.addArt && payload.addArt.id === data.id))) {
            document.getElementById('details_checkmark1').classList = "checkmark";
            document.getElementById('details_checkmark2').classList = "checkmark";
            document.getElementById('details_collection_button').classList = 'button__negative';
            document.getElementById('details_collection_button').innerHTML = 'Remove from my collection';
        } else if (payload && (payload.removeFish || payload.removeInsect || payload.removeSeaCreature || payload.removeFossils || payload.removeArt)) {
            document.getElementById('details_checkmark1').classList = "hidden";
            document.getElementById('details_checkmark2').classList = "hidden";
            document.getElementById('details_collection_button').classList = 'button__positive';
            document.getElementById('details_collection_button').innerHTML = 'Add to my collection';
        } else if (payload && payload.addVillager) {
            document.getElementById('details_checkmark1').classList = "checkmark";
            document.getElementById('details_checkmark2').classList = "checkmark";
            document.getElementById('details_collection_button').classList = 'button__negative';
            document.getElementById('details_collection_button').innerHTML = 'Remove from my villagers';
        } else if (payload && payload.removeVillager) {
            document.getElementById('details_checkmark1').classList = "hidden";
            document.getElementById('details_checkmark2').classList = "hidden";
            document.getElementById('details_collection_button').classList = 'button__positive';
            document.getElementById('details_collection_button').innerHTML = 'Add to my villagers';
        } */
    }

    function promiseChangedACB(){ 
        setData(null); 
        setError(null); 

        let cancelled = false;
        function changedAgainACB() { 
            cancelled = true; 
        };  // also called at teardown!
        if(promise) {
            promise
            .then(function saveDataACB(dt) {  
                if(!cancelled) setData(dt);
            })
            .catch(function saveErrACB(err) { 
                if(!cancelled) setError(err);
            });
        }

        return changedAgainACB;  // promiseChangedACB will be called for the new value!
  }
  

    React.useEffect(promiseChangedACB, [promise]);

    return  sessionCheckDetails() || (<div onClick={(event) => event.stopPropagation()}>
    
    {promiseNoData({promise, data, error}) ||      // same as {promise:promise, data:data, error:error}
            <DetailsView onCloseClicked={closeClicked} data={data} onCollectionChange={changeCollectionACB} isInCollection={isInCollection} userModel={props.userModel}/>}
            </div>)
              
} 