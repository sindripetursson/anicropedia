import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
import MenuBarView from './views/menuBarView';
import HomeView from './views/homeView';
import InfoView from './views/infoView';
import SignoutView from './views/signoutView';
import Page404 from './views/page404';
import Encyclopedia from './presenters/encyclopediaPresenter';
import Island from './presenters/islandPresenter';
import Villagers from './presenters/villagersPresenter';
import Collectible from './presenters/collectiblePresenter';
import Signup from './presenters/signupPresenter';
import Login from './presenters/loginPresenter';
import React from 'react';
import MenuBar from './presenters/menuBarPresenter';
import { Routes, Route, Navigate} from "react-router-dom";
import Timer from './views/timer';


import { ReactSession } from 'react-client-session';

const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

function App(props) {
  const [detailsOn, setDetailsOn] = React.useState(false);

  ReactSession.setStoreType("localStorage");

  const ProtectedRoute = ({ children }) => {
    const user = ReactSession.get("uid");
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    return children;
  };


 return (
    <div className="App">
      <div className={detailsOn ? "details" : "hidden"}>
        <Details detailsModel={props.detailsModel} userModel={props.userModel} setDetailsOn={setDetailsOn}/>  
      </div>
        <MenuBar setDetailsOn={setDetailsOn} weatherModel={props.weatherModel}/>
        <Routes>
          <Route path="/" exact element={<ProtectedRoute> <HomeView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/island" element={<ProtectedRoute> <Island userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/encyclopedia" element={<ProtectedRoute> <Encyclopedia userModel={props.userModel} detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/villagers" element={ <ProtectedRoute><Villagers userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/music" element={ <ProtectedRoute><Music userModel={props.userModel} detailsModel={props.detailsModel}/> </ProtectedRoute>}/>
          <Route path="/collectibles" element={ <ProtectedRoute><Collectible userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/info" element={ <ProtectedRoute><InfoView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/signup" element={ <Signup/>}/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signout" element={<SignoutView/>}/>
          <Route path="*" element={<Page404/>} />
        </Routes>
    </div>
  );
}

export default App;
