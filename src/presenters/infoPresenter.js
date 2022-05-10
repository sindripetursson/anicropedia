import React from "react";
import InfoView from '../views/infoView';

export default
function Info(props) {
    React.useEffect(() => {
        props.setDetailsOn(false);
    })
    return (
        <InfoView/>
    );
}