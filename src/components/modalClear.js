import CloseButton from "./close_button";

function ModalClear(props){
    return <div className="settings__modalContainer" onClick={() => props.setModalClearVisible(!props.modalClearVisible)}>
    <div className="settings__modal" onClick={(event) => event.stopPropagation()}>
        <label className="settings__name">
            <p style={{marginTop: "50px"}} className="settings__modalText">Are you sure you want to clear your collection?</p>
            <p style={{marginTop: "20px"}} className="settings__subtext">This will remove all of your critters, villagers, music and collectibles from your My Island, and cannot be undone!</p>
        </label>
        <div style={{marginTop: "30px"}} className='settings__buttonsContainer'>
            <button className="settings__buttonModal" onClick={() => props.setModalClearVisible(!props.modalClearVisible)}>No, cancel</button>
            <button  style={{marginTop: "10px", border: "white 2px solid", backgroundColor: "#FF5757", color: "white"}} className="settings__buttonModal" onClick={() => console.log("clicked remove")}>Yes, remove everything from my collection</button>
        </div>
        <div className="settings__error">
            <p className="settings__errorMessage"></p>
        </div>
    </div>
</div>
}

export default ModalClear;
