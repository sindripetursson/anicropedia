function MusicView(props){

        function renderData(data){

            var imageArr = [];
            var count = 0;

            function renderSingleData(singleResult){
 
                function play() {
                    props.onPlayPause(singleResult);
                    var imageId = singleResult.id;
                    var image = document.getElementById("togglePlayPause." + imageId);

                    // First "play" press
                    if((imageArr.length === 0)) {
                        imageArr.push(image);
                        props.onPlayPressed();
                        image.src = "../../images/pause-button.png";
                        image.className = "listItem__music listItem__play_button-is-clicked-to-play";
                    } else 
                    // TOGGLE PLAY/PAUSE
                    if(image === imageArr[imageArr.length - 1]) {
                        count++;
                        if(count % 2 === 0) {
                            image.src = "../../images/pause-button.png";
                            image.className = "listItem__music listItem__play_button-is-clicked-to-play";
                            props.onPlayPressed();
                        } else {
                            image.src = "../../images/play-button.png";
                            image.className = "listItem__music play_button-is-hover listItem__play_button-is-not-playing-anymore";
                            props.onPausePressed();
                        }
                    } else 
                    // Other track press
                    if(image !== imageArr[imageArr.length - 1]) {
                        props.onPlayPressed();
                        
                        for(let i = 0; i < imageArr.length; i++) {
                            imageArr[i].className = "listItem__music play_button-is-hover listItem__play_button-is-not-playing-anymore";
                            imageArr[i].src = "../../images/play-button.png";
                        }
                        
                        imageArr.pop();
                        imageArr.push(image);
                        image.src = "../../images/pause-button.png";
                        image.className = "listItem__music listItem__play_button-is-clicked-to-play";
                    }
                };

                return (
                    <div className="list__col" key={"music_"+singleResult.id}>
                        <div className="listItem__music" >
                            <img className="listItem__image__music" alt="" src={singleResult.image_uri}/>
                            <div className="listItem__text__music">
                                    {singleResult.name["name-EUen"]}
                            </div>
                            <img className="listItem__music play_button-is-hover listItem__play_button-transparent" onClick={play} src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt=""/>
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