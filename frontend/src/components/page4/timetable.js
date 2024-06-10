import React, {useState} from 'react'
import Imgdata from '../imgdata';
import '../page4/timetable.css';
import Header from "../../pages/header.js"
function Timetable() {

    const [selectedSection, setSelectedSection] = useState(null);
    const handleSectionClick = (section) => {
        setSelectedSection(section);
    };

  return (
    <div>
       
       <Header/>

       <div className="trdyr">
      <center>
        <h3> 3rd year timea table</h3>
        </center>
     </div>

       <div className='secbtn'>
        <button onClick={() => handleSectionClick('sec-3A')} className ="button-86" > Sec-3A</button>
        <button onClick={() => handleSectionClick('sec-3B')}  className ="button-86"> Sec-3B</button>
        <button onClick={() => handleSectionClick('sec-3C')} className ="button-86" > Sec-3C</button>
        <button onClick={() => handleSectionClick('sec-3D(IT)') } className ="button-86"> Sec-3D(IT)</button>
       </div>
    
      {/* apering section of timetable */}
      {selectedSection && <Imgdata section={selectedSection}/>}

    </div>
  )


}

export default Timetable
