import React, { useContext } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './footer.css';
import { ThemeContext } from '../Content/context';

function Footer() {
    const { theme } = useContext(ThemeContext);

    return (
        <footer className={`footer ${theme === 'dark' ? 'dark-mode' : ''}`}>
            <div className="social-icons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
            </div>
            <div className="links">
                <a href="/Review" className="link">Review Us</a>
                <a href="/Login" className="link">Login</a>
                <a href="/about" className="link">About Us</a>
            </div>
            <p className="text">&copy; {new Date().getFullYear()} 75per. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
