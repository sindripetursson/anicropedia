function LoginView(props) {
    return(
        <div className="authentication">
            
            <img className="authentication__image" src="../../images/anicropediaLogo.svg"/>
            <form className="authentication__form">
                <h2 className="authentication__headline">Log in to your account</h2>
                <label className="authentication__email">
                    <p className="authentication__label">Email</p>
                    <input className="authentication__input"
                           type="email" 
                           onChange={props.onEmailChange}
                           value={props.email}
                           id="loginEmail"
                           placeholder="Enter your email..."
                    />
                </label>
                <label className="authentication__password">
                    <p className="authentication__label">Password</p>
                    <input className="authentication__input"
                           type="password" 
                           onChange={props.onPasswordChange}
                           value={props.password}
                           id="loginPassword"
                           placeholder="Enter your password..."
                    />
                </label>
                <div className="authentication__error">
                    <p className="authentication__errorMessage"></p>
                </div>
                <div className="authentication__submit">
                    <button type="submit" onClick={props.onLogin}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginView;