import React from 'react'
import { Link } from "react-router-dom";

export default 
function HomeView(props) {
    return (
        <div className="list">
            <div className="list__container">
                <div className='list__row__home'>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/island">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/myIsland.png"}/>
                            <h3 className="listItem__text__home"> My Island </h3>
                        </Link>
                    </div>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/encyclopedia">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/encyclopedia.png"}/>
                            <h3 className="listItem__text__villagers"> Encyclopedia </h3>
                        </Link>
                    </div>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/villagers">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/villagers.png"}/>
                            <h3 className="listItem__text__villagers"> Villagers </h3>
                        </Link>
                    </div>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/music">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/music.png"}/>
                            <h3 className="listItem__text__villagers"> Music </h3>
                        </Link>
                    </div>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/collectibles">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/collectibles.png"}/>
                            <h3 className="listItem__text__villagers"> Collectibles </h3>
                        </Link>
                    </div>
                    <div className="list__col__home" >
                        <Link className="listItem__home" to="/info">
                            <img className="listItem__image__home" alt="" src={"../../images/homeIcons/help.png"}/>
                            <h3 className="listItem__text__villagers"> Info </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}