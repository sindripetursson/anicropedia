import MenuBarView from "../views/menuBarView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import { getGeo } from "../source/geoSource.js";

export default 
function MenuBar(props) {
    const [promise, setPromise]= React.useState();
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [typedCity, setTypedCity]= React.useState(null);
    const [chosenCity, setChosenCity]= React.useState(props.userModel.getUserCity());


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
    
        return changedAgainACB; 
    }
    
    // catch input element
    function saveTypedCity(typedCityName) {
        setTypedCity(typedCityName);
    };
    
    // get the promise for the input
    function searchNowACB() {
        setPromise(getGeo(typedCity));
    };

    // catch the select element
    function setChosenCityACB(chosenCity) {        
        props.userModel.setUserCity(chosenCity);
        setChosenCity(props.userModel.getUserCity());
    };

    React.useEffect(promiseChangedACB, [promise]);


          return <div> 
                    <MenuBarView 
                        onUserInput={saveTypedCity} 
                        onSearchNow={searchNowACB} 
                        data={data} 
                        onSetChosenCity={setChosenCityACB} 
                        chosenCity={chosenCity} 
                    /> 
                </div> 
}