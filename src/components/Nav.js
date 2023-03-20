import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './nav.scss'

const Nav = () => {
    const location = useLocation()

    return (
        <nav>
            <ul style={{ display: "flex" }}>
                <li >
                    <Link to="/home" className={location.pathname === "/home" ? 'isActive' : ''}>Acceuil</Link>
                </li>
                <li>
                    <Link to="/about" className={location.pathname === "/about" ? 'isActive' : ''}>A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;