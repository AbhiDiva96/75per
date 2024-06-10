import React from 'react'
import '../components/imgdata.css';
        
const imgdata = ({section}) => {
        
    const imagePath = `/timetables/${section}.jpg`;
  return (
    <div>
     <div className="timetable-container">

         <h2 className='head'>{`Timetable: ${section}`}</h2>
         
         <img src={imagePath} className='timetable-image' alt={`Timetable for Section ${section}`} />
         </div>
         </div>
  )
}

export default imgdata
