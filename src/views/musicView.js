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
                    <div className="music-item" key={singleResult.id}>
                        <div className="music-text">
                                {singleResult.name["name-EUen"]}
                        </div>
                        <img onClick={play} width="30" height="30" src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt=""/>
                    </div>)
            }
            return Object.values(data).map(renderSingleData);
        }

    return(
        <div className="music">
            {renderData(props.data)}
        </div>
    );
}

export default MusicView;