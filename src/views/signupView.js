import CitySearch from "../presenters/liveCitySearchPresenter";
import { Link } from "react-router-dom";

function SignupView(props) {
    return(
        <div className="authentication">
            <img className="authentication__image" alt="anicropediaLogo" src="../../images/anicropediaLogo.svg"/>
            <form className="authentication__form">
                <h2 className="authentication__headline">Sign up to Anicropedia</h2>
                <label className="authentication__name">
                    <p className="authentication__label">Name</p>
                    <input className="authentication__input"
                           type="text"
                           onChange={props.onNameChange}
                           value={props.name}
                           id="signupName"
                           placeholder="Enter your name..."
                    />
                </label>
                <label className="authentication__email">
                    <p className="authentication__label">Email</p>
                    <input className="authentication__input"
                           type="email" 
                           onChange={props.onEmailChange}
                           value={props.email}
                           id="signupEmail"
                           placeholder="Enter your email..."
                    />
                </label>
                <label className="authentication__password">
                    <p className="authentication__label">Password</p>
                    <input className="authentication__input"
                           type="password" 
                           onChange={props.onPasswordChange}
                           value={props.password}
                           id="signupPassword"
                           placeholder="Enter your password..."
                    />
                </label>
                <label className="authentication__password">
                    <p className="authentication__label">Confirm password</p>
                    <input className="authentication__input"
                           type="password" 
                           onChange={props.onRepeatPasswordChange}
                           value={props.repeatPassword}
                           id="signupRepeatPassword"
                           placeholder="Repeat your password..."
                    />
                </label>
                <label className="authentication__city">
                    <p className="authentication__label">City</p>
                    <CitySearch onCityChange={props.onCityChange}/>
                </label>
                <div></div>
                <div className="authentication__error">
                    <p className="authentication__errorMessage"></p>
                </div>
                <div className="authentication__submit">
                    <button type="submit" onClick={props.onSignup}>Submit</button>
                </div>
                <Link className="authentication__bottomLink" to="/login">
                    <p style={{marginTop: "30px"}}> Already have an account? Log in here! </p>
                </Link>  
            </form>
            <div className={props.userCreationPopup ? "settings__confirmationPopup" : "hidden"} onClick={() => props.turnOffConfirmation()}>
                    <p className="settings__confirmationText">User successfully created! Redirecting to the home page...</p>
            </div>
        </div>
    );
}

export default SignupView;