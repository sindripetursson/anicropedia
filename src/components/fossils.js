import CloseButton from "./close_button";
import { capitalizeFirstLetter } from "../utils";

function Fossils(props){
    return <div className="details__container">
        <div className="details__row">
            <div className="details__col">
                <img className="image" alt="" src={props.singleResult.image_uri} />
                <div className="checkmark__placeholder">
                    <div className={props.isInCollection ? "checkmark__image" : "hidden"} >
                        <img alt="checkmark" src="../../images/inCollection.svg"/> 
                        <span style={{paddingTop: "10px"}}>In your collection!</span>
                    </div>
                </div>
            </div>
            <div className="details__col__splitter">
                <div className="details__row">
                    <div className="details__title">
                        {capitalizeFirstLetter(props.singleResult.name["name-EUen"])}
                        <img className={props.isInCollection ? "checkmark__details" : "hidden"} alt="checkmark" src="../../images/inCollection.svg"/> 
                    </div>
                </div>
                <div className={"details__row"}>
                    <div className="details__col__one">
                        <div className="details__heading">
                            Price
                        </div>
                        <div className="details__content">
                            <img width="15" alt="bells" style={{transform: "translate(0,15%)"}} src="../../images/bells.png"/>
                            {props.singleResult.price}
                        </div>
                    </div>
                </div>
                <div className="details__row__one">
                    <div className="details__heading">
                        Museum Phrase 
                    </div>
                    <div style={{fontStyle: "italic"}} className="details__content">
                        {'"'+props.singleResult["museum-phrase"]+'"'}
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
            </div>
        </div>
        <div  onClick={() => props.onCloseClicked()} className="close">
            <CloseButton />
        </div>
    </div>
}

export default Fossils;