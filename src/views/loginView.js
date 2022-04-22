function LoginView(props) {
    return(
        <div className="authentication">
            <form className="authentication__form">
                <label className="authentication__email">
                    <p>Email</p>
                    <input className="authentication__input"
                           type="email" 
                           onChange={props.onEmailChange}
                           value={props.email}
                           id="loginEmail"
                           placeholder="Enter your email..."
                    />
                </label>
                <label className="authentication__password">
                    <p>Password</p>
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