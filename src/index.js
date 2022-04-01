import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const UserModel = require("./UserModel.js").default;
const userModel= new UserModel();
const DetailsModel = require("./DetailsModel.js").default;
const detailsModel= new DetailsModel();
let firebaseModel = require("./firebaseModel.js");


const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;
function ReactRoot() {
  //const [userModel, setUserModel] = React.useState(new UserModel());

  React.useEffect(function onStartACB() {
    updateFirebaseFromModel(userModel);
    if(updateModelFromFirebase) {
      updateModelFromFirebase(userModel);
    }
  }, []);
  return <App userModel={userModel} detailsModel={detailsModel}/>;
}

ReactDOM.render(
  <ReactRoot/>,
  document.getElementById('root')
);


//ReactDOM.render(
//  <React.StrictMode>
//    <App detailsModel={detailsModel} />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();