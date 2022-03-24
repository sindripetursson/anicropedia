import logo from './logo.svg';
import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import TopbarView from './views/topbarView';
import Show from './presenters/show';

const Search = require("./presenters/searchPresenter.js").default;
const Details = require("./presenters/detailsPresenter.js").default;

function App(props) {

  if(window.location.hash !== "#search" || window.location.hash !== "#details" || window.location.hash !== "#summary") window.location.hash = "#search";

 return (
    <div className="App">

    

      <TopbarView/>
      
      <Show hash="#search">
        <Search model={props.model}/>
      </Show>
      <Show hash="#details">
        <Details model={props.model}/>
      </Show>


    </div>
  );
}

export default App;
