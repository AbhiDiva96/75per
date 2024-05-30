import React  from 'react'
import {Link} from  'react-router-dom';
import Header from '../../pages/header';
import ComingSoon from '../../pages/cs.js';

import '../page4/notes.css';
function notes() {
  return (
    <div >
          {/* <div class="wrapper">
  <h1>coming soon<span class="dot">.</span></h1>
  <p>Put some text here.</p>
<Link to="/">
<button>back to home page</button>
</Link>
 </div> */}

  <ComingSoon/>
    </div>
  )
}

export default notes
