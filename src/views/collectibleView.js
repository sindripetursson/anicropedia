import { capitalizeFirstLetter } from "../utils";
import {isItemInCollection} from "../utils";

function CollectibleView(props){

    function renderData(data){

        function renderSingleData(singleResult){

            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            console.log("collectable island " + props.islandView)
            return (
                <div className={props.islandView ? "list__col__encyclopedia--island" : "list__col__encyclopedia"} key={"collectible_" + singleResult['file-name']} onClick={() => itemClicked()}>
                    <div className="listItem__encyclopedia" >
                        <img className={props.islandView ? "listItem__image__encyclopedia--island" : "listItem__image__encyclopedia"} alt="" src={singleResult.image_uri}/>
                        <div className={props.islandView ? "listItem__text__encyclopedia--island" : "listItem__text__encyclopedia"}>
                            {capitalizeFirstLetter(singleResult.name["name-EUen"])}
                        </div>
                        {props.islandView ?
                        <></> :
                        <img className={isItemInCollection(singleResult, props.category, false, props.userModel) ? "checkmark" : "hidden"} alt="checkmark" src="../../images/inCollection.svg"/>
                        }
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            <div className={props.islandView ? "list__container__encyclopedia--island" : "list__container__encyclopedia"}>
                <div className={props.islandView ? "list__row__encyclopedia--island" : "list__row__encyclopedia"}>
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );

}

export default CollectibleView;