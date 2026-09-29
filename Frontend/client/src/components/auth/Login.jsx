function Login({ onSwitchToSignUp }){
    return(
        <div className="login-form">
            
            <div className="auth-header">
                <p className="auth-eyebrow"> WELCOME BACK</p>
                <h2>Log in to SYNCly</h2>
                <p>
                    Continue where you left off.
                </p>
            </div>

            <form className="auth-form" onSubmit={(e) => e.preventDefault()}>

                <div className="form-group">
                    <label htmlFor="login-email">
                        Email
                    </label>
                    <input id="login-email" type="email" placeholder="you@example.com"/>
                </div>

                <div className="form-group">
                    <div className="password-label">
                        <label htmlFor="login-password">
                            Password
                        </label>

                        <button type="button" className="forgot-password">
                            Forgot Password?
                        </button>
                    </div>

                    <input id="login-password" type="password" placeholder="Enter your password"/>
                </div>

                <label className="remember-me">
                    <input type="checkbox"/>
                    <span>Remember me</span>
                </label>

                <button type="submit" className="auth-submit">
                    Log in
                </button>
            </form>

            <div className="auth-switch">
                <span>
                    Don't have a account?
                </span>

                <button type="button" onClick={onSwitchToSignUp}>
                    Sign Up
                </button>

            </div>

        </div>
    );
}

export default Login;