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
            <Link to="/">
                <img src="/logo.png" alt="logo" />
            </Link>
        </div>
        <div style={{ display: 'flex', gap: '20px', marginRight: '30px' }}>
            <a href="/Review" className="link2">
                Review Us
            </a>
            <a href="/Login" className="link2">
                Login
            </a>
        </div>
    </div>
</div>

  )
}

export default Header
