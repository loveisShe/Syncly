import Logo from "./Logo";


function HeroNavBar({ onOpenLogin , onOpensignUp }) {

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

        <button className="navbar-login" onClick={onOpenLogin}>
          Log in
        </button>

        <button className="navbar-signup" onClick={onOpensignUp}>
          Get Started
        </button>

      </div>

    </header>
  );
}


export default HeroNavBar;