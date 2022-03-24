import SearchFormView from "../views/searchFormView.js";
import React from "react";

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