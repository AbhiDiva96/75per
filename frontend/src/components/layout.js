import React, { useState } from 'react';
import './App.css';
import { getByDisplayValue } from '@testing-library/react';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import header from '../pages/header';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const timetableData = {
  secA: [
    { day: 'Monday', 
    lecture01 : 'WT(SM)' , 
    lecture02 : 'CN(KD)' , 
    lecture03 : 'SE(NR)' , 
    lecture04 : 'BD(SKS)' , 
    lecture05 : 'PDP(DMT)' ,
      lunch: 'L', 
      lecture06 : 'ITCS(MVS)' , 
      lecture07 : 'OOPS(JP)' ,
       lecture08 : 'OOPS(JP)'},

    { day: 'Tuesday',
     lecture01 : 'WT(SM)' ,
      lecture02 : 'SE(NR)' ,
       lecture03 : 'CN(KD)' ,
        lecture04 : 'SE B1-LAB4(NR) && JAVA B2-LAB-3' , 
        lecture05: 'SE B1-LAB4(NR) && JAVA B2-LAB-3' ,
         lunch: 'U',  
         lecture06 : 'JAVA TRAINING' , 
         lecture07 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)' ,
          lecture08 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)'},

    { day: 'Wednesday', 
    lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' ,
      lecture03 : 'WT(SM)' , 
      lecture04 : 'BD(SKS)' ,
        lecture05 : 'OOPS(JP)' ,
         lunch: 'N',
          lecture06 : 'PDP(DMT)' , 
          lecture07 : 'NR(SK)' , 
          lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'Thursday',
     lecture01 : 'WT(SM)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'OOPS(JP)' ,
      lecture04 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' ,  
       lecture05 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' , 
       lunch: 'C',
        lecture06 : 'SE(NR)' ,
         lecture07 : 'BD(SKS)' , 
         lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'FrclassNameay',
     lecture01 : 'NR(SK)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'SE(NR)' ,
      lecture04 : 'WT(SM)' ,
         lecture05 : 'JAVA TRAINING(SD)' ,
          lunch: 'H', 
          lecture06 : 'BD(SKS)' , 
          lecture07 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)' , 
          lecture08 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)'},
    { day: 'Saturday',
     lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' , 
     lecture03 : 'BD(SKS)' ,
      lecture04 : 'OOPS(JP)' , 
     lecture05 : 'WT(SM)' ,
    lecture06 : 'ITCS(MVS)' ,
    lecture07 : 'ITCS(MVS)' , 
    lecture08 : 'OOPS(JP'},

    // Add more entries for secA
  ],
  secB: [
    { day: 'Monday', 
    lecture01 : 'WT(SM)' , 
    lecture02 : 'CN(KD)' , 
    lecture03 : 'SE(NR)' , 
    lecture04 : 'BD(SKS)' , 
    lecture05 : 'PDP(DMT)' ,
      lunch: 'L', 
      lecture06 : 'ITCS(MVS)' , 
      lecture07 : 'OOPS(JP)' ,
       lecture08 : 'OOPS(JP)'},

    { day: 'Tuesday',
     lecture01 : 'WT(SM)' ,
      lecture02 : 'SE(NR)' ,
       lecture03 : 'CN(KD)' ,
        lecture04 : 'SE B1-LAB4(NR) && JAVA B2-LAB-3' , 
        lecture05: 'SE B1-LAB4(NR) && JAVA B2-LAB-3' ,
         lunch: 'U',  
         lecture06 : 'JAVA TRAINING' , 
         lecture07 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)' ,
          lecture08 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)'},

    { day: 'Wednesday', 
    lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' ,
      lecture03 : 'WT(SM)' , 
      lecture04 : 'BD(SKS)' ,
        lecture05 : 'OOPS(JP)' ,
         lunch: 'N',
          lecture06 : 'PDP(DMT)' , 
          lecture07 : 'NR(SK)' , 
          lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'Thursday',
     lecture01 : 'WT(SM)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'OOPS(JP)' ,
      lecture04 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' ,  
       lecture05 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' , 
       lunch: 'C',
        lecture06 : 'SE(NR)' ,
         lecture07 : 'BD(SKS)' , 
         lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'FrclassNameay',
     lecture01 : 'NR(SK)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'SE(NR)' ,
      lecture04 : 'WT(SM)' ,
         lecture05 : 'JAVA TRAINING(SD)' ,
          lunch: 'H', 
          lecture06 : 'BD(SKS)' , 
          lecture07 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)' , 
          lecture08 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)'},
    { day: 'Saturday',
     lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' , 
     lecture03 : 'BD(SKS)' ,
      lecture04 : 'OOPS(JP)' , 
     lecture05 : 'WT(SM)' ,
    lecture06 : 'ITCS(MVS)' ,
    lecture07 : 'ITCS(MVS)' , 
    lecture08 : 'OOPS(JP'},   // Add more entries for secB
  ],
  secC: [
    { day: 'Monday', 
    lecture01 : 'WT(SM)' , 
    lecture02 : 'CN(KD)' , 
    lecture03 : 'SE(NR)' , 
    lecture04 : 'BD(SKS)' , 
    lecture05 : 'PDP(DMT)' ,
      lunch: 'L', 
      lecture06 : 'ITCS(MVS)' , 
      lecture07 : 'OOPS(JP)' ,
       lecture08 : 'OOPS(JP)'},

    { day: 'Tuesday',
     lecture01 : 'WT(SM)' ,
      lecture02 : 'SE(NR)' ,
       lecture03 : 'CN(KD)' ,
        lecture04 : 'SE B1-LAB4(NR) && JAVA B2-LAB-3' , 
        lecture05: 'SE B1-LAB4(NR) && JAVA B2-LAB-3' ,
         lunch: 'U',  
         lecture06 : 'JAVA TRAINING' , 
         lecture07 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)' ,
          lecture08 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)'},

    { day: 'Wednesday', 
    lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' ,
      lecture03 : 'WT(SM)' , 
      lecture04 : 'BD(SKS)' ,
        lecture05 : 'OOPS(JP)' ,
         lunch: 'N',
          lecture06 : 'PDP(DMT)' , 
          lecture07 : 'NR(SK)' , 
          lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'Thursday',
     lecture01 : 'WT(SM)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'OOPS(JP)' ,
      lecture04 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' ,  
       lecture05 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' , 
       lunch: 'C',
        lecture06 : 'SE(NR)' ,
         lecture07 : 'BD(SKS)' , 
         lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'FrclassNameay',
     lecture01 : 'NR(SK)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'SE(NR)' ,
      lecture04 : 'WT(SM)' ,
         lecture05 : 'JAVA TRAINING(SD)' ,
          lunch: 'H', 
          lecture06 : 'BD(SKS)' , 
          lecture07 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)' , 
          lecture08 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)'},
    { day: 'Saturday',
     lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' , 
     lecture03 : 'BD(SKS)' ,
      lecture04 : 'OOPS(JP)' , 
     lecture05 : 'WT(SM)' ,
    lecture06 : 'ITCS(MVS)' ,
    lecture07 : 'ITCS(MVS)' , 
    lecture08 : 'OOPS(JP'},
    // Add more entries for secC
  ],
  secD: [
    { day: 'Monday', 
    lecture01 : 'WT(SM)' , 
    lecture02 : 'CN(KD)' , 
    lecture03 : 'SE(NR)' , 
    lecture04 : 'BD(SKS)' , 
    lecture05 : 'PDP(DMT)' ,
      lunch: 'L', 
      lecture06 : 'ITCS(MVS)' , 
      lecture07 : 'OOPS(JP)' ,
       lecture08 : 'OOPS(JP)'},

    { day: 'Tuesday',
     lecture01 : 'WT(SM)' ,
      lecture02 : 'SE(NR)' ,
       lecture03 : 'CN(KD)' ,
        lecture04 : 'SE B1-LAB4(NR) && JAVA B2-LAB-3' , 
        lecture05: 'SE B1-LAB4(NR) && JAVA B2-LAB-3' ,
         lunch: 'U',  
         lecture06 : 'JAVA TRAINING' , 
         lecture07 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)' ,
          lecture08 : 'CN B1-LAB5(KD) && WT B2-LAB5(SM)'},

    { day: 'Wednesday', 
    lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' ,
      lecture03 : 'WT(SM)' , 
      lecture04 : 'BD(SKS)' ,
        lecture05 : 'OOPS(JP)' ,
         lunch: 'N',
          lecture06 : 'PDP(DMT)' , 
          lecture07 : 'NR(SK)' , 
          lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'Thursday',
     lecture01 : 'WT(SM)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'OOPS(JP)' ,
      lecture04 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' ,  
       lecture05 : 'WT B1-LAB3(SD) && CN B2-LAB(KD)' , 
       lunch: 'C',
        lecture06 : 'SE(NR)' ,
         lecture07 : 'BD(SKS)' , 
         lecture08 : 'JAVA TRAINING(SD)'},

    { day: 'FrclassNameay',
     lecture01 : 'NR(SK)' , 
     lecture02 : 'CN(KD)' , 
     lecture03 : 'SE(NR)' ,
      lecture04 : 'WT(SM)' ,
         lecture05 : 'JAVA TRAINING(SD)' ,
          lunch: 'H', 
          lecture06 : 'BD(SKS)' , 
          lecture07 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)' , 
          lecture08 : 'JAVA LAB B1-LAB3(SD) && SE LAB4-B2(NR)'},
    { day: 'Saturday',
     lecture01 : 'SE(NR)' ,
     lecture02 : 'CN(KD)' , 
     lecture03 : 'BD(SKS)' ,
      lecture04 : 'OOPS(JP)' , 
     lecture05 : 'WT(SM)' ,
    lecture06 : 'ITCS(MVS)' ,
    lecture07 : 'ITCS(MVS)' , 
    lecture08 : 'OOPS(JP'},
    // Add more entries for secD
  ],
};

