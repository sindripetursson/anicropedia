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
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

function App(props) {
  const [detailsOn, setDetailsOn] = React.useState(false);

 return (
    <div className="App">
      <div className={detailsOn ? "details" : "hidden"}>
        <Details detailsModel={props.detailsModel} userModel={props.userModel} setDetailsOn={setDetailsOn}/>  
      </div>
      <BrowserRouter>
      <MenuBarView/>
        <Routes>
          <Route path="/" exact element={<HomeView setDetailsOn={setDetailsOn}/>}/>
          <Route path="/encyclopedia" element={<Encyclopedia userModel={props.userModel} detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/>}/>
          <Route path="/villagers" element={ <Villagers userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>}/>
          <Route path="/music" element={ <Music detailsModel={props.detailsModel}/>}/>
          <Route path="/collectibles" element={ <Collectible userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>}/>
          <Route path="/info" element={ <InfoView setDetailsOn={setDetailsOn}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
