function LoginView(props) {
    return(
        <div>
            <form>
                <label>
                    <p>Email</p>
                    <input type="email" 
                           onChange={props.onEmailChange}
                           value={props.email}
                           id="email"
                           placeholder="Enter your email..."
                    />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" 
                           onChange={props.onPasswordChange}
                           value={props.password}
                           id="password"
                           placeholder="Enter your password..."
                    />
                </label>
                <div>
                    <button type="submit" onClick={props.onLogin}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default LoginView;