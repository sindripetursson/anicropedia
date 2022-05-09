import { isItemInCollection } from "../utils";

function VillagersView(props){
    function renderData(data){
        function renderSingleData(singleResult){
            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className={props.islandView ? "list__col__other--island" : "list__col"} key={"villagers_"+singleResult.id} onClick={() => itemClicked()}>
                    <div className={props.islandView ? "listItem__villagers--island" : "listItem__villagers"}>
                        <div className={props.islandView ? "listItem__imagePlaceholder--island" : "listItem__imagePlaceholder"}>
                            <img className={props.islandView ? "listItem__image__villagers--island" : "listItem__image__villagers"} alt="villager" src={singleResult.icon_uri}/>
                        </div>
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
            {props.islandView ?
            <div className="island__headerShadow">My villagers</div>
            :
            <></>  
            }
            <div className={props.islandView ? "list__container__other--island" : "list__container"}>
                <div className={props.islandView ? "list__row__other--island" : "list__row"}>
                    {props.islandView && props.data.length === 0 ?
                        <div className="island__message">Add villagers to your island!</div>
                    :
                        renderData(props.data)
                    }
                </div>
            </div>
        </div>
    );

}

export default VillagersView;