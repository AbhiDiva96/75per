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
        {/* notes */}
           {/* <div className="notes">
               <h6>Get your timeTable/Syllabus/Quantum/Note</h6>
            </div> */}
          {/* button */}
   {/* <div className="btn">

  <Link to="/syllabus" className='link' >  
      <button className='button-85'> Syllabus </button> </Link>
                <Link to="/quantum" className='link' >  <button className='button-85'> Quantum </button> </Link>
           </div> */}

           {/* Dark mode */}
            
{/*        
     <div className="swi">
        <label class="ui-switch">
             <input type="checkbox" 
               id = "themeToggle"
            //  checked = {isDarkMode}
            //  onChange={togglerDarkMode}
              />
               <div class="slider">
           <div class="circle"></div>
          </div>
       </label>
       </div> */}
       
      
  
             </div>
            </div>
            
   
    
  )
}

export default Header
