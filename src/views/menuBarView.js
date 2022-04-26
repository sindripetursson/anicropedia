import React from 'react'
import { Link, useLocation } from "react-router-dom";
import Sidedrawer from '../components/sideDrawer';

export default 
function MenuBarView(props) {
    const location = useLocation();
    const [hideCitySelect, sethideCitySelect] = React.useState(true);
    const [hideCitySearch, sethideCitySearch] = React.useState(false);

    const [sideDrawerOpen, setsideDrawerOpen] = React.useState(false);

    const fire=(event)=> {
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
        var image = document.getElementById('muteId');

        // if src matches the actual one and is clicked, then change it
        if (image.src.match("images/volume.png")) {
            image.src = "images/volume-mute.png";
        }
        else {
            image.src = "images/volume.png";
        }
    }

    function drawerToggleClickHandler() {
        setsideDrawerOpen(!sideDrawerOpen)
    };
    
    return (
    <div>  
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
                    <img src='../../images/menu.svg' onClick={drawerToggleClickHandler} alt="user" className="menuBar__icon" />
                    <Link className='menuBar__link' to="/signout"> 
                        <img src='../../images/user.svg' alt="user" className="menuBar__icon" />
                    </Link> 
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
                <div className='menuBar__sides'> 
                </div>
                <div className='menuBar__center'>
                    {location.pathname === "/" ? 
                        <h1 className='menuBar__title'> Anicropedia </h1> 
                    : location.pathname === "/encyclopedia" 
                    || location.pathname === "/villagers" 
                    || location.pathname === "/music" 
                    || location.pathname === "/collectibles" 
                    || location.pathname === "/info" 
                    || location.pathname === "/login" 
                    || location.pathname === "/signout"
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
                    { location.pathname === "/encyclopedia" 
                    || location.pathname === "/villagers"
                    || location.pathname === "/music" 
                    || location.pathname === "/collectibles" 
                    ? 
                        <input className='menuBar__search' placeholder="Search item" />
                        && <img className='menuBar__mute' src={"../../images/volume.png"} id="muteId" onClick={muteMusic} value="ChangeMute"/>
                        && <p>{props.chosenCity}</p>
                    :
                        <></> 
                    }
                </div>
                {/* City search START*/}
                {hideCitySearch ? <></> :
                    <div className='menuBar__sides'>
                        {location.pathname === "/" || location.pathname === "/info" ? 
                            <></> : 
                            <input className='menuBar__search' onKeyDown={(e) => fire(e) } onInput={sendCityACB} placeholder="City" />
                        }
                    </div>
                }
                {/* City search END */}
                {/* City options START*/}
                {hideCitySelect ? <></> :  
                    <div className='menuBar__sides'>
                        {location.pathname === "/" || location.pathname === "/info" ? 
                            <></> : 
                            <div>
                                <select className="authentication__citySelection" onChange={chooseParameterACB}>
                                    <option value="" >Choose:</option>
                                    {props.data ?  renderCities(props.data) : <></>}
                                </select>
                            </div>
                    }
                </div>
                }
            </div>
            {/* City options END*/}
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