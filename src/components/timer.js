import React from "react";

// A timer that triggers hourly background music change.
export default 
function Timer(props) {

    React.useEffect (() => { 
        props.onTimerCreated(true) 
    }, [props])

    let date = new Date();
    let hour = date.getHours();
    let delay = 1000;

    function timer() {
        date = new Date();
        let checkHour = date.getHours();

        delay = 3600000 - ((date.getMinutes() + (date.getSeconds() / 60)) * 60 * 1000);
        
        if(hour !== checkHour) {
            hour = checkHour;
            props.onUpdateData();
        }
        setTimeout(timer, delay);
    }

    setTimeout(timer, delay);
    return null;
}