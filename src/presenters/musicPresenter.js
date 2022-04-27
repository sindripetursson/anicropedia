import MusicView from "../views/musicView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getMusic } from "../source/musicSource.js";
import resolvePromise from "../resolvePromise";
import MusicBarView from "../views/musicBarView.js";
import { sessionCheck } from "../utils";

var audio = new Audio();
var btTopPlayPause;
var audioArr = [];
var singleResultGlobal;
var btVinylPlayPause;

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

    function changeCollectionACB(musicTrack, inCollection) {
      if(inCollection) {
        props.userModel.removeItem(musicTrack, 'music');
      } else {
        props.userModel.addItem(musicTrack, 'music');
      }
      document.getElementById('checkmark_' + musicTrack.id).classList= !inCollection? 'checkmark' : 'hidden';
      document.getElementById('button_' + musicTrack.id).innerHTML = !inCollection? 'Remove from my collection' : 'Add to my collection';
    }

React.useEffect(wasCreatedACB, []);


// check the focus (case: music is played, user leaves view and returns)
const focusDiv = React.useRef();
React.useEffect(() => {
 if(focusDiv.current) focusDiv.current.focus(); 

 checkForPlaying();
 
}, [focusDiv]);

function checkForPlaying() {
  
  // check if music is still playing since user leavt the view 
  if(!audio.paused) {
  
    // 300 ms timeout, the views need some time to load
    // set the buttons according to the still playing music, eg 'show pause'
    setTimeout(() => {
      var btTopPlayPause = document.getElementById("togglePlayPause");
      btTopPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";

      var btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
      btVinylPlayPause.src = "../../images/pause-button.png";
    }, 300);
   
  }
}

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


  // Below vinyl image buttons
  function playPause(singleResult) {
    // find the id equal to the singleResult.id
    const result = audioArr.find(id => id === singleResult.id);

    // shut down bgm
    if(document.getElementById("bgmMuteOff")) {
    document.getElementById("bgmMuteOff").volume = 0;
    }
    
      // check if the id from the 'clicked song' is aleady in the array 
      // (that means is already playing or selected)
      if(result === undefined) {

        // make sure to set the play button to "show play" when another track is played
        if(singleResultGlobal) {
          btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
          btVinylPlayPause.src = "../../images/play-button.png";
        }

        // needed to set the vinyl buttons and get the id in each function
        singleResultGlobal = singleResult;

        // make sure that the playing song is stoped, since it will be replaced
        audio.pause();
        
        // clear the array with the old song, since there should always only be one song in the array
        audioArr.pop();

        // add the new song
        audioArr.push(singleResult.id)

        // set the audio object
        audio = new Audio(singleResult.music_uri)
        audio.loop = true;
      }
  }

  
  // Top play/pause toggle
  function playTrack() {

    if(audio.src.includes('acnhapi')) {

      // if audio is paused: toggle to play
      if(audio.paused) {

        // shut down bgm
        if(document.getElementById("bgmMuteOff")) {
        document.getElementById("bgmMuteOff").volume = 0;
        }


        audio.play();

        btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
        btVinylPlayPause.src = "../../images/pause-button.png";
        
        btTopPlayPause = document.getElementById("togglePlayPause");
        btTopPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";

        // if audio is not paused: toggle to pause
      } else {
        audio.pause();

        // rise up bgm
        if(document.getElementById("bgmMuteOff")) {
          document.getElementById("bgmMuteOff").volume = 1;
          }

        btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
        btVinylPlayPause.src = "../../images/play-button.png";

        btTopPlayPause = document.getElementById("togglePlayPause");
        btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
      }

     // if the src is empty, make sure the top play/pause is set to "show play"
    } else {

        btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
        btVinylPlayPause.src = "../../images/play-button.png";

        btTopPlayPause = document.getElementById("togglePlayPause");
        btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
    }
  }

  
  // Top button
  function stopTrack() {
    // stop the track
    audio.pause();

    // then delete the source
    audio.src = "";

    // rise up bgm
    if(document.getElementById("bgmMuteOff")) {
      document.getElementById("bgmMuteOff").volume = 1;
      }

    audioArr.pop();
    // make sure the top play/pause button is set to "show play"

    btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
    btVinylPlayPause.src = "../../images/play-button.png";

    btTopPlayPause = document.getElementById("togglePlayPause");
    btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
  }

  React.useEffect(promiseChangedACB, [promise]);

        return sessionCheck() || (<div>

        {promiseNoData({promise, data, error}) ||   
            <div>
              <MusicBarView 
                onPlayPressed={playTrack} 
                onStopPressed={stopTrack}
              />
              <MusicView 
                data={data}
                onPlayPause={playPause} 
                onPlayPressed={playTrack}        
                onPausePressed={playTrack}  
                userModel={props.userModel}
                onCollectionChange={changeCollectionACB}
              />
              
              <div ref={focusDiv}></div>

              </div>}
            </div>)
} 