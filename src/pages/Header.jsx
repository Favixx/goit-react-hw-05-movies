import React from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const Header = () => {
    return (
        <>
            <header className='border border-red-400 border-b-1'>
                <ul className='flex gap-1 hover: text-red-400 text-lg mx-3 my-1'>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/movies">Movies</NavLink>
                    </li>
                </ul>
            </header>
            <Outlet />
        </>
    );
};
export default Header;