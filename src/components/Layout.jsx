import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

function Layout() {
    return <div>
                <header>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Movies</NavLink></li>
                    </ul>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
                <footer>Footer</footer>
            </div>;  
};

export default Layout;