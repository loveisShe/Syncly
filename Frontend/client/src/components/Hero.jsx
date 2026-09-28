function Hero({ onStart }) {

    return (
        <section className="hero-section">

            {/* ==============================
                        LIVE STATUS
            ============================== */}

            <div className="hero-badge">
                <span className="pulse-dot"></span>

                <span>
                    Live study sessions active
                </span>
            </div>


            {/* ==============================
                        MAIN HEADING
            ============================== */}

            <h1 className="hero-title">

                Study together.
                <br />

                Stay <span>synced.</span>

            </h1>


            {/* ==============================
                        DESCRIPTION
            ============================== */}

            <p className="hero-description">

                A focused space for students to study together,
                stay accountable, and actually get things done.

            </p>


            {/* ==============================
                        BUTTONS
            ============================== */}

            <div className="hero-actions">

                <button className="btn-primary" onClick={onStart}>

                    <span>+</span>

                    Create Study Room

                </button>


                <button className="btn-secondary" onClick={onStart}>

                    <span>⌁</span>

                    Join with Code

                </button>

            </div>


            {/* ==============================
                    PRODUCT PREVIEW
            ============================== */}

            <div className="hero-preview">

                <div className="preview-header">

                    <div>

                        <span className="preview-status"></span>

                        <span>
                            LIVE STUDY ROOM
                        </span>

                    </div>

                    <span className="preview-code">
                        # A7K2
                    </span>

                </div>


                <div className="preview-body">

                    <p className="preview-label">
                        FOCUS SESSION
                    </p>

                    <h2>
                        Deep Work
                    </h2>

                    <div className="preview-timer">
                        01:42:18
                    </div>

                    <div className="preview-users">

                        <div className="preview-avatar">
                            S
                        </div>

                        <div className="preview-avatar">
                            A
                        </div>

                        <div className="preview-avatar">
                            R
                        </div>

                        <span>
                            3 people studying
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;