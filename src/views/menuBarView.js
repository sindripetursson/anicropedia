import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default 
function MenuBarView(props) {
    const location = useLocation();
    return (
    <div className='menuBar'>    
        <div className='menuBar__upper'>
            <div className='menuBar__sides'> 
            </div>
            <div className='menuBar__center'>
                <img className="menuBar__logo" alt="anicropediaLogo" src={"../../images/anicropediaLogo.svg"} />
            </div>
            <div className='menuBar__sides'>
                <Link className='menuBar__link' to="/signout"> 
                    <img src='../../images/user.svg' alt="user" className="menuBar__icon" />
                </Link> 
            </div>
        </div>

        <div className='menuBar__lower'>
            <div className='menuBar__sides'> 
                {location.pathname === "/" ? 
                    <></> : 
                    <Link className='menuBar__link' to="/"> 
                    <img src='../../images/back.svg' alt="back" className="menuBar__icon" /> 
                </Link> 
                }
            </div>
            <div className='menuBar__sides'> 
            </div>
            <div className='menuBar__center'>
                {location.pathname === "/" ? 
                    <h1 className='menuBar__title'> Anicropedia </h1> 
                : location.pathname === "/myisland" 
                || location.pathname === "/encyclopedia" 
                || location.pathname === "/villagers" 
                || location.pathname === "/music" 
                || location.pathname === "/collectibles" 
                || location.pathname === "/info" 
                || location.pathname === "/login" 
                || location.pathname === "/signout"
                ?
                    <h1 className='menuBar__title'> {location.pathname.substring(1)} </h1> 
                :
                    <h1 className='menuBar__title'> </h1> 
                }
            </div>
            <div className='menuBar__sides'>
                { location.pathname === "/encyclopedia" 
                || location.pathname === "/villagers"
                || location.pathname === "/music" 
                || location.pathname === "/collectibles" 
                ? 
                    <input className='menuBar__search' placeholder="Search item" />
                :
                    <></> 
                }
            </div>
            <div className='menuBar__sides'>
                {  location.pathname === "/encyclopedia" 
                || location.pathname === "/villagers"
                || location.pathname === "/music" 
                || location.pathname === "/collectibles" 
                ? 
                    <button className='menuBar__filter'> Filter </button>
                :
                    <></> 
                }
            </div>
        </div>

    </div>
    )
}