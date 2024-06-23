import React, { useContext, useState } from 'react';
import './header.css';
import { Link } from "react-router-dom";
import { ThemeContext } from '../Content/context';
import { HiSun, HiMoon } from 'react-icons/hi2';
import { FiMenu, FiX } from 'react-icons/fi';

function Header() {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleThemeToggle() {
        toggleTheme(theme === 'dark' ? 'light' : 'dark');
    }

    function handleMenuToggle() {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <div className="frame">
            <div className="header">
                <div className="logo">
                    <Link to="/" className="link1">
                        <img src="/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className={`nav-links ${isMenuOpen ? 'open' : ''} ${theme === 'dark' ? 'dark-mode' : ''}`}>
                    <a href="/Review" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                        <b>Review Us</b>
                    </a>
                    <a href="/Login" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 40 }}>
                        <b>Login</b>
                    </a>
                    <a href="/about" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                        <b>About Us</b>
                    </a>
                    {theme === 'dark' ? <HiSun size={"3rem"} onClick={handleThemeToggle} /> : <HiMoon size={"3rem"} onClick={handleThemeToggle} />}
                </div>
                <div className="hamburger" onClick={handleMenuToggle}>
                    {isMenuOpen ? <FiX size={"3rem"} /> : <FiMenu size={"3rem"} />}
                </div>
            </div>
        </div>
    );
}

export default Header;
