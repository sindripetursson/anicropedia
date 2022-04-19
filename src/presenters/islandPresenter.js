import React from "react";
import IslandView from "../views/islandView";

export default 
function Island(props) {
    return <div>
      {
        <div>
          <h1>IslandPresenter</h1>
          <IslandView />
        </div>
      }
    </div>
}
