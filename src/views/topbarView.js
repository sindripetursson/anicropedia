import React from 'react'
import { Link } from "react-router-dom";

export default 
function TopbarView(props) {
  return (
    <div className='top'>
        <div className='topLeft'><Link to="/"> Back </Link></div>
        <div className='topCenter'>
            <div className='topCenter'>
                <ul className='topList'>
                    <li className='topListItem'> Title </li>
                </ul>
            </div>
        </div>
        <div className='topRight'><i className="topIcon fa-solid fa-circle-user"></i></div>
        </div>
  )
}