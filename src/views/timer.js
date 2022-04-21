import React from "react";
import MenuBar from "../presenters/menuBarPresenter";

export default 
function Timer(props) {


    React.useEffect (() => {props.onTimerCreated(true) }, [])

    // const [delay, setDelay] = React.useState(1000);

    var date = new Date();
    // var hour = date.getHours();
    // var minutes = date.getMinutes();


    function calcDelay() {
        // 3600000 eq one hour in milliseconds
        // delay = 3600000 - (date.getMinutes() * 60 * 1000)
        // setDelay(60000 - (date.getSeconds() * 1000));
    }
    
    setInterval(function() {
        date = new Date();
        // var checkMinutes = date.getMinutes();
        // console.log(minutes + ", " + checkMinutes);
        // calcDelay();
        // console.log(delay);
        
        // if(minutes !== checkMinutes) {
        //     minutes = checkMinutes;
            // console.log('changed: ' + date.getMinutes())
            props.onUpdateData();
        // }
      }, 1000)

    return null;
}