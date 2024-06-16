import React, { useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <Link to="/">
                        <img src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776;
                </div>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <Link to="/Review" className="link2">
                        Review Us
                    </Link>
                    <Link to="/Login" className="link2">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
