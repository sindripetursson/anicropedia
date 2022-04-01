import MusicView from "../views/musicView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getMusic } from "../source/musicSource.js";
import resolvePromise from "../resolvePromise";

export default 
function Music(props) {

    const [promise, setPromise]= React.useState(getMusic('songs'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);


    function wasCreatedACB(){
        if(!promise){
            resolvePromise(getMusic('songs'), setPromise);
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

        {promiseNoData({promise, data, error}) ||      // same as {promise:promise, data:data, error:error}
              <MusicView data={data}/>}
              </div>
} 