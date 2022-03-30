function CollectibleView(props){

    function renderData(data){

        function renderSingleData(singleResult){

            function itemClicked(){
                props.onItemClicked(singleResult);
            }
            return (
                <div className="list__col" key={"collectible_" + singleResult['file-name']} onClick={() => itemClicked()}>
                    <div className="listItem" >
                        <img className="listItem__image" alt="" src={singleResult.image_uri}/>
                        <div className="listItem__text">
                            {singleResult.name["name-EUen"]}
                        </div>
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            <div className="list__container">
                <div className="list__row">
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );

}

export default CollectibleView;