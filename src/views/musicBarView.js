export default 
function MusicBarView(props) {
    return (
        <div className="player">     
            <div className="border">
                <div className="border__flex-right">
                    <div className="artist-info">
                        <img className="artist-info__image" src="images/vinyl.svg" id="musicBarImg" alt=""/>
                        <span className="artist-info__song" id="songName">Play a song</span>
                    </div>
                </div>
                <div className="border__flex-left">
                    <div className="border__flex-left__flex-left-top">
                        <div className="buttons-music">
                            <div className="playpause-track fa fa-play-circle fa-5x" onClick={() => props.onPlayPressed()} id="togglePlayPause"></div>
                            <div className="stop-track" onClick={() => props.onStopPressed()}>
                                <i className="fa fa-stop-circle fa-5x"></i>
                            </div>
                        </div>
                    </div>
                    <div className="border__flex-left__flex-left-bottom">
                        <div className="progress_bar" id="progress_bar">
                            <div className="progressed" id="progressed"></div>
                        </div>
                    </div>
                </div>
            </div>   
        </div>
    );
}
