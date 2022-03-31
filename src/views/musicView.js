function MusicView(props){

        function renderData(data){
            function renderSingleData(singleResult){

                var audio = new Audio(singleResult.music_uri);
                
                function play() {
                    var imageId = singleResult.id;
                    var image = document.getElementById("togglePlayPause." + imageId);
                    if(audio.paused) {
                        audio.play();
                        image.src = "../../images/pause-button.png";
                    }
                    else {
                        audio.pause();
                        image.src = "../../images/play-button.png";
                    }
                };

                return (
                    <div className="list__col" key={"music_"+singleResult.id}>
                        <div className="listItem__music" >
                            <img className="listItem__image_music" alt="" src={singleResult.image_uri}/>
                            <div className="listItem__text_music">
                                    {singleResult.name["name-EUen"]}
                            </div>
                            <img className="listItem__music play_button listItem__play_button" onClick={play} src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt=""/>
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

export default MusicView;