
import React, { useContext,useState } from 'react'
import './header.css';
import {Link} from "react-router-dom";
import { colors } from '@mui/material';
import { ThemeContext } from '../Content/context';
// import { useTheme } from '../index';

import {HiSun,HiMoon} from 'react-icons/hi2'

function Header() {
    let {theme,toggleTheme} =useContext(ThemeContext)
    function handleClick(e){
            if(theme=="dark"){
                toggleTheme('light')
            }else{
                toggleTheme('dark')
            }
    }
    //  const {isDarkMode, togglerDarkMode} =useTheme();
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
                    <Link to="/about" className="link2">
                        About us
                    </Link>
                </div>
            </div>
        </div>

        <div style={{ display: 'flex', gap: '20px',flexWrap:"wrap" }}>
            <a href="/Review" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>Review Us</b>
            </a>
            <a href="/Login" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 40 }}>
                <b>Login</b>
            </a>
            <a href="/about" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>About Us</b>
            </a>
         {

         theme=='dark'? <HiSun size={"3rem"} onClick={handleClick}/>:<HiMoon size={"3rem"} onClick={handleClick}/>
         }  
        </div>
    </div>
</div>

  )
}

export default Header;
