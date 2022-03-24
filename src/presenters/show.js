import React from "react";

export default
function Show(props){
        const [hashState, setHash]=React.useState(window.location.hash);

        function hashStateChangedACB(){ 
            if(window.location.hash !== props.hash) setHash("hidden");
                else setHash("");

            let cancelled = false;
            function changedAgainACB(){ 
                cancelled = false; 
            };

            return changedAgainACB; // stateMemberChangedACB will be called for the new value!
       }

       React.useEffect(hashStateChangedACB, [hashState, window.location.hash])
       
        function hashListenerACB(){ 
            setHash(window.location.hash);
        }

        function wasCreatedACB(){  
            window.addEventListener("hashchange", hashListenerACB);   // 1 subscribe
            
            function tearDownACB(){ 
                window.removeEventListener("hashchange", hashListenerACB); 
            } 
            return tearDownACB;
        }

        React.useEffect(wasCreatedACB, []); 

    return <div class={hashState}>{props.children}</div>;
}  
    