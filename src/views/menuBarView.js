import React from 'react'
import { Link } from "react-router-dom";

export default 
function MenuBarView(props) {
  return (
    <div className='menuBar'>    
        <div className='menuBar__upper'>
            <div className='menuBar__sides'> 
                <img className="menuBar__logo" alt="anicropediaLogo" src={"../../images/anicropediaLogo.svg"} />
            </div>
            <div className='menuBar__center'>
                <div className='menuBar__center'>
                </div>
            </div>
            <div className='menuBar__sides'>
                <Link className='menuBar__link' to="/"> 
                <i className="menuBar__icon fa-solid fa-circle-user"></i>
                </Link> 
            </div>
        </div>

        <div className='menuBar__lower'>
            <div className='menuBar__sides'> 
                <Link className='menuBar__link' to="/"> 
                    <i className="menuBar__icon fa-solid fa-reply"></i> 
                </Link> 
            </div>
            <div className='menuBar__sides'> 
            </div>
            <div className='menuBar__center'>
                <div className='menuBar__center'>
                    <h1 className='menuBar__title'> Anicropedia </h1>
                </div>
            </div>
            <div className='menuBar__sides'>
                <input placeholder="Search item" />
            </div>
            <div className='menuBar__sides'>
                <button> Filter </button>
            </div>
        </div>

    </div>
  )
}