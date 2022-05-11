import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebaseConfig from "./firebaseConfig.js";

import { ReactSession } from 'react-client-session';
import promiseNoData from './views/promiseNoData';

firebase.initializeApp(firebaseConfig);  
let firebaseModel = require("./models/firebaseModel.js");
const {updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise}=firebaseModel;

const DetailsModel = require("./models/DetailsModel.js").default;
const detailsModel= new DetailsModel();

const WeatherModel = require("./models/WeatherModel.js").default;
const weatherModel= new WeatherModel();


let bigPromise;


function ReactRoot() {
    const [userModel, setUserModel] = React.useState();
    const [error, setError] = React.useState();

    ReactSession.setStoreType("localStorage");

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            ReactSession.set("uid", null);
            ReactSession.set("name", null);
        }   
    });

    bigPromise = ReactSession.get("uid")!==null?firebaseModelPromise(ReactSession.get("uid")):null;
    
    React.useEffect(function onStartACB() {
        function setUserModelACB(model) {
            setUserModel(model);
        }

        const uid = ReactSession.get("uid");
        if(uid) {
            function saveModelACB(model) {
                setUserModelACB(model);
                updateFirebaseFromModel(model, uid); 
                if(updateModelFromFirebase) // maybe it was not defined yet
                updateModelFromFirebase(model, uid);
            }
            
            function errorModelACB(error) {
                setError(error);
                console.error(error);
            }
            bigPromise.then(saveModelACB).catch(errorModelACB);
        }
    }, []);

    return (
        (ReactSession.get("uid") && promiseNoData({promise: bigPromise, data: userModel, error: error})) ||
        <BrowserRouter>
            <App detailsModel={detailsModel} userModel={userModel} weatherModel={weatherModel}/>
        </BrowserRouter>
    );
}

ReactDOM.render(
  <ReactRoot/>,
  document.getElementById('root')
);

reportWebVitals();