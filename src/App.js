import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
import MenuBarView from './views/menuBarView';
import HomeView from './views/homeView';
import InfoView from './views/infoView';
import SignoutView from './views/signoutView';
import Encyclopedia from './presenters/encyclopediaPresenter';
import Villagers from './presenters/villagersPresenter';
import Collectible from './presenters/collectiblePresenter';
import Signup from './presenters/signupPresenter';
import Login from './presenters/loginPresenter';
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import { ReactSession } from 'react-client-session';


//const userModel= new UserModel();

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
      <MenuBarView setDetailsOn={setDetailsOn}/>
        <Routes>
          <Route path="/" exact element={<ProtectedRoute> <HomeView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/encyclopedia" element={<ProtectedRoute> <Encyclopedia detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/villagers" element={ <ProtectedRoute><Villagers detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/music" element={ <ProtectedRoute><Music detailsModel={props.detailsModel}/> </ProtectedRoute>}/>
          <Route path="/collectibles" element={ <ProtectedRoute><Collectible detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/info" element={ <ProtectedRoute><InfoView setDetailsOn={setDetailsOn}/> </ProtectedRoute>}/>
          <Route path="/signup" element={ <Signup/>}/>
          <Route path="/login" element={ <Login/> }/>
          <Route path="/signout" element={<SignoutView/>}/>
        </Routes>
    </div>
  );
}

export default App;
