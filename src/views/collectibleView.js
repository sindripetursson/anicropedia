import { capitalizeFirstLetter } from "../utils";
import {isItemInCollection} from "../utils";

function CollectibleView(props){

    function renderData(data){

        function renderSingleData(singleResult){

            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className="list__col__encyclopedia" key={"collectible_" + singleResult['file-name']} onClick={() => itemClicked()}>
                    <div className="listItem__encyclopedia" >
                        <img className="listItem__image__encyclopedia" alt="" src={singleResult.image_uri}/>
                        <div className="listItem__text__encyclopedia">
                            {capitalizeFirstLetter(singleResult.name["name-EUen"])}
                        </div>
                        <img className={isItemInCollection(singleResult, props.category, false, props.userModel) ? "checkmark" : "hidden"} src="../../images/inCollection.svg"/>
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            <div className="list__container__encyclopedia">
                <div className="list__row__encyclopedia">
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );

}

export default CollectibleView;