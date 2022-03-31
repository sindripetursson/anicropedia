export default function promiseNoData(promiseState) {
 
    if(!promiseState.promise) {
        return <div>No data</div>
    }
    if(!promiseState.data && !promiseState.error) {
        return <img src="../../images/acloader.gif" alt="" className="loadingIcon" />
    }  
    if(!promiseState.data && promiseState.error) {
        return <div className="debug" >{promiseState.error}</div>
    }
        return false;
}