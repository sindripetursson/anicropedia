import { capitalizeFirstLetter } from "../utils";
import {isItemInCollection} from "../utils";

function CollectibleView(props){

    function renderData(data){

        function renderSingleData(singleResult){

            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className={props.islandView ? "list__col__encyclopedia--island" : "list__col__encyclopedia"} key={"collectible_" + singleResult['file-name']} onClick={() => itemClicked()}>
                    <div className="listItem__encyclopedia" >
                        <div className={props.islandView ? "listItem__imagePlaceholder--island" : "listItem__imagePlaceholder"}>
                            <img className={props.islandView ? "listItem__image__encyclopedia--island" : "listItem__image__encyclopedia"} alt="" src={singleResult.image_uri} loading="lazy"/>
                        </div>
                        <div className={props.islandView ? "listItem__text__encyclopedia--island" : "listItem__text__encyclopedia"}>
                            {capitalizeFirstLetter(singleResult.name["name-EUen"])}
                        </div>
                        {props.islandView ?
                        <></> :
                        <img id={"checkmark_"+props.category + "_" + (props.category==='fossils'?singleResult['file-name']:singleResult.id)} className={isItemInCollection(singleResult, props.category, false, props.userModel) ? "checkmark" : "hidden"} alt="checkmark" src="../../images/inCollection.svg"/>
                        }
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className={props.islandView ? "list__row__encyclopedia--island" : "list__row__encyclopedia"}>
            {props.islandView && props.data.length === 0 ?
                <div className="island__message">Add {props.category} to your island!</div>
            :
                renderData(props.data)
            }
        </div>
    );

}

export default CollectibleView;