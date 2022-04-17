import React from "react";
import LoginView from "../views/loginView";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig.js";
import { getAuth, signInWithEmailAndPassword  } from "firebase/auth";
import { ReactSession } from "react-client-session";


const UserModel = require("../UserModel.js").default;
const userModel= new UserModel();
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
                updateFirebaseFromModel(userModel, uid);
                if(updateModelFromFirebase) {
                    updateModelFromFirebase(userModel, uid);
                }
                window.location = '/';
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('Code: ', errorCode, ' message: ', errorMessage);
            });
    }

    return (
        <div>
            <LoginView email={email} onEmailChange={onEmailChange} password={password} onPasswordChange={onPasswordChange} onLogin={loginACB}/>
        </div>
    )
}