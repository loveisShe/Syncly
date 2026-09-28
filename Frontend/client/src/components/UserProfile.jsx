function UserProfile(){
    return(
        <div className="sidebar-user">
            <div className="user-avatar">
                S
            </div>

            <div className="user-info">
                <p className="user-name">
                    Shally
                </p>
                <p className="user-status">
                    Online
                </p>
            </div>
            <button className="logout-button" title="Logout">
                ↪
            </button>
        </div>
    );
}

export default UserProfile;