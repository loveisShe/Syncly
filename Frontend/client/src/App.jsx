import { useState } from 'react';

import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import Landing from './pages/Landing';

function App(){
    const [currentPage , setCurrentPage] = useState('landing');
    const [sidebarOpen , setSidebarOpen] = useState(false);

    if(currentPage === 'landing'){
        return <Landing onNavigate={setCurrentPage}/>
    }
    return (
        <div className='app'>
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
                onBackToLanding={() => setCurrentPage('landing')}
            />

            <button
                className='mobile-menu'
                onClick={() => setSidebarOpen(true)}
            >
                ☰
            </button>

            <Dashboard/>
        </div>
    );
}

export default App;