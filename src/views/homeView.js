import React from 'react'
import { Link } from "react-router-dom";

export default 
function HomeView(props) {
  return (
    <div className="list__col">
        <div className="listItem" >
            <Link to="/encyclopedia"> Encyclopedia </Link>
        </div>
        <div className="listItem" >
            <Link to="/villagers"> Villagers </Link>
        </div>
        <div className="listItem" >
            <Link to="/music"> Music </Link>
        </div>
        <div className="listItem" >
            <Link to="/collectibles"> Collectibles </Link>
        </div>
    </div>
  )
}