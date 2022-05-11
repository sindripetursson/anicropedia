import { isItemInCollection } from "../utils";
import React from "react";

function MusicView(props){
    function renderData(data){
        function renderSingleData(singleResult){
        function play() {
            props.onPlayPause(singleResult);
            props.onPlayPressed();
        };

        const inCollection = isItemInCollection(singleResult, 'music', true, props.userModel);

        return (
            <div onClick={play} className={props.islandView ? "list__col__music--island" : "list__col__music"} key={"music_"+singleResult.id}>
                <div className={props.islandView ? "listItem__music--island" : "listItem__music"}>
                    <div className={props.islandView ? "listItem__imagePlaceholderMusic--island" : "listItem__imagePlaceholderMusic"}>
                        <img className={props.islandView ? "listItem__image__music--island" : "listItem__image__music"} alt="music" src={singleResult.image_uri} loading="lazy"/>
                    </div>
                    <div className={props.islandView ? "listItem__text__music--island" : "listItem__text__music"}>
                        {singleResult.name["name-EUen"]}
                    </div>
                    {props.islandView ?
                    <></> :
                    <img id={'checkmark_' + singleResult.id} className={inCollection ? "checkmark" : "hidden"} src="../../images/inCollection.svg" alt=""/>
                    }
                    <div className={props.islandView ? "listItem__buttonContainer--island" : "listItem__buttonContainer"}>
                        <div className="listItem__playbuttonContainer">
                            <img className="listItem__music play_button-is-hover listItem__play_button"  src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt="play"/>
                        </div>
                        <button id={'button_' + singleResult.id} style={{marginBottom:"20px", width: "80%"}} onClick={(e) => {
                            props.onCollectionChange(singleResult, isItemInCollection(singleResult, 'music', true, props.userModel));
                            e.stopPropagation();
                        }}>{isItemInCollection(singleResult, 'music', true, props.userModel)?'Remove from My Island':'Add to My Island'}</button>
                    </div>
                </div>
            </div>
        );
        }
        return Object.values(data).map(renderSingleData);
    }
    return(
        <div className="list">
            {props.islandView ?
            <div className="island__headerShadow">My music</div>
            :
            <></>  
            }
            <div className={props.islandView ? "list__container__other--island" : "list__container"}>
                <div className={props.islandView ? "list__row__music--island" : "list__row"}>
                    {props.islandView && props.data.length === 0 ?
                        <div className="island__message">Add music to your island!</div>
                    :
                        renderData(props.data)
                    }
                </div>
            </div>
        </div>
    );
}

export default MusicView;