import React from 'react'
import './header.css';
import {Link} from "react-router-dom";
import { colors } from '@mui/material';
// import { useTheme } from '../index';



function Header() {

    //  const {isDarkMode, togglerDarkMode} =useTheme();

  return (

      
      <div className="frame">
        {/* logo */}
           <div className="header">
               <div className="logo">
                <b><Link to ="/" className='link1'><img src="/logo.png" alt="logo" /></Link></b>
                
               </div>
               <a href="/Login" className='logo link1' style={{padding: 10, margin: 5,height: 30, width: 40,positionTop: 15}}><b>login</b></a>

      
  
             </div>
            </div>
            
   
    
  )
}

export default Header
