function NavItem({ icon , label , active = false }){
    return (
        <a 
            href="#"
            className={`nav-link ${active ? 'active' : ''}`}
        >
            <span className="nav-icon">
                {icon}
            </span>  
            <span>
                {label}
            </span>
        </a>
    );
}

export default NavItem;