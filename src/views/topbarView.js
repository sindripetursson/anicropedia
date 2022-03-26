import React from 'react'

export default 
function TopbarView(props) {

    function goToEncyclopedia(){
        window.location.hash = "#encyclopedia";
    }
    function goToSearch(){
        window.location.hash = "#search";
    }
    function goToVillagers(){
        window.location.hash = "#villagers";
    }

  return (
    <div className='top'>
        <div className='topLeft'><i className="topIcon fa-solid fa-gamepad"></i></div>
        <div className='topCenter'>
            <div className='topCenter'>
                <ul className='topList'>
                    <li onClick={goToSearch} className='topListItem'>Search</li>
                    <li onClick={goToEncyclopedia} className='topListItem'>Encyclopedia</li>
                    <li onClick={goToVillagers} className='topListItem'>Villagers</li>
                </ul>
            </div>
        </div>
        <div className='topRight'><i className="topIcon fa-solid fa-circle-user"></i></div>
        </div>
  )
}
