import { isItemInCollection } from "../utils";

function VillagersView(props){

    function renderData(data){
        function renderSingleData(singleResult){
            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className={props.islandView ? "list__col__other--island" : "list__col"} key={"villagers_"+singleResult.id} onClick={() => itemClicked()}>
                    <div className="listItem__villagers" >
                        <img className={props.islandView ? "listItem__image__villagers--island" : "listItem__image__villagers"} alt="villager" src={singleResult.icon_uri}/>
                        <div className="listItem__text__villagers">
                            {singleResult.name["name-EUen"]}
                        </div>
                        {props.islandView ?
                        <></> :
                        <img className={isItemInCollection(singleResult, 'villagers', true, props.userModel) ? "checkmark" : "hidden"} alt="villager" src="../../images/inCollection.svg"/>
                        }
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            <div className={props.islandView ? "list__container__other--island" : "list__container"}>
                <div className={props.islandView ? "list__row__other--island" : "list__row"}>
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );

}

export default VillagersView;