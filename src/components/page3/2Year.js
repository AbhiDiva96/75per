import React from 'react'
import {Link} from 'react-router-dom';
import '../page3/2Year.css'
import Header from '../../pages/header';


import quantumImage from '../../assets/5th.png';
import youtube from '../../assets/ytt.png'
import timetable from '../../assets/sec-3A.jpg';
import syllabus from '../../assets/syllabuswt.jpg';


function sndYear() {
  return (
    <div>
    <Header/>

    <div className="yr">
     <h2>2rd year</h2>
    </div>

    <div className="content">
      <div class="cards">
<Link to="/sndquantum">
  <div class="card red">
  <img src={quantumImage} alt="Quantum" />
      {/* <p class="tip"></p> */}
      <p class="second-text">Quantum</p>

  </div>
  </Link>

  <Link to='/sndlecture'>
  <div class="card blue">
  <img src={youtube} alt="" /> 
  <p class="second-text">Lecture</p>
  </div>
  </Link>

 <Link to='/syllabus'>
  <div class="card pink">
  <img src={syllabus} alt="" />
    <p class="second-text">Syllabus</p>
  </div> 
  </Link>

 <Link to="/pyq">
  <div class="card syan">
   <img src={timetable} alt="" />
    <p class="second-text">Timetable</p>
  </div>
  </Link>

 <Link to='/notes'>
  <div class="card green">
      {/* <p class="tip">Hover Me</p> */}
   <p class="second-text">PYQ</p>
  </div>
  </Link>

<Link to='/notes'>
  <div class="card yellow">
      <p class="tip"></p>
      <p class="second-text">Notes</p>
  </div>
  </Link>

</div>
</div>

{/* <Footer /> */}
  </div>
  )
}

export default sndYear
