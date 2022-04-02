import { capitalizeFirstLetter } from "../utils";

function EncyclopediaView(props){
    function renderData(data){
        function renderSingleData(singleResult){
            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className="list__col__encyclopedia" key={"encyclopedia_"+singleResult.id} onClick={() => itemClicked()}>
                    <div className="listItem__encyclopedia" >
                        <img className="listItem__image__encyclopedia" alt="" src={singleResult.icon_uri}/>
                        <div className="listItem__text__encyclopedia">
                            {capitalizeFirstLetter(singleResult.name["name-EUen"])}
                        </div>
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

export default EncyclopediaView;