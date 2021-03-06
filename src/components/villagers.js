import CloseButton from "./close_button";
import { capitalizeFirstLetter } from "../utils";

function Villagers(props){
    return <div className="details__container">
        <div className="details__row">
            <div className="details__col">
                <div className="details__placeholder">
                    <img className="frame" alt="frame" src='../../images/Frame.svg' />
                    <img className="image__villagers" alt="" src={props.singleResult.image_uri} />
                </div>
                <div className="checkmark__placeholder">
                    <div id={"details_checkmark1_villagers_" + props.singleResult.id} style={{transform: "translate(0, 25px)"}}  className={props.isInCollection ? "checkmark__image" : "hidden"} >
                        <img alt="checkmark" src="../../images/inCollection.svg"/> 
                        <span style={{paddingTop: "10px"}}>In your Island!</span>
                    </div>
                </div>
            </div>
            <div className="details__col__splitter">
                <div className="details__row">
                    <div className="details__title">
                        {capitalizeFirstLetter(props.singleResult.name["name-EUen"])}
                        <img id={"details_checkmark2_villagers_" + props.singleResult.id} className={props.isInCollection ? "checkmark__details" : "hidden"} alt="checkmark" src="../../images/inCollection.svg"/> 
                    </div>
                </div>
            
                <div className="details__row">
                    <div className="details__col__three">
                        <div className="details__heading">
                            Personality
                        </div>
                        <div className="details__content">
                            {props.singleResult.personality}
                        </div>
                    </div>
                    <div className="details__col__three">
                        <div className="details__heading">
                            Birthday
                        </div>
                        <div className="details__content">
                            {props.singleResult["birthday-string"]}
                        </div>
                    </div>
                    <div className="details__col__three">
                        <div className="details__heading">
                            Species
                        </div>
                        <div className="details__content">
                            {props.singleResult.species}
                        </div>
                    </div>
                </div>

                <div className="details__row">
                    <div className="details__col__three">
                        <div className="details__heading">
                            Gender
                        </div>
                        <div className="details__content">
                            {props.singleResult.gender}
                        </div>
                    </div>
                    <div className="details__col__three">
                        <div className="details__heading">
                            Hobby
                        </div>
                        <div className="details__content">
                            {props.singleResult.hobby}
                        </div>
                    </div>
                    <div className="details__col__three">
                        <div className="details__heading">
                            Phrase
                        </div>
                        <div style={{fontStyle: "italic"}} className="details__content">
                            {'"' + props.singleResult['catch-phrase'] + '"'}
                        </div>
                    </div>
                </div>
                <div className="details__row">
                    <div className="details__col">
                        <a href={"https://animalcrossing.fandom.com/wiki/"+props.singleResult.name["name-EUen"]}>
                            <button>More information</button>
                        </a>
                    </div>
                    <div className="details__col">
                        <button id={"details_collection_button_villagers_" + props.singleResult.id} className={props.isInCollection ? "button__negative" : "button__positive"} onClick={() => props.onCollectionChange()}>{props.isInCollection?'Remove from My Island':'Add to My Island'}</button>
                    </div>
                </div>
            </div>
        </div>
        <div onClick={() => props.onCloseClicked()} className="close">
            <CloseButton />
        </div>
    </div>;
}

export default Villagers;