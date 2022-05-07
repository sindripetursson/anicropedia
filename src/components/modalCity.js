import CloseButton from "./close_button";
import CitySearch from "../presenters/liveCitySearchPresenter";

function ModalCity(props){
    return <div className="settings__modalContainer" onClick={() => props.setModalCityVisible(!props.modalCityVisible)}>
    <div className="settings__modal" onClick={(event) => event.stopPropagation()}>
        <label className="settings__name">
            <p style={{marginTop: "30px"}} className="settings__label">Current city</p>
            <p className="settings__text">{props.userModel.getCityAddress()}</p>
        </label>
        <label className="settings__name">
            <p style={{marginTop: "30px"}} className="settings__label">New city</p>
            <CitySearch onCityChange={props.onCityChange}/>
        </label>
        <div style={{marginTop: "30px"}} className='settings__buttonsContainer'>
            <button className="settings__buttonModal" onClick={() => props.setModalCityVisible(!props.modalCityVisible)}>Cancel</button>
            <button className="settings__buttonModal" onClick={() => console.log("clicked submit")}>Submit</button>
        </div>
        <div className="settings__error">
            <p className="settings__errorMessage"></p>
        </div>
        <div  onClick={() => props.setModalCityVisible(!props.modalCityVisible)} className="close">
            <CloseButton />
        </div>
    </div>
</div>
}

export default ModalCity;
