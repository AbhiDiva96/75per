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
                <b><Link to ="/" className='link1'> 75%.com</Link></b>
                
               </div>
               <a href="/Login" className='logo link1' style={{marginTop:"5px"}}><b>login</b></a>

      
  
             </div>
            </div>
            
   
    
  )
}

export default Header
