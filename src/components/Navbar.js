import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Koti</Link></li>
                <li><Link to="/about">Tietoa</Link></li>
                <li><Link to="/skills">Taidot</Link></li>
                <li><Link to="/projects">Projektit</Link></li>
                <li><Link to="/experience">Työkokemus</Link></li>
                <li><Link to="/contact">Yhteystiedot</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
