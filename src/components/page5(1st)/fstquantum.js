import React from 'react'
import './fstquantum.css';
import Header from '../../pages/header.js'
import Aquantum from '../../assets/5th.png'


function quantum() {
        
    const handleDownload = (quantum) =>{
      const syllabusFilePath =  process.env.PUBLIC_URL +  `/quantum/${quantum}.pdf`;

      const link = document.createElement('a');
      link.href = syllabusFilePath;
      link.download = `${quantum}.pdf`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
 }

  return (

    <div>
      <Header />

  <h4>1st year quantum book</h4>
      <div className="content">

     <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("cd")}>Download</button>
       <div className="cover">
        <p>Engineering Physics</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("DataAnalytics")}>Download</button>
       <div className="cover">
        <p>Engineering Mathematics-I</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
        <p>Electrical Engineering</p>
     </div>
  </div>
  
  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("Design&AnalysisOfAlgorithms")}>Download</button>
       <div className="cover">
        <p>PPS</p>
     </div>
  </div>

  <div className="book">
     <div className="image">
       <img src={Aquantum} alt="" />
       </div>  
        <button  onClick={()=> handleDownload("Machine learning techniques")}>Download</button>
       <div className="cover">
        <p>Artificial Intelligence</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" /> 
       
        <button  onClick={() => handleDownload(
          "ComputerNetwork"
        )}>Download</button>
    
       <div className="cover">
        <p>Soft Skill-I</p>
     </div>
  </div>


  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={()=> handleDownload("oopsquantum")}>Download</button>
       <div className="cover">
        <p>Engineering Chemistry</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={() => handleDownload()}>Download</button>
       <div className="cover">
        <p>Engineering Mathematics-II</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={() => handleDownload()}>Download</button>
       <div className="cover">
        <p>Electronics Engineering</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("sequantum")}>Download</button>
       <div className="cover">
        <p>Mechanical Engineering and Mechatronics</p>
     </div>
  </div>

  
<div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("sequantum")}>Download</button>
       <div className="cover">
        <p>Emerging Technology</p>
     </div>
  </div>

    
<div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("sequantum")}>Download</button>
       <div className="cover">
        <p>soft skll-II</p>
     </div>
  </div>


  


</div>
    </div>
  )
}

export default quantum
