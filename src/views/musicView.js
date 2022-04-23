import { isItemInCollection } from "../utils";

function MusicView(props){
        function renderData(data){

            var imageArr = [];

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
                        image.alt = "pause";
                    } else 
                    // TOGGLE PLAY/PAUSE
                    if(image === imageArr[imageArr.length - 1]) {
                        if(image.alt == "play") {
                            image.src = "../../images/pause-button.png";
                            image.alt = "pause";
                            props.onPlayPressed();
                        } else {
                            image.src = "../../images/play-button.png";
                            image.alt = "play";
                            props.onPausePressed();
                        }
                    } else 
                    // Other track press
                    if(image !== imageArr[imageArr.length - 1]) {
                        props.onPlayPressed();
                        
                        for(let i = 0; i < imageArr.length; i++) {
                            imageArr[i].src = "../../images/play-button.png";
                            imageArr[i].alt = "play"
                        }
                        
                        imageArr.pop();
                        imageArr.push(image);
                        image.src = "../../images/pause-button.png";
                        image.alt = "pause";
                    }
                };

                return (
                    <div className="list__col__music" key={"music_"+singleResult.id}>
                        <div className="listItem__music" >
                            <img className="listItem__image__music" alt="" src={singleResult.image_uri}/>
                            <div className="listItem__text__music">
                                    {singleResult.name["name-EUen"]}
                            </div>
                            <img className={isItemInCollection(singleResult, 'music', true, props.userModel) ? "checkmark" : "hidden"} src="../../images/inCollection.svg"/>
                            <div className="listItem__playbuttonContainer">
                            <img className="listItem__music play_button-is-hover listItem__play_button" onClick={play} src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt="play"/>
                            </div>
                            <button style={{marginBottom:"20px", width: "80%"}} onClick={() => props.onCollectionChange(data)}>{props.isInCollection?'Remove from my collection':'Add to my collection'}</button>
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