function VillagersView(props){

    function renderData(data){
        function renderSingleData(singleResult){
            return <div className="encyclopedia-item" key={singleResult.id}>
                <img className="image" alt="" src={singleResult.icon_uri}/>
                <div className="encyclopedia-text">
                    {singleResult.name["name-EUen"]}
                </div>
            </div>
        }
        return Object.values(data).map(renderSingleData);
    }

    return(
        <div className="encyclopedia">
            {renderData(props.data)}
        </div>
    );

}

export default VillagersView;