import React from "react";

function Months({monthArray}){
    let boolArray = [false,false,false,false,false,false,false,false,false,false,false,false,]
    for(let i=1; i<=12; i++){
        let found = monthArray.find(element => element === i);
        if(found) boolArray[i-1] = true;
    }

    return (
        <div className="months__container">
            <div className="months__row">
                <div className={boolArray[0] ? "months__colActive" : "months__col"}>
                    Jan
                </div>
                <div className={boolArray[1] ? "months__colActive" : "months__col"}>
                    Feb
                </div>
                <div className={boolArray[2] ? "months__colActive" : "months__col"}>
                    Mar
                </div>
                <div className={boolArray[3] ? "months__colActive" : "months__col"}>
                    Apr
                </div>
                <div className={boolArray[4] ? "months__colActive" : "months__col"}>
                    May
                </div>
                <div className={boolArray[5] ? "months__colActive" : "months__col"}>
                    Jun
                </div>
            </div>
            <div className="months__row">
                <div className={boolArray[6] ? "months__colActive" : "months__col"}>
                    Jul
                </div>
                <div className={boolArray[7] ? "months__colActive" : "months__col"}>
                    Aug
                </div>
                <div className={boolArray[8] ? "months__colActive" : "months__col"}>
                    Sep
                </div>
                <div className={boolArray[9] ? "months__colActive" : "months__col"}>
                    Oct
                </div>
                <div className={boolArray[10] ? "months__colActive" : "months__col"}>
                    Nov
                </div>
                <div className={boolArray[11] ? "months__colActive" : "months__col"}>
                    Dec
                </div>
            </div>
        </div>
    );
}


export default Months;