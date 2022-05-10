import { Modal } from 'react-native';
import ModalName from '../components/modalName';
import ModalCity from '../components/modalCity';
import ModalPassword from '../components/modalPassword';
import ModalClear from '../components/modalClear';

function SettingsView(props){

    return(
        <div className="settings">  
            {/* Modal view for name */}
            <div className="settings__modalContainer">
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={props.modalNameVisible}
                    onRequestClose={ () =>
                        props.setModalNameVisible(!props.modalNameVisible)
                    }
                >  
                    <ModalName userModel={props.userModel} 
                               setModalNameVisible={props.setModalNameVisible}
                               modalNameVisible={props.modalNameVisible} 
                               name={props.name}
                               onNameChange={props.onNameChange}
                               onNameSubmit={props.onNameSubmit}/>
                </Modal>
            </div>

            {/* Modal view for city */}
            <div className="settings__modalContainer">
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={props.modalCityVisible}
                    onRequestClose={ () =>
                        props.setModalCityVisible(!props.modalCityVisible)
                    }
                >  
                    <ModalCity userModel={props.userModel} 
                               setModalCityVisible={props.setModalCityVisible} 
                               modalCityVisible={props.modalCityVisible}
                               onCityChange={props.onCityChange}
                               onCitySubmit={props.onCitySubmit} />
                </Modal>
            </div>

            {/* Modal view for password */}
            <div className="settings__modalContainer">
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={props.modalPasswordVisible}
                    onRequestClose={ () =>
                        props.setModalPasswordVisible(!props.modalPasswordVisible)
                    }
                >  
                    <ModalPassword userModel={props.userModel} 
                                   setModalPasswordVisible={props.setModalPasswordVisible} 
                                   modalPasswordVisible={props.modalPasswordVisible} 
                                   oldPassword={props.oldPassword}
                                   onOldPasswordChange={props.onOldPasswordChange}
                                   newPassword={props.newPassword}
                                   onNewPasswordChange={props.onNewPasswordChange}
                                   repeatNewPassword={props.repeatNewPassword}
                                   onRepeatNewPasswordChange={props.onRepeatNewPasswordChange}
                                   onPasswordSubmit={props.onPasswordSubmit}/>
                </Modal>
            </div>

            {/* Modal view for clearing collection */}
            <div className="settings__modalContainer">
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={props.modalClearVisible}
                    onRequestClose={ () =>
                        props.setModalClearVisible(!props.modalClearVisible)
                    }
                >  
                    <ModalClear userModel={props.userModel} 
                                setModalClearVisible={props.setModalClearVisible} 
                                modalClearVisible={props.modalClearVisible} 
                                onClearDataSubmit={props.onClearDataSubmit}/>
                </Modal>
            </div>

            <div className="settings__container">
                <label className="settings__name">
                    <p className="settings__label">Name</p>
                    <p className="settings__text">{props.userModel.getUserName()}</p>
                    <button className="settings__button" onClick={() => props.setModalNameVisible(!props.modalNameVisible)}>Change user name</button>
                </label>
                <label className="settings__city">
                    <p className="settings__label">City</p>
                    <p className="settings__text">{props.userModel.getCityAddress()}</p>
                    <button className="settings__button" onClick={() => props.setModalCityVisible(!props.modalCityVisible)}>Change location</button>
                </label>
                <label className="settings__password">
                    <p className="settings__label">Password</p>
                    <button style={{marginTop: "10px"}}className="settings__button" onClick={() => props.setModalPasswordVisible(!props.modalPasswordVisible)}>Change password</button>
                </label>
                <label className="settings__delete">
                    <p className="settings__label">Clear my collection</p>
                    <button style={{marginTop: "10px", border: "#FF5757 2px solid", color: "#FF5757"}}className="settings__button" onClick={() => props.setModalClearVisible(!props.modalClearVisible)}>Clear my collection</button>
                </label>

            </div> 
            <div className={props.confirmationVisible ? "settings__confirmationPopup" : "none"} onClick={() => props.turnOffConfirmation()}>
                    <p className="settings__confirmationText">Changes have been saved!</p>
            </div>
            <div className={props.confirmationClearVisible ? "settings__confirmationClearPopup" : "none"} onClick={() => props.turnOffClearConfirmation()}>
                    <p className="settings__confirmationText">Your collection has been cleared!</p>
            </div>
        </div>
    );
}

export default SettingsView;