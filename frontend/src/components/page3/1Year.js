import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../../pages/header';
import '../page3/1Year.css';
import quantumImage from '../../assets/icons8-book-64.png';
import timetable from '../../assets/icons8-timetable-64.png';
import syllabus from '../../assets/icons8-syllabus-80 (1).png';
import pyq from "../../assets/icons8-minus-1-year-80.png"
import Notes from "../../assets/icons8-notes-80.png"
import youtube from "../../assets/icons8-youtube-64.png";
function fstYear() {
  return (
<div>

<Header/>
  <div class="background">
  <div className="yr">
   <h1>1st Year</h1>
  </div>

  <div className="content" style={{height:"auto"}}>
    <div class="cards">
<Link class="link" to="/fstquantum">
<div class="card red">
<img src={quantumImage} alt="Quantum" />
    {/* <p class="tip"></p> */}
    <p class="second-text">Quantum</p>

</div>
</Link>

<Link class="link" to='/fstlecture'>
<div class="card blue">
<img src={youtube} alt="" />
<p class="second-text">Lecture</p>
</div>
</Link>

<Link class="link" to='/fstsyllabus'>
<div class="card pink">
<img src={syllabus} alt="" />
  <p class="second-text">Syllabus</p>
</div> 
</Link>

<Link class="link" to="/fsttimetable">
<div class="card syan">
 <img src={timetable} alt="" />
  <p class="second-text">Timetable</p>
</div>
</Link>

<Link class="link" to=''>
<div class="card green">
<img src={pyq} alt=''/>
 <p class="second-text">PYQ</p>
</div>
</Link>

<Link class="link"  to='/notes'>
<div class="card yellow">
<img src={Notes} alt=''/>
    <p class="second-text">Notes</p>
</div>
</Link>

</div>
</div>

</div>
</div>
  )
}

export default fstYear
