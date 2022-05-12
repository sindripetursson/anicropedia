import React from 'react'

function Page404View(props){
    function goBack() {
        window.location = "/";
    }
    return(
        <div className="page404">
            <img className="page404__image" src="../../images/404NotFound.png" alt="404" />
            <div className="page404__button" onClick={goBack}>Go back</div>
        </div>
    );
}

export default Page404View;