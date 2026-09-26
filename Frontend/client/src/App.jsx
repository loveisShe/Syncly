import { useState } from 'react';

import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

function App(){
    const [sidebarOpen , setSidebarOpen] = useState(false);

    return (
        <div className='app'>
            <Sidebar
                isOpen={sidebarOpen}
                setIsOpen={setSidebarOpen}
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