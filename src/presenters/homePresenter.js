import React from "react";
import HomeView from "../views/homeView";
import { sessionCheck } from "../utils";

export default
function Home(props) {
    return sessionCheck() || (
        <HomeView/>
    );
}