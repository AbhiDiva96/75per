import React, {useState} from 'react'
import Imgdata from '../imgdata.js';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
import Footer from '../../pages/footer.js';

function Fsttimetable() {

    const [selectedSection, setSelectedSection] = useState(null);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

  return (
    <div>
    <Header/>
    <div style={{height:"69vh"}} >
       
       
    
       <div className="trdyr">
      <center>
        <h3> 1st year time table</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec 1A')} className ="button-86 red" > Sec-1A</button>
        <button onClick={() => handleSectionClick('sec 1C')} className ="button-86" > Sec-1C</button>
        <button onClick={() => handleSectionClick('se 1D')}  className ="button-86 blue"> Sec-1D</button>
        <button onClick={() => handleSectionClick('sec 1E') } className ="button-86 pink"> Sec-1E </button>
        <button onClick={() => handleSectionClick('sec 1G') } className ="button-86 red"> Sec-1G </button>
       </div>

      {selectedSection && <Imgdata section={selectedSection}/>}
 
    </div>
     <Footer/>
     </div>
  )


}

export default Fsttimetable;
