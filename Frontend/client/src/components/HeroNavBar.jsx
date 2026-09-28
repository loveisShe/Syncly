import Logo from "./Logo";


function HeroNavBar({ onNavigate }) {

  return (
    <header className="navbar">

      <Logo className="navbar-logo" />


      <nav className="navbar-links">

        <a href="#About">
          About
        </a>

        <a href="#Features">
          Features
        </a>

        <a href="#HowItWorks">
          How it Works
        </a>

        <a href="#Contact">
          Contact Us
        </a>

      </nav>


      <div className="navbar-actions">

        <button className="navbar-login" onClick={() => onNavigate('dashboard')}>
          Log in
        </button>

        <button className="navbar-signup" onClick={() => onNavigate('dashboard')}>
          Get Started
        </button>

      </div>

    </header>
  );
}


export default HeroNavBar;