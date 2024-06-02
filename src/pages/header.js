import React, { useEffect, useState } from 'react';
import './header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('auth-token');
    const storedUsername = localStorage.getItem('username');
    if (token && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('auth-token');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    window.location.replace("/login");
  };

  return (
    <div className="frame">
      <div className="header">
        <div className="logo">
          <b><Link to="/" className='link1'>75%.com</Link></b>
        </div>
        {isLoggedIn ? (
          <>
            <span className='username'>Welcome {username}</span>
            <button onClick={handleLogout} className='logo link1' style={{ marginTop: "5px" }}><b>Logout</b></button>
          </>
        ) : (
          <a href="/login" className='logo link1' style={{ marginTop: "5px" }}><b>Login</b></a>
        )}
      </div>
    </div>
  );
}

export default Header;
