import { capitalizeFirstLetter } from "../utils";
import { isItemInCollection } from "../utils";

function EncyclopediaView(props){
    function renderData(data){
        function renderSingleData(singleResult){
            function itemClicked(){
                props.onItemClicked(singleResult);
            }

            return (
                <div className={props.islandView ? "list__col__encyclopedia--island" : "list__col__encyclopedia"} key={"encyclopedia_"+singleResult.id} onClick={() => itemClicked()}>
                    <div className="listItem__encyclopedia" >
                        <img className={props.islandView ? "listItem__image__encyclopedia--island" : "listItem__image__encyclopedia"} alt="" src={singleResult.icon_uri}/>
                        <div className={props.islandView ? "listItem__text__encyclopedia--island" : "listItem__text__encyclopedia"}>
                            {capitalizeFirstLetter(singleResult.name["name-EUen"])}
                        </div>
                        {props.islandView ?
                        <></> :
                        <img className={isItemInCollection(singleResult, props.currentSpecies, true, props.userModel) ? "checkmark" : "hidden"} alt="checkmark" src="../../images/inCollection.svg"/>
                        }
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }
    return(
        <div className={props.islandView ? "list__row__encyclopedia--island" : "list__row__encyclopedia"}>
            {props.islandView && props.data.length === 0 && props.currentSpecies === 'fish' ?
                <div className="island__message">Add fish to your island!</div>
            : props.islandView && props.data.length === 0 && props.currentSpecies === 'bugs' ?
                <div className="island__message">Add insects to your island!</div>
            :  props.islandView && props.data.length === 0 && props.currentSpecies === 'sea' ?
                <div className="island__message">Add sea creatures to your island!</div>
            :
                renderData(props.data)
            }
        </div>
    );
}

export default EncyclopediaView;