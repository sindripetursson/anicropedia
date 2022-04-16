import React from "react";
import { getVillagers } from "../source/villagersSource";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import VillagersView from "../views/villagersView";

export default 
function Villagers(props) {
    const [promise, setPromise]=React.useState(getVillagers('villagers'));
    const [data, setData]= React.useState(getVillagers('villagers'));
    const [error, setError]= React.useState(null);

    function getDetails(clickedItem){
      console.log(clickedItem);
      props.detailsModel.setCurrentItem('villagers', clickedItem.id);
      props.setDetailsOn(true);
    }

    function wasCreatedACB(){
        if(!promise){
            resolvePromise(getVillagers('villagers'), setPromise);
        }
    }
    React.useEffect(wasCreatedACB, [promise]); 
    
    function promiseChangedACB(){ 
        setData(null); 
        setError(null); 
    
        let cancelled = false;
        function changedAgainACB() { 
          cancelled = true; 
        };
        if(promise) {
          promise
          .then(function saveDataACB(dt) {  
            if(!cancelled) setData(dt);
          })
          .catch(function saveErrACB(err) { 
            if(!cancelled) setError(err);
          });
        }
        return changedAgainACB; 
      }
    
      React.useEffect(promiseChangedACB, [promise]);

    return <div>
    {promiseNoData({promise, data, error}) || <VillagersView onItemClicked={getDetails} data={data} userModel={props.userModel}/>}
    </div>
}
