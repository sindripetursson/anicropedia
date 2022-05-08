import CloseButton from "./close_button";

function ModalPassword(props){
    return <div className="settings__modalContainer" onClick={() => props.setModalPasswordVisible(!props.modalPasswordVisible)}>
    <div className="settings__modal" onClick={(event) => event.stopPropagation()}>
        <form>
            <label className="settings__password">
                <p style={{marginTop: "30px"}} className="settings__label">Old password</p>
                <input className="settings__input"
                        type="password" 
                        onChange={props.onOldPasswordChange}
                        value={props.oldPassword}
                        id="oldPassword"
                        placeholder="Enter your old password..."
                />
            </label>
            <label className="settings__password">
                <p className="settings__label">New password</p>
                <input className="settings__input"
                        type="password" 
                        onChange={props.onPasswordChange}
                        value={props.password}
                        id="newPassword"
                        placeholder="Enter your new password..."
                />
            </label>
            <label className="settings__password">
                <p className="settings__label">Confirm new password</p>
                <input className="settings__input"
                        type="password" 
                        onChange={props.onRepeatPasswordChange}
                        value={props.repeatPassword}
                        id="newRepeatPassword"
                        placeholder="Repeat your new password..."
                />
            </label>
            <div className="settings__error">
                <p className="settings__errorMessage"></p>
            </div>
        </form>
        <div style={{marginTop: "30px"}} className='settings__buttonsContainer'>
            <button className="settings__buttonModal" onClick={() => props.setModalPasswordVisible(!props.modalPasswordVisible)}>Cancel</button>
            <button type="submit" className="settings__buttonModal" onClick={() => console.log("clicked submit")}>Submit</button>
        </div>
        <div  onClick={() => props.setModalPasswordVisible(!props.modalPasswordVisible)} className="close">
            <CloseButton />
        </div>
    </div>
</div>
}

export default ModalPassword;
