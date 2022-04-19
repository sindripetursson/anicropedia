import React from 'react'
import { Link, useLocation } from "react-router-dom";

export default 
function MenuBarView(props) {
    const location = useLocation();
    const [hideCitySelect, sethideCitySelect] = React.useState(true);
    const [hideCitySearch, sethideCitySearch] = React.useState(false);


    const fire=(event)=> {
        if (event.keyCode === 13) {
            sethideCitySearch(true);
            sethideCitySelect(false);
            props.onSearchNow("user clicked");
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
                    <h1 className='menuBar__title'> Anicropedia </h1> : 
                    <h1 className='menuBar__title'> {location.pathname.substring(1)} </h1>
                }
            </div>
            <div className='menuBar__sides'>
                {location.pathname === "/" || location.pathname === "/info" ? 
                    <></> : 
                    <input className='menuBar__search' placeholder="Search item" />
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
                            <select onChange={chooseParameterACB}>
                                <option value="" >Choose:</option>
                                {props.data ?  renderCities(props.data) : <></>}
                            </select>
                        </div>
                }
            </div>
            }
            {/* City options END */}
            {/* City display START*/}
            <div className='menuBar__sides'>
                {location.pathname === "/" || location.pathname === "/info" ? 
                    <></> : 
                    <p>{props.chosenCity}</p>
                }
            </div>
            {/* City display END */}
            <div className='menuBar__sides'>
                {location.pathname === "/" || location.pathname === "/info" ? 
                    <></> : 
                    <button className='menuBar__filter'> Filter </button>
                }
            </div>
        </div>
    </div>
    )
}