const SectionButton = ({ section, onSelectSection }) => {
  return (
    
    <button  onClick={() => onSelectSection(section)}>
      {section}
    </button> 
    
       );
};

const Timetable = ({ data }) => {
  return (
    <div className='timecontainer'>
      <h2 > 3rd year Timetable </h2>
      <table className='timecon' id='timecont'>
        <thead>
          <tr>
            <th>Day/Time</th>
            <th>9:00-9:50 AM</th>
            <th>9:50-10:40 AM</th>
            <th>10:40-11:30 AM</th>
            <th>11:30-12:20 PM</th>
            <th>12:20-01:10 PM</th>
            <th>01:10-02:10 PM</th>
            <th>02:10-03:00 AM</th>
            <th>03:00-03:50 AM</th>
            <th>03:50-04:40 AM</th>

          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            
            <tr key={index}>
             <td>{entry.day}</td>
              <td>{entry.lecture01}</td>
              <td>{entry.lecture02}</td>
              <td>{entry.lecture03}</td>
              <td>{entry.lecture04}</td>
              <td>{entry.lecture05}</td>
              <td>{entry.lunch}</td>
              <td>{entry.lecture06}</td>
              <td>{entry.lecture07}</td>
              <td>{entry.lecture08}</td>
             
            </tr>
           
          ))}
        </tbody>
      </table>

    
    </div>
  );
};


