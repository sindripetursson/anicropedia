import React from "react";
import { sessionCheck } from "../utils";
import SettingsView from "../views/settingsView";

export default 
function Settings(props) {
    const [modalNameVisible, setModalNameVisible] = React.useState(false);
    const [modalCityVisible, setModalCityVisible] = React.useState(false);
    const [modalPasswordVisible, setModalPasswordVisible] = React.useState(false);
    const [modalClearVisible, setModalClearVisible] = React.useState(false);

    const [name, setName] = React.useState('');
    const [newCityAddress, setNewCityAddress] = React.useState('');
    const [newCityCoordinates, setNewCityCoordinates] = React.useState({lat: null, lng: null});
    

    function onNameSubmitACB() {
        if (name !== '' && name.length < 70) {
            document.getElementById('settingsName').classList.remove('settings__input--error');
            props.userModel.setUserName(name);
            setModalNameVisible(false);
            setName('');
        } else {
            document.getElementById('settingsName').classList.add('settings__input--error');
            if (name === '') {
                document.getElementById('settingsNameError').innerHTML = 'The new name must be at least 1 character long.';
            } else {
                document.getElementById('settingsNameError').innerHTML = 'The new name must be shorter than 70 character long.';
            }
        }
    }

    function onCityChange(cityAddress, latlng) {
        setNewCityAddress(cityAddress);
        setNewCityCoordinates(latlng);
    }

    function onCitySubmitACB() {
        if (newCityAddress !== '') {
            document.getElementById('citySearchInput').classList.remove('settings__input--error');
            props.userModel.setCityAddress(newCityAddress);
            props.userModel.setCityCoordinates(newCityCoordinates);
            setModalCityVisible(false);
            setNewCityAddress('');
            setNewCityCoordinates({lat: null, lng: null});
        } else {
            document.getElementById('citySearchInput').classList.add('settings__input--error');
            document.getElementById('settingsCityError').innerHTML = 'No location selected.';
        }
    }

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
                setModalClearVisible={setModalClearVisible}
                name={name}
                onNameChange={(newName) => setName(newName.target.value)}
                onNameSubmit={onNameSubmitACB}
                onCityChange={onCityChange}
                onCitySubmit={onCitySubmitACB}/>
        </div>
        }
    </div>)
}
