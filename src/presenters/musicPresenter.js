import MusicView from "../views/musicView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getMusic } from "../source/musicSource.js";
import resolvePromise from "../resolvePromise";
import MusicBarView from "../views/musicBarView.js";

export default 
function Music(props) {

    const [promise, setPromise]= React.useState(getMusic('songs'));
    const [data, setData]= React.useState(null);
    const [error, setError]= React.useState(null);

    function wasCreatedACB(){
        if(!promise){
            resolvePromise(getMusic('songs'), setPromise);
        }
    }

React.useEffect(wasCreatedACB, []);

function promiseChangedACB(){ 
    setData(null); 
    setError(null); 

    let cancelled = false;
    function changedAgainACB() { 
      cancelled = true; 
    }; 
    if(promise) {
      promise
      .then(function saveDataACB(dt) {  
        if(!cancelled) setData(dt);
      })
      .catch(function saveErrACB(err) { 
        if(!cancelled) setError(err);
      });
    }

    return changedAgainACB;
  }

  var audioArr = [];
  var audio = new Audio();
  function playPause(singleResult) {
    const result = audioArr.find(id => id === singleResult.id);
    if(result === undefined) {
      audioArr.pop();
      audioArr.push(singleResult.id)
        if(!audio.paused) {
          audio.pause();
        }
      audio = new Audio(singleResult.music_uri)
    }
  }
  
  function playTrack() {
    if(audio.src !== "") {
    if(audio.paused) {
      audio.play(); 
      var btPlayPause = document.getElementById("togglePlayPause");
      btPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";
    }
      else {
        audio.pause();
        var btPlayPause = document.getElementById("togglePlayPause");
        btPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
      }
    }
  }

  function pauseTrack() {
    if(audio.src !== "") { 
    audio.pause();
    var btPlayPause = document.getElementById("togglePlayPause");
    btPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
    }
  }

  function stopTrack() {
    audio.pause();
    audio.currentTime = 0;
    var image = document.getElementById("togglePlayPause." + audioArr[audioArr.length - 1]);
    image.className = "listItem__music play_button-is-hover listItem__play_button-is-not-playing-anymore";
  }

  React.useEffect(promiseChangedACB, [promise]);

        return <div>

        {promiseNoData({promise, data, error}) ||   
            <div>
              <MusicBarView 
                onPausePressed={pauseTrack}
                onPlayPressed={playTrack} 
                onStopPressed={stopTrack}
              />
              <MusicView 
                data={data}
                onPlayPause={playPause} 
                onPlayPressed={playTrack}        
                onPausePressed={pauseTrack}  
              />
              </div>}
            </div>
} 