function App() {
  const [selectedSection, setSelectedSection] = useState(null);

  const handleSelectSection = (section) => {
    setSelectedSection(section);
  };

  // const[counter, setCounter] = useState(0);

  // const handleClick1 = () => {
  //  setCounter(counter+1);
  // };

  return (
    <div className="buttonSection">
      {/* header section */}

        <header/>
  
      <div className="frame">
        {/* get  your timetable at one place */}
       
          
        <div className="headerr">
            <div className="logo">
                <b>75%.com</b>
            </div>

            <div className="notes">
               <h3>Get your notes</h3>
            </div>
           
           <div className="btn">
                 <button >syllabus</button>
                 <button>Quantum</button>
           </div>

            </div>
            
     </div>
   
 
      {/* button section */}
      <div className='secBtn'>
        {['secA', 'secB', 'secC', 'secD'].map((section) => (
          <SectionButton
            key={section}
            section={section}
            onSelectSection={handleSelectSection}
          />
        ))}
      </div>
      
    
    <div className="appearSec">
      {selectedSection && <Timetable data={timetableData[selectedSection]} />}
      </div>
    {/*footer  */}

    <div className="footer">

       <div className="github">
         <a href=" ">
          <GitHubIcon/>
         </a>
        </div>

     <div className="founder">
      <h4>made by @AbhiDiva</h4>
      </div>

      <div className="linkedin">
        <a href="https://www.linkedin.com/in/abhishek-kumar-062231198/">
          <LinkedInIcon/>
          </a>
      </div>
    </div>
     
    </div>

    
  );
}

export default App;
