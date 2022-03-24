import React from 'react'

export default 
function TopbarView(props) {

  return (
    <div className='top'>
        <div className='topLeft'><i className="topIcon fa-solid fa-gamepad"></i></div>
        <div className='topCenter'>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'>HOME</li>
                    <li className='topListItem'>ABOUT</li>
                </ul>
            </div>
        </div>
        <div className='topRight'><i class="topIcon fa-solid fa-circle-user"></i></div>
        </div>
  )
}
