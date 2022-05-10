import MusicView from "../views/musicView.js";
import React from "react";
import promiseNoData from "../views/promiseNoData.js";
import { getMusic } from "../source/musicSource.js";
import resolvePromise from "../resolvePromise";
import MusicBarView from "../views/musicBarView.js";
import { sessionCheck } from "../utils";

var audio = document.createElement('audio');
audio.id = "vinyl"
document.body.appendChild(audio);

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
        props.userModel.addObserver(musicObserverACB);
        return function isTakenDownACB() {props.userModel.removeObserver(musicObserverACB);}
    }

    function changeCollectionACB(musicTrack, inCollection) {
        if(inCollection) {
            props.userModel.removeItem(musicTrack, 'music');
        } else {
            props.userModel.addItem(musicTrack, 'music');
        }
    }

    function musicObserverACB(payload) {
        if (props.islandView) {
            setData({...data});
        } else if (payload && payload.addMusic) {
            document.getElementById('checkmark_' + payload.addMusic.id).classList= 'checkmark';
            document.getElementById('button_' + payload.addMusic.id).innerHTML = 'Remove from my collection';
        } else if (payload && payload.removeMusic) {
            document.getElementById('checkmark_' + payload.removeMusic.id).classList= 'hidden';
            document.getElementById('button_' + payload.removeMusic.id).innerHTML = 'Add to my collection';
        }
    }

    React.useEffect(wasCreatedACB, []);


    // check the focus (case: music is played, user leaves view and returns)
    const focusDiv = React.useRef();
    React.useEffect(() => {
        if(focusDiv.current) focusDiv.current.focus(); 
        checkForPlaying();
    }, [focusDiv]);

    function checkForPlaying() {
        // // check if music is still playing since user leavt the view 
        // if(!audio.paused) {
        //     // 300 ms timeout, the views need some time to load
        //     // set the buttons according to the still playing music, eg 'show pause'
        //     setTimeout(() => {
        //         var btTopPlayPause = document.getElementById("togglePlayPause");
        //         // No progressbar in islandview
        //         if(!props.islandView) {
        //             btTopPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";
        //         }
        //         if(!props.islandView) {
        //             var btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
        //             btVinylPlayPause.src = "../../images/pause-button.png";
        //         }

        //         if(!props.islandView) {
        //         // set vinyl img in musicBar
        //         var musicBarImg = document.getElementById("musicBarImg");
        //         musicBarImg.src = singleResultGlobal.image_uri;

                
        //         // set artist name in musicBar
        //         var artistName = document.getElementById("songName");
        //         artistName.textContent = singleResultGlobal.name["name-EUen"];

        //         };

        //         var progressed = document.getElementById("progressed"); 

        //         // No progressbar on islandview
        //         if(!props.islandView) {
        //             audio.ontimeupdate = function() {
        //                 progressed.style.width = (audio.currentTime*100/audio.duration)+"%";
        //             }
        //         }
        //     }, 300);
        // } else if(audio.paused && audioArr[0] !== undefined && !(audio.src == "stop")) {

        //     console.log(audio.src)
        //     console.log("not allowed");
        //     // 300 ms timeout, the views need some time to load
        //     // set the buttons according to the still playing music, eg 'show pause'
        //     setTimeout(() => {
        //         var btTopPlayPause = document.getElementById("togglePlayPause");
        //         // No progressbar on islandview
        //         if(!props.islandView) {
        //             btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
        //         }
        //         var btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
        //         btVinylPlayPause.src = "../../images/play-button.png";

        //         if(!props.islandView) {
        //             // set vinyl img in musicBar
        //             var musicBarImg = document.getElementById("musicBarImg");
        //             musicBarImg.src = singleResultGlobal.image_uri;

        //             // set artist name in musicBar
        //             var artistName = document.getElementById("songName");
        //             artistName.textContent = singleResultGlobal.name["name-EUen"];
        //             }

        //         var progressed = document.getElementById("progressed"); 

        //          // No progressbar on islandview
        //         if(!props.islandView) {
        //             progressed.style.width = (audio.currentTime*100/audio.duration)+"%";
        //         }
        //     }, 300);
        // } else 
  
        if(audio.src.includes("stop")) {
            console.log("stop track");
            setTimeout(() => stopTrack(), 300);
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

        // if no mute was pressed by user, lower bgm volume
        // and show that the sound is off on the mute bt
        if(document.getElementById("bgmMuteOff")) {
            document.getElementById("bgmMuteOff").pause();
            
            // vinyl is played, so show mute on bgm mute bt
            var btMuteMenuBarPres = document.getElementById("muteId");
            btMuteMenuBarPres.src = "images/soundOff.svg";
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
            audio.src = singleResult.music_uri;
            audio.loop = true;
            if(!props.islandView) {
                // set vinyl img in musicBar
                var musicBarImg = document.getElementById("musicBarImg");
                musicBarImg.src = singleResultGlobal.image_uri;

                // set artist name in musicBar
                var artistName = document.getElementById("songName");
                artistName.textContent = singleResultGlobal.name["name-EUen"];
            }
            
        }
    }
  
    // Top play/pause toggle
    function playTrack() {
        if(audio.src.includes('acnhapi')){
            // if audio is paused: toggle to play
            if(audio.paused) {
                // if no mute is pressed by user, then lower volume of bgm
                // and show mute is on (sound is off)
                if(document.getElementById("bgmMuteOff")) {
                    document.getElementById("bgmMuteOff").pause();
                }

                // vinyl is played, so show mute on bgm mute bt
                let btMuteMenuBarPres = document.getElementById("muteId");
                btMuteMenuBarPres.src = "images/soundOff.svg";

                audio.play();


                var progressed = document.getElementById("progressed");
                // var progress_bar = document.getElementById("progress_bar");  

                // No progressbar in islandview
                if(!props.islandView) {
                    audio.ontimeupdate = function() {
                        progressed.style.width = (audio.currentTime*100/audio.duration)+"%";
                    }
                }

                // user could be able to choose song position on the music bar
                // progress_bar.onclick = function(e) {
                //   audio.currentTime = ((e.offsetX/progress_bar.offsetWidth) * audio.duration);
                // }

                if(singleResultGlobal) {
                    btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
                    btVinylPlayPause.src = "../../images/pause-button.png";
                }
                btTopPlayPause = document.getElementById("togglePlayPause");
                // No progressbar in islandview
                if(!props.islandView) {
                    btTopPlayPause.className = "playpause-track fa fa-pause-circle fa-5x";
                }
            // if audio is not paused: toggle to pause
            } else {
                audio.pause();

                // if no mute was pressed, then rise volume of bgm
                // and display sound on mute bt
                if(document.getElementById("bgmMuteOff")) {
                    document.getElementById("bgmMuteOff").play();
                    
                    // vinyl is paused, so show no mute on bgm mute bt
                    let btMuteMenuBarPres = document.getElementById("muteId");
                    btMuteMenuBarPres.src = "images/soundOn.svg";
                }

                if(singleResultGlobal) {
                    btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
                    btVinylPlayPause.src = "../../images/play-button.png";
                }

                btTopPlayPause = document.getElementById("togglePlayPause");
                // No progressbar in islandview
                if(!props.islandView) {
                    btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
                }
            }
        // if the src is empty, make sure the top play/pause is set to "show play"
        } else {
            if(singleResultGlobal) {
                btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
                btVinylPlayPause.src = "../../images/play-button.png";
            }
            btTopPlayPause = document.getElementById("togglePlayPause");
            // No progressbar in islandview
            if(!props.islandView) {
                btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
            }
        }
    }

    // Top button
    function stopTrack() {
        // stop the track
        audio.pause();

        // No progressbar in islandview
        if(!props.islandView && !(audio.src.includes("stop"))) {
            var progressed = document.getElementById("progressed");
            progressed.style.width = "0%";
        }


        if(!props.islandView && !(audio.src.includes("stop"))) {
            // set vinyl img in musicBar
            var musicBarImg = document.getElementById("musicBarImg");
            musicBarImg.src = "images/vinyl.svg";

            // set artist name in musicBar
            var artistName = document.getElementById("songName");
            artistName.textContent = "Play a song";
        }

        // rise up bgm
        if(document.getElementById("bgmMuteOff")) {
            document.getElementById("bgmMuteOff").play();

            // vinyl is paused, so show no mute on bgm mute bt
            var btMuteMenuBarPres = document.getElementById("muteId");
            btMuteMenuBarPres.src = "images/soundOn.svg";
        }

        audioArr.pop();
        // make sure the top play/pause button is set to "show play"

        if(singleResultGlobal && !(audio.src.includes("stop"))) {
            btVinylPlayPause = document.getElementById("togglePlayPause." + singleResultGlobal.id);
            btVinylPlayPause.src = "../../images/play-button.png";
        }

        if(!(audio.src.includes("stop"))) {
            btTopPlayPause = document.getElementById("togglePlayPause");
            btTopPlayPause.className = "playpause-track fa fa-play-circle fa-5x";
        }

        singleResultGlobal = null;
        
        // then delete the source
        audio.src = "";
    }

    React.useEffect(promiseChangedACB, [promise]);

    return sessionCheck() || 
    (<div>
    {props.islandView ? 
        <MusicView 
        data={props.userModel.music}
        onPlayPause={playPause} 
        onPlayPressed={playTrack}        
        onPausePressed={playTrack}  
        userModel={props.userModel}
        onCollectionChange={changeCollectionACB}
        islandView
        />
    :
    promiseNoData({promise, data, error}) ||   
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