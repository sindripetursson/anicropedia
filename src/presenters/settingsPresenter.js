import React from "react";
import { sessionCheck } from "../utils";
import SettingsView from "../views/settingsView";
import { EmailAuthProvider, getAuth, updatePassword, reauthenticateWithCredential } from "firebase/auth";
import { clearUserData } from "../firebaseModel";
import { ReactSession } from "react-client-session";

export default 
function Settings(props) {
    const [modalNameVisible, setModalNameVisible] = React.useState(false);
    const [modalCityVisible, setModalCityVisible] = React.useState(false);
    const [modalPasswordVisible, setModalPasswordVisible] = React.useState(false);
    const [modalClearVisible, setModalClearVisible] = React.useState(false);
    const [confirmationVisible, setConfirmationVisible] = React.useState(false);

    const [name, setName] = React.useState('');
    const [newCityAddress, setNewCityAddress] = React.useState('');
    const [newCityCoordinates, setNewCityCoordinates] = React.useState({lat: null, lng: null});
    const [oldPassword, setOldPassword] = React.useState('');
    const [newPassword, setNewPassword] = React.useState('');
    const [repeatNewPassword, setRepeatNewPassword] = React.useState('');
    let observerCoords = {lat: null, lng: null};
    let observerAddress = '';

    function turnOffConfirmation(){
        setConfirmationVisible(false);
    }

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
        setConfirmationVisible(true);
        setTimeout(turnOffConfirmation, 5000);
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
        setConfirmationVisible(true);
        setTimeout(turnOffConfirmation, 5000);
    }

    function onPasswordSubmitACB() {
        document.getElementById('oldPassword').classList.remove('settings__input--error');
        document.getElementById('newPassword').classList.remove('settings__input--error');
        document.getElementById('newRepeatPassword').classList.remove('settings__input--error');
        document.getElementById('settingsPasswordError').innerHTML = '';
        
        const auth = getAuth();
        const user = auth.currentUser;
        const credential = EmailAuthProvider.credential(user.email, oldPassword);
        reauthenticateWithCredential(user, credential)
            .then(() => {
                if (newPassword === '') {
                    document.getElementById('newPassword').classList.add('settings__input--error');
                    document.getElementById('settingsPasswordError').innerHTML = 'The new password has to be 6 characters long.';
                } else if (newPassword === repeatNewPassword) {
                    updatePassword(user, newPassword).then(() => {
                        setOldPassword('');
                        setNewPassword('');
                        setRepeatNewPassword('');
                        setModalPasswordVisible(false);
                    })
                    .catch((e) => document.getElementById('settingsPasswordError').innerHTML = 'Error updating password, please try again later.');
                } else {
                    document.getElementById('newRepeatPassword').classList.add('settings__input--error');
                    document.getElementById('settingsPasswordError').innerHTML = 'The passwords do not match.';
                }
            })
            .catch((e) => {
                document.getElementById('oldPassword').classList.add('settings__input--error');
                document.getElementById('settingsPasswordError').innerHTML = 'Incorrect old password.';
            });

        setConfirmationVisible(true);
        setTimeout(turnOffConfirmation, 5000);
    }

    function clearDataSubmitACB() {
        console.log('Clear data');
        clearUserData(ReactSession.get("uid"));
    }

    function nameChangeACB(payload) {
        if (payload && payload.updateUserName) {
            setName(payload.updateUserName);
        }
    }

    function latitudeChangeACB(payload) {
        if (payload && payload.updateCityLat) {
            observerCoords = {lat: payload.updateCityLat, lng: null};
        }
    }

    function longitudeChangeACB(payload) {
        if (payload && payload.updateCityLng) {
            observerCoords = {lat: observerCoords.lat, lng: payload.updateCityLng};
            setNewCityCoordinates(observerCoords);
            props.userModel.setCityCoordinates(observerCoords);
            observerCoords = {lat: null, lng: null};
        }
    }

    function addressChangeACB(payload) {
        if (payload && payload.updateCityAddress) {
            observerAddress = payload.updateCityAddress;
            setNewCityAddress(observerAddress);
            props.userModel.setCityAddress(observerAddress);
        }
    }

    function wasCreatedACB(){
        props.userModel.addObserver(nameChangeACB);
        props.userModel.addObserver(latitudeChangeACB);
        props.userModel.addObserver(longitudeChangeACB);
        props.userModel.addObserver(addressChangeACB);
        return function isTakenDownACB() {
            props.userModel.removeObserver(nameChangeACB);
            props.userModel.removeObserver(latitudeChangeACB);
            props.userModel.removeObserver(longitudeChangeACB);
            props.userModel.removeObserver(addressChangeACB);
        }
    }
    React.useEffect(wasCreatedACB, []); 

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
                onCitySubmit={onCitySubmitACB}
                oldPassword={oldPassword}
                onOldPasswordChange={(password) => setOldPassword(password.target.value)}
                newPassword={newPassword}
                onNewPasswordChange={(password) => setNewPassword(password.target.value)}
                repeatNewPassword={repeatNewPassword}
                onRepeatNewPasswordChange={(password) => setRepeatNewPassword(password.target.value)}
                onPasswordSubmit={onPasswordSubmitACB}
                confirmationVisible={confirmationVisible}
                turnOffConfirmation={turnOffConfirmation}
                onClearDataSubmit={clearDataSubmitACB}                />
        </div>
        }
    </div>)
}
