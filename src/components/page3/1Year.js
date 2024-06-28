import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../../pages/header';
import Footer from '../../pages/footer';
import '../page3/1Year.css';
import quantumImage from '../../assets/icons8-book-64.png';
import timetable from '../../assets/icons8-timetable-64.png';
import syllabus from '../../assets/icons8-syllabus-80 (1).png';
import pyq from "../../assets/icons8-minus-1-year-80.png"
import Notes from "../../assets/icons8-notes-80.png"
import youtube from "../../assets/icons8-youtube-64.png";
import MyChatbot from '../ChatBot/chatbot';
function fstYear() {
  return (
    <div>
<Link to="/" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="42" 
    height="42" 
    fill="currentColor" 
    viewBox="0 0 16 16" 
    style={{ 
      fontWeight: 'bold',
      position: 'fixed', 
      top: 139, 
      left: 20
    }}
  >
    <path 
      fillRule="evenodd" 
      d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
    />
  </svg>
</Link>

<Header/>
  <div class="background">
  <div className="yr">
   <h1>1st Year</h1>
  </div>


        <div className="content" style={{ height: "auto" }}>
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

            <Link class="link" to='/pyq/1st'>
              <div class="card green">
                <img src={pyq} alt='' />
                <p class="second-text">PYQ</p>
              </div>
            </Link>

            <Link class="link" to='/notes'>
              <div class="card yellow">
                <img src={Notes} alt='' />
                <p class="second-text">Notes</p>
              </div>
            </Link>

          </div>
        </div>

      </div>
      <Footer />
      <MyChatbot />

    </div>
  )
}

export default fstYear
