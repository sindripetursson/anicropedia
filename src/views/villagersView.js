import { isItemInCollection } from "../utils";

function VillagersView(props){

    function renderData(data){
        function renderSingleData(singleResult){
            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className="list__col" key={"villagers_"+singleResult.id} onClick={() => itemClicked()}>
                    <div className="listItem__villagers" >
                        <img className="listItem__image__villagers" alt="" src={singleResult.icon_uri}/>
                        <div className="listItem__text__villagers">
                            {singleResult.name["name-EUen"]}
                        </div>
                        <img className={isItemInCollection(singleResult, 'villagers', true, props.userModel) ? "checkmark" : "hidden"} alt="villager" src="../../images/inCollection.svg"/>
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            <div className={props.islandView ? "list__container__encyclopedia--island" : "list__container"}>
                <div className="list__row">
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );

}

export default VillagersView;