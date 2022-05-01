export default
function SearchFormView(props) {

    const something = (event) => {
        if (event.keyCode === 13) {
            props.onSearchNow("user clicked");
        }
    }

    function fireClickACB() {
        props.onSearchNow("user clicked");
        // window.location.hash = "#details"
    }

    function sendTextACB(evt) {
        props.onSetSearchText(evt.target.value)
    }

    return <div>
        <input onKeyDown={(e) => something(e) } onChange={sendTextACB} placeholder="Type the fish here"></input>
        <button type="submit" onClick={fireClickACB}>Search</button>
    </div>
}