function SignupView(props) {
    return(
        <div className="authentication">
            <form className="authentication__form">
                <label className="authentication__name">
                    <p>Name:</p>
                    <input className="authentication__input"
                           type="text"
                           onChange={props.onNameChange}
                           value={props.name}
                           id="signupName"
                           placeholder="Enter your name..."
                    />
                </label>
                <label className="authentication__email">
                    <p>Email:</p>
                    <input className="authentication__input"
                           type="email" 
                           onChange={props.onEmailChange}
                           value={props.email}
                           id="signupEmail"
                           placeholder="Enter your email..."
                    />
                </label>
                <label className="authentication__password">
                    <p>Password:</p>
                    <input className="authentication__input"
                           type="password" 
                           onChange={props.onPasswordChange}
                           value={props.password}
                           id="signupPassword"
                           placeholder="Enter your password..."
                    />
                </label>
                <label className="authentication__password">
                    <p>Confirm password:</p>
                    <input className="authentication__input"
                           type="password" 
                           onChange={props.onRepeatPasswordChange}
                           value={props.repeatPassword}
                           id="signupRepeatPassword"
                           placeholder="Repeat your password..."
                    />
                </label>
                <label className="authentication__city">
                    <p>City:</p>
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