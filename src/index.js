import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import firebase from "firebase/compat/app";
import firebaseConfig from "./firebaseConfig.js";

import { ReactSession } from 'react-client-session';
import promiseNoData from './views/promiseNoData';

firebase.initializeApp(firebaseConfig);  
let firebaseModel = require("./firebaseModel.js");
const {updateFirebaseFromModel, updateModelFromFirebase, firebaseModelPromise}=firebaseModel;

const DetailsModel = require("./DetailsModel.js").default;
const detailsModel= new DetailsModel();

const WeatherModel = require("./WeatherModel.js").default;
const weatherModel= new WeatherModel();


let bigPromise;

function ReactRoot() {
  const [userModel, setUserModel] = React.useState();
  const [error, setError] = React.useState();

  ReactSession.setStoreType("localStorage");
  bigPromise = firebaseModelPromise(ReactSession.get("uid"));


  
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();