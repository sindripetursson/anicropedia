function DetailsView(props){

    function renderData(data){
        return (
            <div className="list__col">
                <div className="listItem" key={"detail" + data.id}>
                    <img className="listItem__image" alt="" src={data.image_uri}/>
                    <div className="listItem__text">
                        {data.name["name-EUen"]}
                    </div>
                </div>
            </div>
        );
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

export default DetailsView;