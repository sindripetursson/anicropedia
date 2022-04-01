import { getCollectible } from "../collectibleSource";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import CollectibleView from "../views/collectibleView";

export default 
function Collectible(props) {
    const [promise, setPromise]=React.useState(getCollectible('fossils'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [category, setCurrentCategory] = React.useState('fossils');

    function getDetails(clickedItem){
      props.detailsModel.setCurrentItem(category, clickedItem['file-name']);
      props.setDetailsOn(true);
    }


    function wasCreatedACB(){
        if(!promise){
            resolvePromise(getCollectible('fossils'), setPromise);
        }
    }
    React.useEffect(wasCreatedACB, []); 
    
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

    return ( 
      <div>
        <div className="list__nav">
          <div 
            className="buttons" 
            onClick={() => { setPromise(getCollectible('fossils'));setCurrentCategory('fossils');}}>
              Fossils 
          </div>
          <div 
            className="buttons" 
            onClick={() => {setPromise(getCollectible('art'));setCurrentCategory('art');}}>
              Art 
          </div>
        </div>
        {promiseNoData({promise, data, error}) ||      // same as {promise:promise, data:data, error:error}
          <CollectibleView onItemClicked={getDetails} data={data} />}
      </div>
    );
}
