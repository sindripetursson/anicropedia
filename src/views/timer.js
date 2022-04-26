import React from "react";

export default 
function Timer(props) {

    React.useEffect (() => { 
        props.onTimerCreated(true) 
    }, [props])

    var date = new Date();
    var hour = date.getHours();
    var minutes = date.getMinutes();
    var delay = 1000;
    var delayTest = 1000;


    function timer() {
        date = new Date();
        var checkHour = date.getHours();
        // console.log('timer function: ' + hour + ", " + checkHour);
        // console.log('timer is running');

        // delay = 60000 - (date.getSeconds() * 1000);

        delay = 3600000 - ((date.getMinutes() + (date.getSeconds() / 60)) * 60 * 1000);
        // console.log(delay);
        
        if(hour !== checkHour) {
            hour = checkHour;
            // console.log('changed: ' + date.getMinutes());
            props.onUpdateData();
        }
        setTimeout(timer, delay);
    }

    setTimeout(timer, delay);

    // function timerTest() {
    //     date = new Date();
    //     var checkMinutes = date.getMinutes();
    //     console.log(minutes + ", " + checkMinutes);
    //     console.log('timerTest is running');

    //     delayTest = 60000 - (date.getSeconds() * 1000);
    //     console.log(delayTest);
        
    //     if(minutes !== checkMinutes) {
    //         minutes = checkMinutes;
    //         console.log('changedTest: ' + date.getMinutes());
    //         props.onUpdateData();
    //     }
    //     setTimeout(timerTest, delayTest);
    // }

    // setTimeout(timerTest, delayTest);

    return null;
}