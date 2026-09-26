function Dashboard(){
    return (
        <main className="main-content">
            <div className="page-header">
                <div>
                    <p className="eyebrow">
                        YOUR WORKSPACE
                    </p>

                    <h1>
                        Good evening , Shally.
                    </h1>

                    <p className="page-description">
                        Stay focused. Stay synced.
                    </p>
                </div>

            </div>

            <section className="dashboard-grid">
                <div className="card">
                    <p className="card-label">
                        ACTIVE STUDY ROOMS
                    </p>

                    <h2>
                        3
                    </h2>

                    <p className="card-description">
                        Rooms you're currently participating in.
                    </p>
                </div>

                <div className="card">
                    <p className="card-label">
                        TASKS TODAY
                    </p>

                    <h2>
                        8
                    </h2>

                    <p className="card-description">
                        Keep your momentum going.
                    </p>
                </div>

                <div className="card">
                    <p className="card-label">
                        STUDY STREAK
                    </p>

                    <h2>
                        12 DAYS
                    </h2>

                    <p className="card-description">
                        Consistency beats intensity.
                    </p>

                </div>

            </section>

        </main>
    );
}

export default Dashboard;