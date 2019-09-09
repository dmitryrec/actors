import React from 'react';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul className="nav">
                    <li><a href='/'>Главная</a></li>
                    <li><a href='/actors'>Актёры</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
