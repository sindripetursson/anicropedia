export default 
function MusicBarView(props) {

    function stop() {
      props.onStopPressed();
      var btPlayPause = document.getElementById("togglePlayPause");
      btPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
    }
    var count = 0;
    function play() {
      props.onPlayPressed();
      var btPlayPause = document.getElementById("togglePlayPause");
      count++;
      if(count % 2 == 0) {
        btPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
      } else {
        btPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";
      }

    }
    
  return (
    <div className="player">        
    <div className="buttons-music">
      <div className="playpause-track fa fa-play-circle fa-5x" onClick={play} id="togglePlayPause">
      </div>
      <div className="stop-track" onClick={stop}>
        <i className="fa fa-stop-circle fa-5x"></i>
      </div>
    </div>
  </div>
  );
}
