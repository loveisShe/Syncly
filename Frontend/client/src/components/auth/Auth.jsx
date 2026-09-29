import { useState } from "react";
import Login from "./Login";
import SignUp from "./SignUp";
import GoogleAuth from "./GoogleAuth";

function Auth({ mode = "login", onClose }) {
    const [authMode, setAuthMode] = useState(mode);

    return (
        <div className="auth-overlay" onClick={onClose}>
            <div className="auth-modal" onClick={(event) => event.stopPropagation()}>

                <button className="auth-close" onClick={onClose}>×</button>

                {authMode === "login" ? (
                    <Login onSwitchToSignUp={() => setAuthMode("signup")} />
                ) : (
                    <SignUp onSwitchToLogin={() => setAuthMode("login")} />
                )}

                <div className="auth-divider">
                    <span>OR</span>
                </div>
                
                <GoogleAuth />
            </div>
        </div>
    );
}

export default Auth;