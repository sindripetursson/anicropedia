import React from 'react'

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
                    <li onClick={goToEncyclopedia} className='topListItem'>Encyclopedia</li>
                    <li onClick={goToVillagers} className='topListItem'>Villagers</li>
                    <li onClick={goToMusic} className='topListItem'>Music</li>
                    <li onClick={goToCollectibles} className='topListItem'>Collectibles</li>
                </ul>
            </div>
        </div>
        <div className='topRight'><i className="topIcon fa-solid fa-circle-user"></i></div>
        </div>
  )
}
