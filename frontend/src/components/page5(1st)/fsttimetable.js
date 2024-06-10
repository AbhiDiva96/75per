import React, {useState} from 'react'
import Imgdata from '../imgdata';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
import ComingSoon from '../../pages/cs.js';

function  Fsttimetable() {

    const [selectedSection, setSelectedSection] = useState(null);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

  return (
    <div>
       
       <Header/>


        <ComingSoon />
       {/* <div className="trdyr"> */}

      {/* <center>
        <h3> 1st year timeatable</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec-1A')} className ="button-86" > Sec-1A</button>
        <button onClick={() => handleSectionClick('sec-1B')}  className ="button-86"> Sec-1B</button>
        <button onClick={() => handleSectionClick('sec-1C')} className ="button-86" > Sec-1C</button>
        <button onClick={() => handleSectionClick('sec-1D') } className ="button-86"> Sec-1D</button>
        <button onClick={() => handleSectionClick('sec-1E') } className ="button-86"> Sec-1E</button>
        <button onClick={() => handleSectionClick('sec-1F') } className ="button-86"> Sec-1F</button>

       </div>
    
      {/* apering section of timetable */}
      {/* {selectedSection && <Imgdata section={selectedSection}/>} */} 

    </div>
  )


}

export default Fsttimetable
