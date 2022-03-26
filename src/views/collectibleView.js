function CollectibleView(props){

    function renderData(data){
        function renderSingleData(singleResult){
            return (
                <div className="listItem" key={singleResult.id}>
                    <img className="listItem__image" alt="" src={singleResult.image_uri}/>
                    <div className="listItem__text">
                        {singleResult.name["name-EUen"]}
                    </div>
                </div>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="list">
            {renderData(props.data)}
        </div>
    );

}

export default CollectibleView;