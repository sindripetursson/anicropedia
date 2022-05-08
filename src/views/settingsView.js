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
                    <ModalCity userModel={props.userModel} setModalCityVisible={props.setModalCityVisible} modalCityVisible={props.modalCityVisible} />
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
                    <ModalPassword userModel={props.userModel} setModalPasswordVisible={props.setModalPasswordVisible} modalPasswordVisible={props.modalPasswordVisible} />
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
                    <ModalClear userModel={props.userModel} setModalClearVisible={props.setModalClearVisible} modalClearVisible={props.modalClearVisible} />
                </Modal>
            </div>

            <div className="settings__container">
                <h2 className="settings__headline">Settings</h2>
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
    </div>
    );
}

export default SettingsView;