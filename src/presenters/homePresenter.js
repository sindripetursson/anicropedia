import React from "react";
import HomeView from "../views/homeView";
import { sessionCheck } from "../utils";

export default
function Home(props) {
    React.useEffect(() => {
        props.setDetailsOn(false);
    })

    return sessionCheck() || (
        <HomeView/>
    );
}