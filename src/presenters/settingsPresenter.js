import React from "react";
import { sessionCheck } from "../utils";
import SettingsView from "../views/settingsView";

export default 
function Settings(props) {
    const [modalNameVisible, setModalNameVisible] = React.useState(false);
    const [modalCityVisible, setModalCityVisible] = React.useState(false);
    const [modalPasswordVisible, setModalPasswordVisible] = React.useState(false);
    const [modalClearVisible, setModalClearVisible] = React.useState(false);

    return sessionCheck() || 
    (<div>
        {
        <div >
            <SettingsView 
                userModel={props.userModel} 
                modalNameVisible={modalNameVisible}
                setModalNameVisible={setModalNameVisible}
                modalCityVisible={modalCityVisible}
                setModalCityVisible={setModalCityVisible}
                modalPasswordVisible={modalPasswordVisible}
                setModalPasswordVisible={setModalPasswordVisible}
                modalClearVisible={modalClearVisible}
                setModalClearVisible={setModalClearVisible} />
        </div>
        }
    </div>)
}
