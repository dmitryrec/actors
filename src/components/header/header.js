import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav">
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/actors'>Актёры</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
