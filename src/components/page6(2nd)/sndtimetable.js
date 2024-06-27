import React, {useState} from 'react'
import Imgdata from '../imgdata';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';
function SndTimetable() {

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
        <h3> 2nd year time table</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec 2A')} className ="button-86 red" > Sec-2A</button>
        <button onClick={() => handleSectionClick('sec 2B')}  className ="button-86 blue"> Sec-2B</button>
        <button onClick={() => handleSectionClick('Sec 2C')} className ="button-86" > Sec-2C</button>
        <button onClick={() => handleSectionClick('sec 2D') } className ="button-86 pink"> Sec-2D</button>
       </div>
   
      {/* apering section of timetable */}
      {selectedSection && <Imgdata section={selectedSection}/>}
 
    </div>
     <Footer/> <MyChatbot/>
     </div>
  )


}

export default SndTimetable
