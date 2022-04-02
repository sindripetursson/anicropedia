import CloseButton from "./close_button";
import { capitalizeFirstLetter } from "../utils";

function Art(props){
    return <div className="details__container">
    <div className="details__row">
        <div className="details__col">
          <img className="image" alt="" src={props.singleResult.image_uri} />
        </div>
      <div className="details__col__splitter">
        <div className="details__row">
          <div className="details__title">
            {capitalizeFirstLetter(props.singleResult.name["name-EUen"])}
          </div>
        </div>

        <div className="details__row">
          <div className="details__col__three">
            <div className="details__heading">
              Buy Price
            </div>
            <div className="details__content">
              <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
              {props.singleResult["buy-price"]}
            </div>
          </div>
          <div className="details__col__three">
            <div className="details__heading">
              Sell Price
            </div>
            <div className="details__content">
              <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
              {props.singleResult["sell-price"]}
            </div>
          </div>
          <div className="details__col__three">
            <div className="details__heading">
              Has Fake?
            </div>
            <div className="details__content">
              {props.singleResult["hasFake"] ? "Yes" : "No"}
            </div>
          </div>
        </div>

        <div className="details__row__one">
          <div className="details__heading">
            Museum Phrase 
          </div>
          <div style={{fontStyle: "italic"}} className="details__content">
            {'"'+props.singleResult["museum-desc"]+'"'}
          </div>
        </div>
        <div className="details__row">
          <div className="details__col">
            <a href={"https://animalcrossing.fandom.com/wiki/"+props.singleResult["file-name"]}>
              <button>More information</button>
            </a>
          </div>
          <div className="details__col">
            <button onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
          </div>
        </div>
      </div>
    </div>
      <div  onClick={() => props.onCloseClicked()} className="close">
            <CloseButton />
          </div>
  </div>;
}

export default Art;