import React from "react";

export default 
function Timer(props) {

    React.useEffect (() => { 
        props.onTimerCreated(true) 
    }, [props])

    var date = new Date();
    var hour = date.getHours();
    // var minutes = date.getMinutes();
    var delay = 1000;


    function timer() {
        date = new Date();
        var checkHour = date.getHours();
        // console.log(hour + ", " + checkHour);
        // console.log('timer is running');

        // delay = 60000 - (date.getSeconds() * 1000);
        delay = 3600000 - (date.getMinutes() * 60 * 1000);
        
        if(hour !== checkHour) {
            hour = checkHour;
            // console.log('changed: ' + date.getMinutes());
            props.onUpdateData();
        }
        setTimeout(timer, delay);
    }

    setTimeout(timer, delay);

    return null;
}