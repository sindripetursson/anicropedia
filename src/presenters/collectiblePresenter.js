import { getCollectible } from "../source/collectibleSource";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import resolvePromise from "../resolvePromise";
import CollectibleView from "../views/collectibleView";
import { sessionCheck } from "../utils";

export default 
function Collectible(props) {
    const [promise, setPromise]=React.useState(getCollectible('fossils'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);
    const [category, setCurrentCategory] = React.useState('fossils');

    function getDetails(clickedItem){
        if (category === 'fossils') {
        props.detailsModel.setCurrentItem(category, clickedItem['file-name']);
        } else {
        props.detailsModel.setCurrentItem(category, clickedItem.id);
        }
        props.setDetailsOn(true);
    }


    function wasCreatedACB(){
        props.setDetailsOn(false);
        if(!promise){
            resolvePromise(getCollectible('fossils'), setPromise);
        }
        props.userModel.addObserver(collectiblesObserverACB);
        return function isTakenDownACB() {props.userModel.removeObserver(collectiblesObserverACB);}
    }
    React.useEffect(wasCreatedACB, []); 

    function collectiblesObserverACB(payload) {
        if (props.islandView) {
            setData({...data});
        } else if (payload && payload.addFossil) {
            const checkmark = document.getElementById("checkmark_fossils_" + payload.addFossil['file-name']);
            if (checkmark) checkmark.classList = "checkmark";
        } else if (payload && payload.removeFossils) {
            const checkmark = document.getElementById("checkmark_fossils_" + payload.removeFossils['file-name']);
            if (checkmark) checkmark.classList = "hidden";
        } else if (payload && payload.addArt) {
            const checkmark = document.getElementById("checkmark_art_" + payload.addArt.id);
            if (checkmark) checkmark.classList = "checkmark";
        } else if (payload && payload.removeArt) {
            const checkmark = document.getElementById("checkmark_art_" + payload.removeArt.id);
            if (checkmark) checkmark.classList = "hidden";
        }
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

    return sessionCheck() || ( 
        <div className="dropshadow">
            <div className={props.islandView ? "list__nav--island" : "list__nav"}>
                {props.islandView ?
                <div className="island__header">My collectibles</div>
                :
                <></>  
                }
                <div className="list__row__nav">
                <div 
                    className={category === 'fossils' ? "list__col__button" : "list__col__button inactive" }
                    onClick={() => {
                    setPromise(getCollectible('fossils'));
                    setCurrentCategory('fossils');
                    }}
                    >
                    <div className="list__nav__container">
                        <img className="list__nav__icon" alt="fossil" src="../../images/fossilsIcon.svg"/>
                        <div className={props.islandView ? "list__nav__text--island" : "list__nav__text"}>Fossils</div>
                    </div>
                </div>
                <div 
                    className={category === 'art' ? "list__col__button" : "list__col__button inactive" }
                    onClick={() => {
                    setPromise(getCollectible('art'));
                    setCurrentCategory('art');
                    }
                    }>
                    <div className="list__nav__container">
                        <img className="list__nav__icon" alt="art" src="../../images/artIcon.svg"/>
                        <div className={props.islandView ? "list__nav__text--island" : "list__nav__text"} >Art</div>
                    </div>
                </div>
                </div>
            </div>
            <div className="list">
                <div className={props.islandView ? "list__container__encyclopedia--island" : "list__container__encyclopedia"}>
                    {props.islandView ? <CollectibleView onItemClicked={getDetails} data={props.userModel.getCategoryArray(category)} userModel={props.userModel} category={category} islandView/> :
                    promiseNoData({promise, data, error}) || 
                    <div>
                        <CollectibleView onItemClicked={getDetails} data={data} userModel={props.userModel} category={category}/>
                    </div>}
                </div>
            </div>
        </div>
    );
}
