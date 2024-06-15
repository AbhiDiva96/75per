import React from 'react'
import './header.css';
import {Link} from "react-router-dom";
import { colors } from '@mui/material';
// import { useTheme } from '../index';



function Header() {

    //  const {isDarkMode, togglerDarkMode} =useTheme();

  return (      
    <div className="frame">
    <div className="header">
        <div className="logo">
            <Link to="/" className="link1">
                <img src="/logo.png" alt="logo" />
            </Link>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
            <a href="/Review" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>Review Us</b>
            </a>
            <a href="/Login" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 40 }}>
                <b>Login</b>
            </a>
            <a href="/about" className="logo link1" style={{ padding: 10, margin: 5, height: 30, width: 80 }}>
                <b>About Us</b>
            </a>
        </div>
    </div>
</div>

  )
}

export default Header
