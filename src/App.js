import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
import TopbarView from './views/topbarView';
import Show from './presenters/show';
import Encyclopedia from './presenters/encyclopediaPresenter';
import Villagers from './presenters/villagersPresenter';
import Collectible from './presenters/collectiblePresenter';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";

const Search = require("./presenters/searchPresenter.js").default;
const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

function App(props) {
  const [detailsOn, setDetailsOn] = React.useState(false);

 return (
    <div className="App">
      <div className={detailsOn ? "details" : "hidden"}>
        <Details model={props.model} setDetailsOn={setDetailsOn}/>  
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<TopbarView setDetailsOn={setDetailsOn}/>}/>
          <Route path="/encyclopedia" element={<Encyclopedia model={props.model} species={'fish'} setDetailsOn={setDetailsOn}/>}/>
          <Route path="/villagers" element={ <Villagers model={props.model} setDetailsOn={setDetailsOn}/>}/>
          <Route path="/music" element={ <Music model={props.model}/>}/>
          <Route path="/collectibles" element={ <Collectible model={props.model} setDetailsOn={setDetailsOn}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
