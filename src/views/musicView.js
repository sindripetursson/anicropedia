function MusicView(props){

        function renderData(data){

            var imageArr = [];
            var audioArr = [];

            function renderSingleData(singleResult){
 
                var audio = new Audio(singleResult.music_uri);
                
                function play() {
                    var imageId = singleResult.id;
                    var image = document.getElementById("togglePlayPause." + imageId);
                    if((imageArr.length === 0) || image !== imageArr[imageArr.length - 1]) {
                        imageArr.push(image);
                        audioArr.push(audio);
                        for(let i = 0; i < audioArr.length; i++) {
                            audioArr[i].pause();
                            audioArr[i].currentTime = 0;
                            imageArr[i].className = "listItem__music play_button-is-hover listItem__play_button-is-not-playing-anymore";
                            imageArr[i].src = "../../images/play-button.png";
                        }
                    }

                    if(audio.paused) {
                        audio.play();
                        image.src = "../../images/pause-button.png";
                        image.className = "listItem__music listItem__play_button-is-clicked-to-play";
                    }
                    else {
                        audio.pause();
                        image.src = "../../images/play-button.png";
                        image.className = "listItem__music play_button-is-hover listItem__play_button-is-not-playing-anymore";
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