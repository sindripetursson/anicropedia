import React from "react";
import IslandView from "../views/islandView";
import { sessionCheck } from "../utils";

export default 
function Island(props) {
    return sessionCheck() || (<div>
      {
        <div>
          <h1>IslandPresenter</h1>
          <IslandView />
        </div>
      }
    </div>)
}
