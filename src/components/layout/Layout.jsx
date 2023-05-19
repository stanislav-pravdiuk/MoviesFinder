import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import css from './layout.module.css'

function Layout() {
    return <div>
                <header>
                    <ul>
                        <li className={css.header__btn}>
                    <NavLink exact activeClassName={css.active} to='/'>Home</NavLink>
                        </li>
                        <li className={css.header__btn}>
                            <NavLink exact activeClassName={css.active} to='/movies'>Movies</NavLink>
                        </li>
                    </ul>
                </header>
                <main>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
                <footer>
                    <h1>directed by Stanislav Pravdiyk ©</h1>
                </footer>
            </div>;  
};

export default Layout;