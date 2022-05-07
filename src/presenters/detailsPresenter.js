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
            function isTakenDownACB(){ 
                props.detailsModel.removeObserver(detailsObserverACB);
            } // 2.unsubscribe

        return isTakenDownACB;
}
React.useEffect(wasCreatedACB, []);//  stricter: [props.model] but that never changes 


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