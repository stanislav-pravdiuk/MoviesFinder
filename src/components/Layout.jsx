import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';

export const Layout = () => {
    return <div>
                <header>
                    <ul>
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/movies'>Movies</NavLink></li>
                        {/* <li><NavLink to='/movies/:movieId'>MovieDetails</NavLink></li> */}
                        {/* <li><NavLink to='/movies/:movieId/cast'>Cast</NavLink></li>
                        <li><NavLink to='/movies/:movieId/reviews'>Reviews</NavLink></li> */}
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
