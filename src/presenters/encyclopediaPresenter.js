import { getSpecies } from "../encyclopediaSource";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import EncyclopediaView from "../views/encyclopediaView";

export default 
function Encyclopedia(props) {
    const [promise, setPromise]=React.useState(getSpecies('fish'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    function wasCreatedACB(){
        if(!promise){
            resolvePromise(getSpecies('fish'), setPromise);
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

    return <div>
    <div className="list__nav">
        <div className="buttons" onClick={() => {
        setPromise(getSpecies('fish'));
        }}>Fish </div>
        <div className="buttons" onClick={() => {
            setPromise(getSpecies('bugs'));
            }}>Insects </div>
        <div className="buttons" onClick={() => {
        setPromise(getSpecies('sea'));
        }}>Sea Creatures </div>
    </div>
    {promiseNoData({promise, data, error}) ||      // same as {promise:promise, data:data, error:error}
        <EncyclopediaView data={data} />}
    </div>
}
