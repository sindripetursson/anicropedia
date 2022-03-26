export default function promiseNoData(promiseState) {
 
    if(!promiseState.promise) {
        return <div>No data</div>
    }
    if(!promiseState.data && !promiseState.error) {
        return <img src="https://c.tenor.com/5o2p0tH5LFQAAAAj/hug.gif" alt="" className="loadingIcon" />
    }  
    if(!promiseState.data && promiseState.error) {
        return <div className="debug" >{promiseState.error}</div>
    }
        return false;
}