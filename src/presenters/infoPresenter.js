import React from "react";
import InfoView from '../views/infoView';
import { sessionCheck } from "../utils";

export default
function Info(props) {
    React.useEffect(() => {
        props.setDetailsOn(false);
    })
    return sessionCheck() || (
        <InfoView/>
    );
}