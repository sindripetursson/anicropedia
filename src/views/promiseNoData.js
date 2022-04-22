import Loading from "../components/loading";

export default function promiseNoData(promiseState) {
 
    if(!promiseState.promise) {
        return <div className="page404">
            <img className="page404__image" src="../../images/NoData.png" alt="No Data" />
        </div>
    }
    if(!promiseState.data && !promiseState.error) {
        return <Loading />
    }  
    if(!promiseState.data && promiseState.error) {
        return <div className="debug" >{promiseState.error}</div>
    }
        return false;
}