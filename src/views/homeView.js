import React from 'react'
import { Link } from "react-router-dom";

export default 
function HomeView(props) {
  return (
    <div className="list__home">
        <div className="listItem__home" >
            <Link to="/">
            <img className="listItem__image" alt="" src={"https://dodo.ac/np/images/e/e9/Menu_Map_NH_Icon.png"}/>
            My Island </Link>
        </div>
        <div className="listItem__home" >
            <Link to="/encyclopedia">
            <img className="listItem__image" alt="" src={"https://acnhapi.com/v1/icons/fish/1"}/>
            Encyclopedia </Link>
        </div>
        <div className="listItem__home" >
            <Link to="/villagers">
            <img className="listItem__image" alt="" src={"https://acnhapi.com/v1/icons/villagers/1"}/>
            Villagers </Link>
        </div>
        <div className="listItem__home" >
            <Link to="/music">
            <img className="listItem__image" alt="" src={"https://acnhapi.com/v1/images/songs/1"}/>
            Music </Link>
        </div>
        <div className="listItem__home" >
            <Link to="/collectibles">
            <img className="listItem__image" alt="" src={"https://acnhapi.com/v1/images/art/academic_painting"}/>
             Collectibles </Link>
        </div>
        <div className="listItem__home" >
            <Link to="/">
            <img className="listItem__image" alt="" src={"https://dodo.ac/np/images/6/65/Menu_Custom_Designs_NH_Icon.png"}/>
            Help/Info </Link>
        </div>
    </div>
  )
}