import CitySearch from "../presenters/liveCitySearchPresenter";

function SignupView(props) {
    return(
        <div className="authentication">
            <img className="authentication__image" src="../../images/anicropediaLogo.svg"/>
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
                    <select className="authentication__citySelection"
                           type="password" 
                           onChange={props.onCityChange}
                           id="signupCity">
                        <option>Stockholm, Sweden</option>
                        <option>Reykjavík, Iceland</option>
                        <option>Tokyo, Japan</option>
                        <option>London, England</option>
                        <option>New York, United States</option>
                    </select>
                </label>
                <CitySearch/>
                <div></div>
                <div className="authentication__error">
                    <p className="authentication__errorMessage"></p>
                </div>
                <div className="authentication__submit">
                    <button type="submit" onClick={props.onSignup}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignupView;