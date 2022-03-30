import DetailsView from "../views/detailsView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getFishDetails } from "../fishSource.js";
import { getDetails } from "../detailsSource.js";

export default 
function Search(props) {
    const [promise, setPromise]= React.useState(function initializePromiseACB() {return getFishDetails(1)});
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    function observerACB(){ 
        setPromise(getDetails(props.detailsModel.currentCategory,props.detailsModel.currentId)); 
    }

    function closeClicked(){
      props.setDetailsOn(false);
    }

    function wasCreatedACB(){  

        props.detailsModel.addObserver(observerACB);   // 1. subscribe

            function isTakenDownACB(){ 
                props.detailsModel.removeObserver(observerACB);
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
        return <div>
        
        {promiseNoData({promise, data, error}) ||      // same as {promise:promise, data:data, error:error}
              <DetailsView onCloseClicked={closeClicked} data={data} />}
              </div>
              
} 