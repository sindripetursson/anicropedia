import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Sidedrawer from '../components/sideDrawer';
import Backdrop from '../components/backdrop';
import { ReactSession } from "react-client-session";


export default 
function MenuBarView(props) {
    const location = useLocation();
    const [hideCitySelect, sethideCitySelect] = React.useState(true);
    const [hideCitySearch, sethideCitySearch] = React.useState(false);

    const [sideDrawerOpen, setsideDrawerOpen] = React.useState(false);
    const [backdropOpen, setbackdropOpen] = React.useState(false);

    const fire = (event) => {
        if (event.keyCode === 13) {
            sethideCitySearch(true);
            sethideCitySelect(false);
            props.onSearchNow();
        }
    }

    // information from the input element
    function sendCityACB(evt) {
        props.onUserInput(evt.target.value)
    }

    function renderCities(data) {
        function renderSingleData(singleResult) {
            return (
                <option value={
                    singleResult.lat + ',' + 
                    singleResult.lon + ',' + 
                    singleResult.name + ',' + 
                    singleResult.country + ',' + 
                    singleResult.state
                    } 
                    key={singleResult.lat}>
                        {(
                            singleResult.name + ', ' + 
                            singleResult.country + ', ' + 
                            singleResult.state
                        )}
                </option>
            );
        }
        return Object.values(data).map(renderSingleData);
    }

    // information from the select element
    function chooseParameterACB(evt) {
        sethideCitySelect(true);
        props.onSetChosenCity(evt.target.value);
    }

    function muteMusic() {
        // Send mute request to presenter
        props.onMuteAudio();

        // set the image to alter the src
        //var image = document.getElementById('muteId');

        // if src matches the actual one and is clicked, then change it
        /*if (image.src.match("images/soundOn.svg")) {
            image.src = "images/soundOff.svg";
        }
        else {
            image.src = "images/soundOn.svg";
        } */
    }

    function drawerToggleClickHandler() {
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
            <Sidedrawer show={sideDrawerOpen}/>
        </div>        
        <div className='menuBar'>        
            <div className='menuBar__upper'>
                <div className='menuBar__sides'> 
                    {location.pathname === "/" || location.pathname === "/login" ? 
                        <></> : 
                    <Link className='menuBar__link' to="/"> 
                        <img src='../../images/back.svg' alt="back" className="menuBar__backUpper" /> 
                    </Link> 
                    }
                </div>
                <Link className='menuBar__center' to="/">
                    <img className="menuBar__logo" alt="anicropediaLogo" src={"../../images/anicropediaLogo.svg"} />
                </Link>
                <div className='menuBar__sidesWithSettings'>
                    <img className='menuBar__icon' src={"../../images/soundOff.svg"} id="muteId" alt="mute" onClick={muteMusic} value="ChangeMute"/>
                    <img src='../../images/menu.svg' onClick={drawerToggleClickHandler} alt="user" className="menuBar__icon" />
                </div>
            </div>

            <div className='menuBar__lower'>
                <div className='menuBar__sides'> 
                    {location.pathname === "/" || location.pathname === "/login" ? 
                        <></> : 
                        <Link className='menuBar__link' to="/"> 
                            <img src='../../images/back.svg' alt="back" className="menuBar__backLower" /> 
                        </Link> 
                    }
                </div>
                <div className='menuBar__center'>
                    {location.pathname === "/" ? 
                        <h1 className='menuBar__title'> Welcome, {(ReactSession.get('uid') !== null && props.userModel)?props.userModel.getUserName():''}! </h1> 
                    : location.pathname === "/encyclopedia" 
                    || location.pathname === "/villagers" 
                    || location.pathname === "/music" 
                    || location.pathname === "/collectibles" 
                    || location.pathname === "/info" 
                    || location.pathname === "/login" 
                    || location.pathname === "/logout"
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
                <div className='menuBar__sides'>
                </div>
            </div>

            <div className='menuBar__sides'>
                
            </div>
        </div>
    </div> 
    )
}