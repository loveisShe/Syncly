import { useState } from "react";
import Hero from "../components/Hero";
import HeroNavBar from "../components/HeroNavBar"
import Auth from "../components/auth/Auth"

function Landing({ onNavigate }){
    const [authModal , setAuthModal] = useState(null);
    return(
        <div className="landing-page">
            <HeroNavBar 
                onOpenLogin={() => setAuthModal("login")}
                onOpensignUp={() => setAuthModal("signup")}/>

            <Hero onStart={() => onNavigate('dashboard')}/>

            {authModal && (
                <Auth
                    mode={authModal}
                    onClose={() => setAuthModal(null)}
                />
            )}
        </div>
    );
}

export default Landing;