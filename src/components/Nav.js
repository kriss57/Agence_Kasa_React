import React from 'react';
import { Link } from 'react-router-dom';

import './nav.scss'

const Nav = () => {
    return (
        <nav>
            <ul style={{ display: "flex" }}>
                <li style={{ padding: "20px", listStyleType: "none" }}>
                    <Link to="/home">Acceuil</Link>
                </li>
                <li style={{ padding: "20px", listStyleType: "none" }}>
                    <Link to="/about" >A Propos</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;