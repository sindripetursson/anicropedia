import React from "react";
import { sessionCheck } from "../utils";
import SettingsView from "../views/settingsView";

export default 
function Settings(props) {
    return sessionCheck() || 
    (<div>
        {
        <div >
            <SettingsView userModel={props.userModel}/>
        </div>
        }
    </div>)
}
