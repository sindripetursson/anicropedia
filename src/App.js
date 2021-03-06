import './App.css';
import "./styles/styles.css";
import Home from './presenters/homePresenter';
import Info from './presenters/infoPresenter';
import Logout from './components/logout';
import Page404 from './presenters/page404Presenter';
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
import Details from './presenters/detailsPresenter';
import Music from './presenters/musicPresenter.js';

function App(props) {
    const [detailsOn, setDetailsOn] = React.useState(false);
    return (
        <div className="App">
            <div className={detailsOn ? "details" : "hidden"} onClick={() => setDetailsOn(false)}>
                <Details detailsModel={props.detailsModel} userModel={props.userModel} setDetailsOn={setDetailsOn}/>  
            </div>
            <div className={window.location.pathname === "/" ||
                            window.location.pathname === "/island" ||
                            window.location.pathname === "/critterpedia" ||
                            window.location.pathname === "/villagers" ||
                            window.location.pathname === "/music" ||
                            window.location.pathname === "/collectibles" ||
                            window.location.pathname === "/info" ||
                            window.location.pathname === "/settings" ? "": "hidden"}>
                <MenuBar setDetailsOn={setDetailsOn} weatherModel={props.weatherModel} userModel={props.userModel}/>
            </div>
            <Routes>
                <Route path="/" exact element={ <Home setDetailsOn={setDetailsOn}/> }/>
                <Route path="/island" element={<Island userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>}/>
                <Route path="/critterpedia" element={<Encyclopedia userModel={props.userModel} detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/>}/>
                <Route path="/villagers" element={ <Villagers userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> }/>
                <Route path="/music" element={ <Music userModel={props.userModel} detailsModel={props.detailsModel}/> }/>
                <Route path="/collectibles" element={ <Collectible userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/> }/>
                <Route path="/info" element={ <Info setDetailsOn={setDetailsOn}/> }/>
                <Route path="/settings" element={ <Settings userModel={props.userModel}/> }/>
                <Route path="/signup" element={ <Signup/>}/>
                <Route path="/login" element={ <Login/> }/>
                <Route path="/logout" element={<Logout/>}/>
                <Route path="*" element={<Page404/>} />
            </Routes>
        </div>
    );
}

export default App;