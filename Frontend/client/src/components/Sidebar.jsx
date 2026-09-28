import NavItem from'./NavItem'
import UserProfile from './UserProfile'

function Sidebar({ isOpen , setIsOpen  , onBackToLanding }){
    return(
        <aside className={`sidebar ${isOpen ? 'open' : ""}`}>

            {/* ==============================
                        LOGO
            ============================== */}

            <div className='sidebar-logo' onClick={onBackToLanding} style={{cursor: 'pointer'}}>
                <h1>
                    SYNC<span>ly</span>
                </h1>

                <p>
                    STUDY TOGETHER
                </p>
            </div>

            {/* ==============================
                       NAVBAR
            ============================== */}

            <nav className='sidebar-nav'>
                <NavItem active={true} label="Dashboard" icon="⌂" />
                <NavItem label="Study Rooms" icon="◉" />
                <NavItem label="Tasks" icon="✓" />
                <NavItem label="Calendar" icon="▣" />
                <NavItem label="Analytics" icon="◌" />

            </nav>

            {/* ==============================
                       USER
            ============================== */}

            <UserProfile>

            </UserProfile>
            {/* ==============================
                       MOBILE 
                    CLOSE BUTTON
            ============================== */}

            <button
                className='mobile-close'
                onClick={() => setIsOpen(false)}
            >
                ×
            </button>
        </aside>
    );
}

export default Sidebar;
