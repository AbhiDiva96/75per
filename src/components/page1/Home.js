import React, { useContext, useEffect, useState } from 'react'
import '../page1/Home.css';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../../Content/context';

function Home() {
  let {theme,toggleTheme} =useContext(ThemeContext)

  const [value, setValue] = useState(() => {
    return localStorage.getItem('mode');
  });
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === 'mode') {
        setValue(event.newValue);
      }
      console.log('mode')
    };

    window.addEventListener('storage', ()=>console.log('dfdfdf'));

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  });

  return (
    <div>
        <div className="title">
         <h2>Visit your year</h2>
        </div>

      <div class={` container`}>

      <div class="main">
  <div class="up">

  <Link to='/fstyear'>
    <button class={`card1`}>
      <h3>1st</h3>
    </button>
    </Link>

    <Link to="/sndyear">
    <button class={`${theme=="light"?"":"dark-mode-card"} card2`}>
      <h3>2nd</h3>
     </button>
     </Link>
    
  </div>
 

  <div class="down">
    <Link to="/trdyear">
    <button class={`${theme=="light"?"":"dark-mode-card"} card3`}>
      <h3>3rd</h3>
     </button>
     </Link>

<Link to='/fothyear'>
    <button class={`${theme=="light"?"":"dark-mode-card"} card4`}>
      <h3>4th</h3>
    </button>
    </Link>

  </div>
</div>


     </div>
    </div>
  )
}

export default Home
