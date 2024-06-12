import React, { useEffect, useState } from 'react'
import './header.css';
import { Link } from "react-router-dom";
import { colors } from '@mui/material';
// import { useTheme } from '../index';
import { FiSun, FiMoon } from 'react-icons/fi'; // Import icons from react-icons


function Header() {
  const themeKey = 'theme';
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and default themes
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-theme');
    const isDarkMode = body.classList.contains('dark-theme');
    setIsDarkMode(isDarkMode);
    localStorage.setItem(themeKey, isDarkMode ? 'dark' : 'default');
  };

  // Check and set the theme from local storage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme === 'dark') {
      const body = document.body;
      body.classList.add('dark-theme');
      setIsDarkMode(true);
    }
  }, []);


  //  const {isDarkMode, togglerDarkMode} =useTheme();

  return (


    <div className="frame">
      {/* logo */}
      <div className="header">
        <div className="logo">
          <b><Link to="/" className='link1'><img src="/logo.png" alt="logo" /></Link></b>

        </div>
        <a href="/Login" className='logo link1' style={{ padding: 10, margin: 5, height: 30, width: 40, positionTop: 15 }}><b>login</b></a>


        {/* Theme Toggler Button */}
        <button className="theme-toggler" onClick={toggleTheme}>
          {isDarkMode ? <FiSun /> : <FiMoon />} {/* Use icons based on theme */}
          <span className="toggle-text">{isDarkMode ? '' : ''}</span> {/* Text based on theme */}
        </button>
      </div>
    </div>



  )
}

export default Header
