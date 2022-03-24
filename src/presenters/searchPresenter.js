import SearchResultsView from "../views/searchResultsView.js";
import SearchFormView from "../views/searchFormView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getFishDetails } from "../fishSource.js";
import resolvePromise from "../resolvePromise.js";
import { doSearch } from "../FishModel";

export default 
function Details(props) {
    const [fishId, setFishId] = React.useState(1);



          function searchNowACB() {
            props.model.setCurrentFish(fishId);
            window.location.hash = "#details";
          }
        
          function setSearchTextACB(newFishId) {
                let normalizedFishId = newFishId.toLowerCase().replace(" ","_");
                setFishId(normalizedFishId)  
          }

        return <div >

            <SearchFormView 
                onSearchNow={searchNowACB}
                onSetSearchText={setSearchTextACB}
            />

              </div>
              
} 