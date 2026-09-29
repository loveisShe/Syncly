function Signup({ onSwitchToLogin }){
    return(
        <div className="signup-form">

            <div className="auth-header">
                <p className="auth-eyebrow">GET STARTED</p>

                <h2>Create your SYNCly account</h2>

                <p>Start studying together and stay synced.</p>
            </div>

            <form className="auth-form" onClick={(e) => e.preventDefault()}>

                <div className="form-group">
                    <label htmlFor="signup-name">
                        Full Name
                    </label>
                    <input id="signup-name" type="text" placeholder="Your name"/>
                </div>

                <div className="form-group">
                    <label htmlFor="signup-email">
                        Email
                    </label>
                    <input id="signup-email" type="email" placeholder="you@example.com"/>
                </div>

                <div className="form-group">
                    <label htmlFor="signup-password">
                        Password
                    </label>
                    <input id="signup-password" type="password" placeholder="Create a password"/>
                </div>

                <div className="form-group">
                    <label htmlFor="signup-confirm-password">
                        Confirm Password
                    </label>
                    <input id="signup-confirm-password" type="password" placeholder="Confirm your password"/>
                </div>

                <button type="submit" className="auth-submit">Create Account</button>

            </form>

            <div className="auth-switch">
                <span>Already have an account?</span>

                <button type="button" onClick={onSwitchToLogin}>Login</button>
            </div>
        </div>
    );
}

export default Signup;