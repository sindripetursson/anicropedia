import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import { getAuth, onAuthStateChanged } from "firebase/auth";
import { BrowserRouter } from "react-router-dom";
//import firebase from "firebase/compat/app";
//import firebaseConfig from "./firebaseConfig.js";

//firebase.initializeApp(firebaseConfig);  

// const UserModel = require("./UserModel.js").default;
// const userModel= new UserModel();
const DetailsModel = require("./DetailsModel.js").default;
const detailsModel= new DetailsModel();
//let firebaseModel = require("./firebaseModel.js");


//const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;
function ReactRoot() {
  //const [userModel, setUserModel] = React.useState(new UserModel());
  //const [user, setUser] = React.useState(null);

  // function setUserACB(userUid) {
  //   setUser(userUid);
  // }

  //const navigate = useNavigate();

  // React.useEffect(function onStartACB() {

  //   const auth = getAuth();
  //   onAuthStateChanged(auth, (authUser) => {
  //     console.log('Auth state changed!');
  //       if (authUser) {
  //           const uid = authUser.uid;
  //           setUserACB(uid);
  //           console.log("Index, User logged in with uid: ", uid);
  //           console.log('Index uid: ', user);
  //           updateFirebaseFromModel(userModel, uid);
  //           if(updateModelFromFirebase) {
  //             updateModelFromFirebase(userModel, uid);
  //           }
  //           console.log('Navigating to /');
  //           //window.location = '/';
  //       } else {
  //         console.log('User not logged in, navigating to singup');
  //         //window.location = '/signup';
  //       }
  //   });
  // }, [user]);
  return (
    <BrowserRouter>
      <App /*user={user} userModel={userModel} */ detailsModel={detailsModel}/>
    </BrowserRouter>
  );
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