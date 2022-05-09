import { getSpecies } from "../source/encyclopediaSource";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import EncyclopediaView from "../views/encyclopediaView";
import { sessionCheck } from "../utils";

export default 
function Encyclopedia(props) {
    
    const [promise, setPromise]=React.useState(getSpecies('fish'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [currentSpecies, setCurrentSpecies] = React.useState('fish');

    function getDetails(clickedItem){
        props.detailsModel.setCurrentItem(currentSpecies, clickedItem.id);
        props.setDetailsOn(true);
    }

    function wasCreatedACB(){
        
            props.setDetailsOn(false);
        
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

    return sessionCheck() || 
    <div className="dropshadow">
        <div className={props.islandView ? "list__nav--island" : "list__nav"}>
            {props.islandView ?
            <div className="island__header">My encyclopedia</div>
            :
            <></>  
            }
            <div className="list__row__nav">
                <div className={currentSpecies === 'fish' ? "list__col__button" : "list__col__button inactive" }
                    onClick={() => {
                    setPromise(getSpecies('fish'));
                    setCurrentSpecies('fish');
                    }}
                    >
                    <div className="list__nav__container">
                        <img className="list__nav__icon" alt="Fish" src="../../images/fishIcon.svg"/>
                        <div className={props.islandView ? "list__nav__text--island" : "list__nav__text"}> Fish </div>
                    </div>
                </div>
                <div className={currentSpecies === 'bugs' ? "list__col__button" : "list__col__button inactive" }
                    onClick={() => {
                    setPromise(getSpecies('bugs'));
                    setCurrentSpecies('bugs');
                    }
                    }>
                    <div className="list__nav__container">
                        <img className="list__nav__icon" alt="Insects" src="../../images/bugsIcon.svg"/>
                        <div className={props.islandView ? "list__nav__text--island" : "list__nav__text"}> Insects </div>
                    </div>
                </div>
                <div className={currentSpecies === 'sea' ? "list__col__button" : "list__col__button inactive" }
                    onClick={() => {
                    setPromise(getSpecies('sea'));
                    setCurrentSpecies('sea');
                    }
                    }>
                        <div className="list__nav__container">
                            <img className="list__nav__icon" alt="SeaCreatures" src="../../images/seaIcon.svg"/>
                        <div className={props.islandView ? "list__nav__text--island" : "list__nav__text"}> Sea Creatures </div>
                    </div>
                </div>
            </div>
        </div> 
        <div className="list">
            <div className={props.islandView ? "list__container__encyclopedia--island" : "list__container__encyclopedia"}>
                {props.islandView ? <EncyclopediaView onItemClicked={getDetails} data={props.userModel.getCategoryArray(currentSpecies)} userModel={props.userModel} currentSpecies={currentSpecies} islandView/> :
                promiseNoData({promise, data, error}) ||    // same as {promise:promise, data:data, error:error}
                <div> 
                    <EncyclopediaView onItemClicked={getDetails} data={data} userModel={props.userModel} currentSpecies={currentSpecies}/>
                </div>}
            </div>
        </div>
    </div>
}
