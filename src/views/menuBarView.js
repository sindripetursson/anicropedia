import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Sidedrawer from '../components/sideDrawer';
import Backdrop from '../components/backdrop';
import { ReactSession } from "react-client-session";


export default 
function MenuBarView(props) {
    const location = useLocation();

    const [sideDrawerOpen, setsideDrawerOpen] = React.useState(false);
    const [backdropOpen, setbackdropOpen] = React.useState(false);

    function muteMusic() {
        // Send mute request to presenter
        props.onMuteAudio();
    }

    function stopVinyl() {
        var vinyl = document.getElementById("vinyl");
        vinyl.src = "stop";
        vinyl.pause();
    }

    function drawerToggleClickHandler() {
        console.log('click')
        setsideDrawerOpen(!sideDrawerOpen)
        setbackdropOpen(!backdropOpen)
    };
    return (
    <div>
        {backdropOpen ? 
        <div className='menuBar__drawerDisplayer' onClick={drawerToggleClickHandler} >
            <Backdrop/>
        </div> :
        <></>
        }  
        <div className='menuBar__drawer'>
            <Sidedrawer show={sideDrawerOpen} ToggleClickHandler={drawerToggleClickHandler}/>
        </div>        
        <div className='menuBar'>      
            <div className='menuBar__upper'>
                <div className='menuBar__sides'> 
                    {location.pathname === "/" || location.pathname === "/login" ? 
                        <></> : 
                    <Link className='menuBar__link' to="/"> 
                        <img src='../../images/back.svg' alt="back" className="menuBar__back" onClick={stopVinyl} /> 
                    </Link> 
                    }
                </div>
                <Link className='menuBar__center' to="/">
                    <img className="menuBar__logo" alt="anicropediaLogo" src={"../../images/anicropediaLogo.svg"} />
                </Link>
                <div className='menuBar__sidesWithSettings'>
                    <div className="menuBar__bgMusicContainer">
                        <p className="menuBar__bgMusicLabel" onClick={() => muteMusic()}>Background Music</p>
                        <img className='menuBar__icon' src={"../../images/playBg.svg"} id="muteId" alt="mute" onClick={muteMusic} value="ChangeMute"/>
                        <img src='../../images/menu.svg' onClick={drawerToggleClickHandler} alt="user" className="menuBar__icon" />
                    </div>
                </div>
            </div>

            <div className='menuBar__lower'>

                <div className='menuBar__center'>
                    {location.pathname === "/" ? 
                        <h1 className='menuBar__title'> Welcome, {(ReactSession.get('uid') !== null && props.userModel)?props.name:''}! </h1> 
                    : location.pathname === "/encyclopedia" 
                    || location.pathname === "/villagers" 
                    || location.pathname === "/music" 
                    || location.pathname === "/collectibles" 
                    || location.pathname === "/info" 
                    || location.pathname === "/login" 
                    || location.pathname === "/logout"
                    || location.pathname === "/settings"
                    ?
                        <h1 className='menuBar__title'> {location.pathname.substring(1)} </h1> 
                    :
                        location.pathname === "/island"
                    ?
                        <h1 className='menuBar__title'> {"My " + location.pathname.substring(1)} </h1> 
                    :
                        <h1 className='menuBar__title'> </h1> 
                    }
                </div>
            </div>
        </div>
        <div className='menuBar__gutter'></div>  
    </div> 
    )
}