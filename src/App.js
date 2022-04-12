import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
import MenuBarView from './views/menuBarView';
import HomeView from './views/homeView';
import InfoView from './views/infoView';
import Encyclopedia from './presenters/encyclopediaPresenter';
import Villagers from './presenters/villagersPresenter';
import Collectible from './presenters/collectiblePresenter';
import Signup from './presenters/signupPresenter';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import firebaseConfig from "./firebaseConfig.js";

firebase.initializeApp(firebaseConfig);  

const UserModel = require("./UserModel.js").default;
const userModel= new UserModel();

const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

let firebaseModel = require("./firebaseModel.js");


const {updateFirebaseFromModel, updateModelFromFirebase}=firebaseModel;

function App(props) {
  const [detailsOn, setDetailsOn] = React.useState(false);
  const [user, setUser] = React.useState();

  function setUserACB(userUid) {
    setUser(userUid);
  }

  const ProtectedRoute = ({ userUid, children }) => {
    console.log('User: ', userUid);
    console.log('Props.user: ', user);
    if (!user) {
      console.log('No user in ProtectedRoute, going to signup');
      return <Navigate to="/signup" replace />;
    }
  
    return children;
  };

  React.useEffect(function onStartACB() {

    const auth = getAuth();
    onAuthStateChanged(auth, (authUser) => {
      console.log('Auth state changed!');
        if (authUser) {
            const uid = authUser.uid;
            setUserACB(uid);
            console.log("Index, User logged in with uid: ", uid);
            console.log('Index uid: ', user);
            updateFirebaseFromModel(userModel, uid);
            if(updateModelFromFirebase) {
              updateModelFromFirebase(userModel, uid);
            }
            console.log('Navigating to /');
            //window.location = '/';
        } else {
          console.log('User not logged in, navigating to singup');
          //window.location = '/signup';
        }
    });
  }, [user]);

 return (
    <div className="App">
      <div className={detailsOn ? "details" : "hidden"}>
        <Details detailsModel={props.detailsModel} userModel={userModel} setDetailsOn={setDetailsOn}/>  
      </div>
      <MenuBarView setDetailsOn={setDetailsOn}/>
        <Routes>
          <Route path="/" exact element={<ProtectedRoute user={user}> <HomeView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/encyclopedia" element={<ProtectedRoute user={user}> <Encyclopedia detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/villagers" element={ <ProtectedRoute user={user}><Villagers detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/music" element={ <ProtectedRoute user={user}><Music detailsModel={props.detailsModel}/> </ProtectedRoute>}/>
          <Route path="/collectibles" element={ <ProtectedRoute user={user}><Collectible detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/info" element={ <ProtectedRoute user={user}><InfoView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/signup" element={ <Signup user={user}/>}/>
        </Routes>
    </div>
  );
}

export default App;
