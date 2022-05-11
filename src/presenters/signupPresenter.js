import React from "react";
import SignupView from "../views/signupView";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ReactSession } from "react-client-session";


const UserModel = require("../models/UserModel.js").default;
const userModel= new UserModel();
let firebaseModel = require("../models/firebaseModel.js");
const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;

firebase.initializeApp(firebaseConfig);  
const auth = getAuth();

export default
function Signup(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [repeatPassword, setRepeatPassword] = React.useState('');
    const [cityAddress, setCityAddress] = React.useState('');
    const [cityCoordinates, setCityCoordinates] = React.useState({lat: null, lng: null});
    const [userCreationPopup, setUserCreationPopup] = React.useState(false);

    function onNameChange(newName) {
        setName(newName.target.value);
    } 

    function onEmailChange(newEmail) {
        setEmail(newEmail.target.value);
    }

    function onPasswordChange(newPassword) {
        setPassword(newPassword.target.value);
    }

    function onRepeatPasswordChange(newPassword) {
        setRepeatPassword(newPassword.target.value);
    }

    function onCityChange(cityAddress, latlng) {
        setCityAddress(cityAddress);
        setCityCoordinates(latlng);
    }

    function signupACB(e) {
        e.preventDefault();
        if (password === repeatPassword) {
            if (cityCoordinates.lat !== null && cityCoordinates.lng !== null ) {
                createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                        // Signed in 
                        const uid = userCredential.user.uid;
                        ReactSession.set("uid", uid);
                        ReactSession.set("name", name);
                        updateFirebaseFromModel(userModel, uid);
                        if(updateModelFromFirebase) {
                            updateModelFromFirebase(userModel, uid);
                        }
                        userModel.setCityAddress(cityAddress);
                        userModel.setCityCoordinates(cityCoordinates);
                        userModel.setUserName(name);
                        document.getElementById('signupPassword').classList.remove('authentication__input--error');
                        document.getElementById('signupEmail').classList.remove('authentication__input--error');
                        document.getElementById('signupRepeatPassword').classList.remove('authentication__input--error');
                        document.getElementById('citySearchInput').classList.remove('authentication__input--error');
                        document.querySelector('.authentication__errorMessage').innerHTML = '';
                        // Timeout to let firebase create user before big promise in index.js
                        setUserCreationPopup(true);
                        setTimeout(() => {
                            window.location = '/'; 
                            setUserCreationPopup(false);
                        }, 2000);
                    })
                    .catch((error) => {
                        document.getElementById('signupPassword').classList.remove('authentication__input--error');
                        document.getElementById('signupEmail').classList.remove('authentication__input--error');
                        document.getElementById('signupRepeatPassword').classList.remove('authentication__input--error');
                        document.getElementById('citySearchInput').classList.remove('authentication__input--error');
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        const errorText = document.querySelector('.authentication__errorMessage');
        
                        if (errorCode === 'auth/weak-password') {
                            document.getElementById('signupPassword').classList.add('authentication__input--error');
                            errorText.innerHTML = 'The password has to be 6 characters long.';
                        } else if (errorCode === 'auth/email-already-in-use') {
                            document.getElementById('signupEmail').classList.add('authentication__input--error');
                            errorText.innerHTML = 'This email address is already in use.';
                        } else if (errorCode === 'auth/invalid-email') {
                            document.getElementById('signupEmail').classList.add('authentication__input--error');
                            errorText.innerHTML = 'Invalid email address.';
                        } else {
                            errorText.innerHTML = errorMessage;
                        }
                    });
            } else {
                document.querySelector('.authentication__errorMessage').innerHTML = 'Please select a valid location.';
                document.getElementById('citySearchInput').classList.add('authentication__input--error');
            }
        } else {
            document.querySelector('.authentication__errorMessage').innerHTML = 'The passwords do not match.';
            document.getElementById('signupRepeatPassword').classList.add('authentication__input--error');
        }
    }

    return (
        <div>
            <SignupView name={name} 
                        onNameChange={onNameChange} 
                        email={email} 
                        onEmailChange={onEmailChange} 
                        password={password} 
                        onPasswordChange={onPasswordChange} 
                        repeatPassword={repeatPassword} 
                        onRepeatPasswordChange={onRepeatPasswordChange} 
                        onSignup={signupACB} 
                        onCityChange={onCityChange}
                        userCreationPopup={userCreationPopup}/>
        </div>
    )
}