import './App.css';
import "./css/style.css";
import "./css/topbar.css";
import "./styles/styles.css";
import TopbarView from './views/topbarView';
import Show from './presenters/show';
import Encyclopedia from './presenters/encyclopediaPresenter';
import Villagers from './presenters/villagersPresenter';
import Collectible from './presenters/collectiblePresenter';

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
      <Show hash='#encyclopedia'>
        <Encyclopedia species={'fish'}/>
      </Show>
      <Show hash='#villagers'>
        <Villagers model={props.model}/>
      </Show>
      <Show hash='#collectibles'>
        <Collectible model={props.model}/>
      </Show>
    </div>
  );
}

export default App;
