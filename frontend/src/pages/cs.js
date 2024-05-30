 import React from 'react'
 import {Link} from 'react-router-dom';
 import '../pages/cs.css';


 function cs() {
   return (

    <div className="nts">
          <div class="wrapper">
  <h1>coming soon<span class="dot">.</span></h1>
  {/* <p>Website is under construction</p> */}
 <h4>Website is under consturction...</h4>
<Link to="/">
<button>Back to home-page</button>
</Link>
 </div>

 
    </div>
     
   )
 }
 
 export default cs
 