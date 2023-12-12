import React from 'react';
import { NavLink } from 'react-router-dom'; 

const Navbar = () => {
    return (
        <>
    <h1 style={{ textAlign: 'center' }}>News App</h1>
        <nav style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <NavLink>
                Topics
            </NavLink>
            <NavLink to="/">
                News
            </NavLink>
        </nav>
        </>
    );
};

export default Navbar;
