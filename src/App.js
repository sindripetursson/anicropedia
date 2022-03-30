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

const Search = require("./presenters/searchPresenter.js").default;
const Details = require("./presenters/detailsPresenter.js").default;
const Music = require("./presenters/musicPresenter.js").default;

function App(props) {
  const [detailsOn, setDetailsOn] = React.useState(false);
  // if(window.location.hash !== "#search" || window.location.hash !== "#details" || window.location.hash !== "#summary") window.location.hash = "#search";

 return (
    <div className="App">

      <TopbarView setDetailsOn={setDetailsOn}/>
      <div className={detailsOn ? "details" : "hidden"}>
        <Details detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>  
      </div>
      
      <Show hash='#encyclopedia'>
        <Encyclopedia detailsModel={props.detailsModel} species={'fish'} setDetailsOn={setDetailsOn}/>
      </Show>
      <Show hash='#villagers'>
        <Villagers detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>
      </Show>
      <Show hash='#music'>
        <Music detailsModel={props.detailsModel}/>
      </Show>
      <Show hash='#collectibles'>
        <Collectible detailsModel={props.detailsModel} setDetailsOn={setDetailsOn}/>
      </Show>
    </div>
  );
}

export default App;
