import React from "react";
import SignupView from "../views/signupView";
import firebase from "firebase/compat/app";
import firebaseConfig from "../firebaseConfig.js";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ReactSession } from "react-client-session";


const UserModel = require("../UserModel.js").default;
const userModel= new UserModel();
let firebaseModel = require("../firebaseModel.js");
const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;

firebase.initializeApp(firebaseConfig);  
const auth = getAuth();

export default
function Signup(props) {
    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    function onNameChange(newName) {
        setName(newName.target.value);
    } 

    function onEmailChange(newEmail) {
        setEmail(newEmail.target.value);
    }

    function onPasswordChange(newPassword) {
        setPassword(newPassword.target.value);
    }

    function signupACB(e) {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
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
            <SignupView name={name} onNameChange={onNameChange} email={email} onEmailChange={onEmailChange} password={password} onPasswordChange={onPasswordChange} onSignup={signupACB}/>
        </div>
    )
}