import CloseButton from "./close_button";
import Months from "./months";
import { capitalizeFirstLetter } from "../utils";

function Bugs(props){
    return <div className="details__container">
    <div className="details__row">
      <div className="details__col" >
        <img className="image" alt="" src={props.singleResult.image_uri} />
        <div className={props.isInCollection ? "checkmark__image" : "hidden"} >
          <img src="../../images/inCollection.svg"/> 
          <span style={{paddingTop: "10px"}}>In your collection!</span>
        </div>
      </div>
      <div className="details__col__splitter">
        <div className="details__row">
          <div className="details__title">
            {capitalizeFirstLetter(props.singleResult.name["name-EUen"])}
            <img className={props.isInCollection ? "checkmark__details" : "hidden"} src="../../images/inCollection.svg"/> 
          </div>
        </div>
        <div className="details__row">
          <div className="details__col__three">
            <div className="details__heading">
              Location
            </div>
            <div className="details__content">
              {props.singleResult.availability.location}
            </div>
          </div>
          <div className="details__col__three">
            <div className="details__heading">
              Price
            </div>
            <div className="details__content">
              <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
              {props.singleResult.price}
            </div>
          </div>
          <div className="details__col__three">
          <div className="details__heading">
            Rarity  
          </div>
          <div className="details__content">
            {props.singleResult.availability.rarity}
          </div>
          </div>
        </div>
        <div className="details__row">
          <div className="details__col__one">
            <div className="details__heading">
              Months active
            </div>
            <div className="details__content">
              <Months monthArray={props.singleResult.availability["month-array-northern"]}/>
            </div>
          </div>
        </div>
        <div className="details__row">
          <div className="details__col">
            <div className="details__heading">
              Time of day
            </div>
            <div className="details__content">
              {props.singleResult.availability["time-array"][0] === 0 && props.singleResult.availability["time-array"][props.singleResult.availability["time-array"].length-1] === 23 ? "All day" : props.singleResult.availability["time-array"][0] + ":00 - " + props.singleResult.availability["time-array"][props.singleResult.availability["time-array"].length-1]+":00"}
            </div>
          </div>
        </div>
        <div className="details__row">
          <div className="details__col">
            <a href={"https://animalcrossing.fandom.com/wiki/"+props.singleResult["file-name"]}>
              <button>More information</button>
            </a>
          </div>
          <div className="details__col">
            <button className={props.isInCollection ? "button__negative" : "button__positive"} onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
          </div>
        </div>
        
        <div  onClick={() => props.onCloseClicked()} className="close">
          <CloseButton />
        </div>
      </div>
    </div>
  </div>;
}

export default Bugs;