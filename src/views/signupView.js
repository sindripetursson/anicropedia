function SignupView(props) {
    return(
        <div>
            <form>
                <label>
                    <p>Name:</p>
                    <input type="text"
                           onChange={props.onNameChange}
                           value={props.name}
                           id="name"
                           placeholder="Enter your name..."
                    />
                </label>
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
                    <button type="submit" onClick={props.onSignup}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default SignupView;