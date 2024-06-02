import React from 'react'
import '../page1/Home.css';
import {Link} from 'react-router-dom';
function Home() {
  return (
    <div>
        <div className="title">
         <h2>Visit your year</h2>
        </div>

      <div class="container">

      <div class="main">
  <div class="up">

  <Link to='/fstyear'>
    <button class="card1">
      <h3>1st</h3>
    </button>
    </Link>

    <Link to="/sndyear">
    <button class="card2">
      <h3>2nd</h3>
     </button>
     </Link>
    
  </div>
 

  <div class="down">
    <Link to="/trdyear">
    <button class="card3">
      <h3>3rd</h3>
     </button>
     </Link>

<Link to='/fothyear'>
    <button class="card4">
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
