import React from 'react'
import { Link } from "react-router-dom";

export default 
function HomeView(props) {
  return (
    <div className="home">
            <div className='home__row'>
                <div className="home__box" >
                    <Link className="home__link" to="/island">
                        <img className="home__image" alt="" src={"../../images/homeIcons/myIsland.png"}/>
                        <h3 className="home__text"> My Island </h3>
                    </Link>
                </div>
                <div className="home__box" >
                    <Link className="home__link" to="/encyclopedia">
                        <img className="home__image" alt="" src={"../../images/homeIcons/encyclopedia.png"}/>
                        <h3 className="home__text"> Encyclopedia </h3>
                    </Link>
                </div>
                <div className="home__box" >
                    <Link className="home__link" to="/villagers">
                        <img className="home__image" alt="" src={"../../images/homeIcons/villagers.png"}/>
                        <h3 className="home__text"> Villagers </h3>
                    </Link>
                </div>
                <div className="home__box" >
                    <Link className="home__link" to="/music">
                        <img className="home__image" alt="" src={"../../images/homeIcons/music.png"}/>
                        <h3 className="home__text"> Music </h3>
                    </Link>
                </div>
                <div className="home__box" >
                    <Link className="home__link" to="/collectibles">
                        <img className="home__image" alt="" src={"../../images/homeIcons/collectibles.png"}/>
                        <h3 className="home__text"> Collectibles </h3>
                    </Link>
                </div>
                <div className="home__box" >
                    <Link className="home__link" to="/info">
                        <img className="home__image" alt="" src={"../../images/homeIcons/help.png"}/>
                        <h3 className="home__text"> Info </h3>
                    </Link>
                </div>
            </div>
    </div>
  )
}