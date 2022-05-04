import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
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
import Settings from './presenters/settingsPresenter';
import React from 'react';
import MenuBar from './presenters/menuBarPresenter';
import { Routes, Route } from "react-router-dom";

const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

function App(props) {
    const [detailsOn, setDetailsOn] = React.useState(false);
    console.log(props.userModel.getUserName());
    return (
        <div className="App">
        <div className={detailsOn ? "details" : "hidden"}>
            <Details detailsModel={props.detailsModel} userModel={props.userModel} setDetailsOn={setDetailsOn}/>  
        </div>
            <MenuBar setDetailsOn={setDetailsOn} weatherModel={props.weatherModel} userModel={props.userModel}/>
            <Routes>
                <Route path="/" exact element={ <HomeView setDetailsOn={setDetailsOn}/> }/>
                <Route path="/island" element={<Island userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>}/>
                <Route path="/encyclopedia" element={<Encyclopedia userModel={props.userModel} detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/>}/>
                <Route path="/villagers" element={ <Villagers userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> }/>
                <Route path="/music" element={ <Music userModel={props.userModel} detailsModel={props.detailsModel}/> }/>
                <Route path="/collectibles" element={ <Collectible userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> }/>
                <Route path="/info" element={ <InfoView setDetailsOn={setDetailsOn}/> }/>
                <Route path="/settings" element={ <Settings userModel={props.userModel}/> }/>
                <Route path="/signup" element={ <Signup/>}/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/signout" element={<SignoutView/>}/>
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    );
}

export default App;
