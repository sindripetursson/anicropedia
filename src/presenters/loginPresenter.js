import React from "react";
import LoginView from "../views/loginView";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { ReactSession } from "react-client-session";


const UserModel = require("../UserModel.js").default;
let firebaseModel = require("../firebaseModel.js");
const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;

firebase.initializeApp(firebaseConfig);  
const auth = getAuth();

export default
function Login(props) {
    if (ReactSession.get("uid")) window.location = '/';
    
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onEmailChange(newEmail) {
        setEmail(newEmail.target.value);
    }

    function onPasswordChange(newPassword) {
        setPassword(newPassword.target.value);
    }

    function loginACB(e) {
        e.preventDefault();
        signInWithEmailAndPassword (auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const uid = userCredential.user.uid;
            const name = userCredential.user.displayName;
            ReactSession.set("uid", uid);
            ReactSession.set("name", name);
            const userModel= new UserModel();
            updateFirebaseFromModel(userModel, uid);
            if(updateModelFromFirebase) {
                updateModelFromFirebase(userModel, uid);
            }
            document.getElementById('loginPassword').classList.remove('authentication__input--error');
            document.getElementById('loginEmail').classList.remove('authentication__input--error');
            document.querySelector('.authentication__errorMessage').innerHTML = '';
            window.location = '/';
        })
        .catch((error) => {
            document.getElementById('loginPassword').classList.remove('authentication__input--error');
            document.getElementById('loginEmail').classList.remove('authentication__input--error');
            const errorCode = error.code;
            const errorMessage = error.message;
            const errorText = document.querySelector('.authentication__errorMessage');

            if (errorCode === 'auth/wrong-password') {
                document.getElementById('loginPassword').classList.add('authentication__input--error');
                errorText.innerHTML = 'The password is incorrect.';
            } else if (errorCode === 'auth/invalid-email') {
                document.getElementById('loginEmail').classList.add('authentication__input--error');
                errorText.innerHTML = 'Invalid email address.';
            } else if (errorCode === 'auth/user-disabled') {
                document.getElementById('loginEmail').classList.add('authentication__input--error');
                errorText.innerHTML = 'This email address has been disabled.';
            } else if (errorCode === 'auth/user-not-found') {
                document.getElementById('loginEmail').classList.add('authentication__input--error');
                errorText.innerHTML = 'No user matches this email.';
            } else {
                errorText.innerHTML = errorMessage;
            }
        });
    }

    return (
        <div>
            <LoginView email={email} onEmailChange={onEmailChange} password={password} onPasswordChange={onPasswordChange} onLogin={loginACB}/>
        </div>
    )
}