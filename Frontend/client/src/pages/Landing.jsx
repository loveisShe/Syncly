import Hero from "../components/Hero";
import HeroNavBar from "../components/HeroNavBar"

function Landing({ onNavigate }){
    return(
        <div className="landing-page">
            <HeroNavBar onNavigate={onNavigate}/>
            <Hero onStart={() => onNavigate('dashboard')}/>
        </div>
    );
}

export default Landing;