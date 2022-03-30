import React from 'react'
import { Outlet, Link } from "react-router-dom";

export default 
function TopbarView(props) {

    function goToEncyclopedia(){
        window.location.hash = "#encyclopedia";
        props.setDetailsOn(false);
    }
    function goToVillagers(){
        window.location.hash = "#villagers";
        props.setDetailsOn(false);
    }
    function goToMusic(){
        window.location.hash = "#music";
        props.setDetailsOn(false);
    }
    function goToCollectibles() {
        window.location.hash = "#collectibles";
        props.setDetailsOn(false);
    }

  return (
    <div className='top'>
        <div className='topLeft'><i className="topIcon fa-solid fa-gamepad"></i></div>
        <div className='topCenter'>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'> <Link to="/encyclopedia"> Encyclopedia </Link></li>
                    <li className='topListItem'> <Link to="/villagers"> Villagers </Link></li>
                    <li className='topListItem'> <Link to="/music"> Music </Link></li>
                    <li className='topListItem'> <Link to="/collectibles"> Collectibles </Link></li>
                </ul>
            </div>
        </div>
        <div className='topRight'><i className="topIcon fa-solid fa-circle-user"></i></div>
        </div>
  )
}