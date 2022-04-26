import React from "react";
import { sessionCheck } from "../utils";
import SettingsView from "../views/settingsView";

export default 
function Settings(props) {
    return sessionCheck() || (<div>
      {
        <div>
          <h1>Settings</h1>
          <SettingsView />
        </div>
      }
    </div>)
}
