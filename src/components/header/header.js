import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav">
                    <li>
                        <Link to='/'>
                        Home
                         </Link>
                    </li>
                    <li>
                        <Link to='/actors'>
                        Actors
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
