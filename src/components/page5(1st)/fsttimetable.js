import React, {useState} from 'react'
import Imgdata from '../imgdata';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
import ComingSoon from '../../pages/cs.js';
import {Link} from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';
function FstTimetable() {

    const [selectedSection, setSelectedSection] = useState(null);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

  return (
    <div>

      <Link to="/fstyear" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="42" 
          height="42" 
          // fill="currentColor" when page is developed uncomment this line.
          fill="white" //comment this when page is developed
          viewBox="0 0 16 16" 
          style={{ 
            fontWeight: 'bold',
            position: 'fixed', 
            top: 130, 
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
    <div style={{height:"69vh"}} >    
       <div className="trdyr">
      <center>
        <h3> 1st year time table</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec 1A')} className ="button-86 red" > Sec-1A</button>
        <button onClick={() => handleSectionClick('sec 1C')}  className ="button-86 blue"> Sec-1C</button>
        <button onClick={() => handleSectionClick('sec 1D')} className ="button-86" > Sec-1D</button>
        <button onClick={() => handleSectionClick('sec 1E') } className ="button-86 pink"> Sec-1E</button>
        <button onClick={() => handleSectionClick('sec 1G') } className ="button-86 red"> Sec-1G</button>
       </div>
   
      {/* apering section of timetable */}
      {selectedSection && <Imgdata section={selectedSection}/>}
 
    </div>
     <Footer/> <MyChatbot/>
     </div>
  )


}

export default FstTimetable
