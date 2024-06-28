import React from 'react'
import {Link} from 'react-router-dom';
import '../page3/2Year.css'
import Header from '../../pages/header';
import syllabus from '../../assets/icons8-syllabus-80 (1).png';
import pyq from "../../assets/icons8-minus-1-year-80.png"
import Notes from "../../assets/icons8-notes-80.png"
import youtube from "../../assets/icons8-youtube-64.png";
import Footer from '../../pages/footer.js';
import quantumImage from '../../assets/icons8-book-64.png';
import timetable from '../../assets/icons8-timetable-64.png';
import MyChatbot from '../ChatBot/chatbot.jsx';
function fothYear() {
  return (
    <div>
    <Header/>
<div className='background'>
    <div className="yr">
     <h1>4th Year</h1>
    </div>

    <div class="content" style={{height:"auto"}}>
      <div class="cards">
<Link class="link" to="/notes">
  <div class="card red">
   <img src={quantumImage} alt="" />
      {/* <p class="tip"></p> */}
      <p class="second-text">Quantum</p>

  </div>
  </Link>

  <Link class="link"  to='/notes'>
  <div class="card blue">
  <img src={youtube} alt="" />
  <p class="second-text">Lecture</p>
  </div>
  </Link>

 <Link class="link" to='/frthsyllabus'>
  <div class="card pink">
  <img src={syllabus} alt="" />
    <p class="second-text">Syllabus</p>
  </div> 
  </Link>

 <Link class="link"  to="/notes">
  <div class="card syan">
   <img src={timetable} alt="" />
    <p class="second-text">Timetable</p>
  </div>
  </Link>

 <Link class="link" to='/notes'>
  <div class="card green">
    <img src={pyq} alt=''/>
   <p   class="second-text">PYQ</p>
  </div>
  </Link>

<Link  class="link"  to='/notes'>
  <div class="card yellow">
  <img src={Notes} alt=''/>

      <p class="second-text">Notes</p>
  </div>
  </Link>

</div>
</div>
</div>
<Footer /> <MyChatbot />
  </div>
  )
}



export default fothYear;
