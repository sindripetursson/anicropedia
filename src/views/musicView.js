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
            <div onClick={play} className="list__col__music" key={"music_"+singleResult.id}>
                <div className="listItem__music" >
                    <img className="listItem__image__music" alt="" src={singleResult.image_uri}/>
                    <div className="listItem__text__music">
                        {singleResult.name["name-EUen"]}
                    </div>
                    <img id={'checkmark_' + singleResult.id} className={inCollection ? "checkmark" : "hidden"} src="../../images/inCollection.svg" alt=""/>
                    <div className="listItem__playbuttonContainer">
                        <img className="listItem__music play_button-is-hover listItem__play_button"  src="../../images/play-button.png" id={"togglePlayPause." + singleResult.id} alt="play"/>
                    </div>
                    <button id={'button_' + singleResult.id} style={{marginBottom:"20px", width: "80%"}} onClick={(e) => {
                        props.onCollectionChange(singleResult, isItemInCollection(singleResult, 'music', true, props.userModel));
                        e.stopPropagation();
                    }}>{isItemInCollection(singleResult, 'music', true, props.userModel)?'Remove from my collection':'Add to my collection'}</button>
                </div>
            </div>
        );
        }
        return Object.values(data).map(renderSingleData);
    }
    console.log("island music ", props.islandView)
    return(
        <div className="list">
            <div className={props.islandView ? "list__container__other--island" : "list__container"}>
                <div className="list__row">
                    {renderData(props.data)}
                </div>
            </div>
        </div>
    );
}

export default MusicView;