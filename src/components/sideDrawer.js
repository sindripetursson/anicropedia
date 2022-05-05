import React from "react";

import {Link} from 'react-router-dom';

const sideDrawer = props => {
    let drawerClasses = 'menuBar__sideDrawer';

    if (props.show) {
        drawerClasses = 'menuBar__sideDrawerOpen'; 
    }

    return (
    <nav className={drawerClasses}>
        <img src='../../images/close.svg' onClick={props.drawerToggleClickHandler} alt="user" className="menuBar__sideDrawerClose" />
        <ul className="menuBar__sideDrawerList">
            
            <li className="menuBar__sideDrawerItemTop">
                <Link className='menuBar__sideDrawerLogo' to="/">
                    <img className="menuBar__logo" alt="anicropediaLogo" src={"../../images/anicropediaLogo.svg"} />
                </Link>
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/island">
                    <h3 className="menuBar__sideDrawerText"> My Island </h3>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/encyclopedia">
                    <h3 className="menuBar__sideDrawerText"> Encyclopedia </h3>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/villagers">
                    <h3 className="menuBar__sideDrawerText"> Villagers </h3>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/music">
                    <h3 className="menuBar__sideDrawerText"> Music </h3>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/collectibles">
                    <h3 className="menuBar__sideDrawerText"> Collectibles </h3>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/info">
                    <h3 className="menuBar__sideDrawerText"> Info </h3>
                </Link>  
            </li>
        </ul>

        <ul className="menuBar__sideDrawerListBottom">
            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/settings">
                <div className="menuBar__flexContainerWithIcon">
                        <img src='../../images/settings.svg' alt="settings" className="menuBar__sideDrawerIcon"/>
                        <h3 className="menuBar__sideDrawerTextWithIcon"> Settings </h3>
                    </div>
                </Link>  
            </li>

            <li className="menuBar__sideDrawerItem">
                <Link className="menuBar__sideDrawerLink" to="/logout">
                    <div className="menuBar__flexContainerWithIcon">
                        <img src='../../images/logOut.svg' alt="logout" className="menuBar__sideDrawerIcon"/>
                        <h3 className="menuBar__sideDrawerTextWithIcon"> Log out </h3>
                    </div>
                </Link>  
            </li>
        </ul>
    </nav>
    );
};

export default sideDrawer;
