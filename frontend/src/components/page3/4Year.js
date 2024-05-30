import React from 'react'
import {Link} from 'react-router-dom';
import Header from '../../pages/header';
import '../page3/1Year.css';


import quantumImage from '../../assets/5th.png';
import youtube from '../../assets/ytt.png'
import timetable from '../../assets/sec-3A.jpg';
import syllabus from '../../assets/syllabuswt.jpg';

import ComingSoon from '../../pages/cs.js'


function fothYear() {

 
    return (
  <div>

  <Header/>
    
    <div className="yr">
    <h2>4th year</h2>
    </div>

    <div className="content">
      <div className="cards">
  


  <Link to='/frthsyllabus'>
  <div className="card pink">
  <img src={syllabus} alt="" />
    <p className="second-text">Syllabus</p>
  </div> 
  </Link>

  

  

  

  </div>
  </div>

  </div>

    )
  }





export default fothYear;
