export default 
function MusicBarView(props) {
  return (
    <div className="player">        
    <div className="buttons-music">
      <div className="playpause-track fa fa-play-circle fa-5x" onClick={() => props.onPlayPressed()} id="togglePlayPause">
      </div>
      <div className="stop-track" onClick={() => props.onStopPressed()}>
        <i className="fa fa-stop-circle fa-5x"></i>
      </div>
    </div>
  </div>
  );
}
