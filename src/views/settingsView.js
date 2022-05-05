function SettingsView(props){
    return(
        <div className="settings">  
            <div className="settings__container">
                <h2 className="settings__headline">Settings</h2>
                <label className="settings__name">
                    <p className="settings__label">Name</p>
                    <p className="settings__text">{props.userModel.getUserName()}</p>
                    <button className="settings__button" onClick={() => console.log("hey")}>Change user name</button>
                </label>
                <label className="settings__city">
                    <p className="settings__label">City</p>
                    <p className="settings__text">{props.userModel.getCityAddress()}</p>
                    <button className="settings__button" onClick={() => console.log("hey")}>Change location</button>
                </label>
                <label className="settings__password">
                    <p className="settings__label">Password</p>
                    <button style={{marginTop: "10px"}}className="settings__button" onClick={() => console.log("hey")}>Change password</button>
                </label>
                <label className="settings__delete">
                    <p className="settings__label">Clear my collection</p>
                    <button style={{marginTop: "10px", border: "#FF5757 2px solid", color: "#FF5757"}}className="settings__button" onClick={() => console.log("hey")}>Clear my collection</button>
                </label>
                <div className="settings__error">
                    <p className="settings__errorMessage"></p>
                </div>
                <div className="settings__submit">
                    <button onClick={() => console.log("hey")}>Update</button>
                </div>
            </div> 
    </div>
    );
}

export default SettingsView;