import CloseButton from "./close_button"

function ModalName(props){
    return <div className="settings__modalContainer" onClick={() => props.setmodalNameVisible(!props.modalNameVisible)}>
    <div className="settings__modal" onClick={(event) => event.stopPropagation()}>
        <label className="settings__name">
            <p style={{marginTop: "30px"}} className="settings__label">Name</p>
            <p className="settings__text">{props.userModel.getUserName()}</p>
        </label>
        <label className="settings__name">
            <p style={{marginTop: "30px"}} className="settings__label">New name</p>
            <input className="settings__input"
                type="text"
                onChange={props.onNameChange}
                value={props.name}
                id="signupName"
                placeholder="Enter new name..."
            />
        </label>
        <div className="settings__error">
                    <p className="settings__errorMessage"></p>
                </div>
        <div style={{marginTop: "30px"}} className='settings__buttonsContainer'>
            <button className="settings__buttonModal" onClick={() => props.setModalNameVisible(!props.modalNameVisible)}>Cancel</button>
            <button className="settings__buttonModal" onClick={() => console.log("clicked submit")}>Submit</button>
        </div>
        <div  onClick={() => props.setModalNameVisible(!props.modalNameVisible)} className="close">
            <CloseButton />
        </div>
    </div>
</div>
}

export default ModalName;
