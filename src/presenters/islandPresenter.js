import React from "react";
import { sessionCheck } from "../utils";
import Encyclopedia from '../presenters/encyclopediaPresenter';
import Collectible from '../presenters/collectiblePresenter';
import Music from '../presenters/musicPresenter';
import Villagers from '../presenters/villagersPresenter';

export default 
    function Island(props) {
        return sessionCheck() || (<div>
        {
            <div className="island__container">
                <div className="island__col">
                    <div className="island__encyclopedia"> 
                        <Encyclopedia userModel={props.userModel} detailsModel={props.detailsModel} species={'fish'} setDetailsOn={props.setDetailsOn} islandView/>
                    </div>

                    <div className="island__collectibles"> 
                        <Collectible userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={props.setDetailsOn} islandView/>            
                    </div>
                </div>

                <div className="island__row">
                    <div className="island__music">
                        <Music userModel={props.userModel} detailsModel={props.detailsModel} islandView/> 
                    </div>

                    <div className="island__villagers">
                        <Villagers userModel={props.userModel} detailsModel={props.detailsModel} setDetailsOn={props.setDetailsOn} islandView/>
                    </div>
                </div>
            </div>
        }
        </div>)
}
