import React from 'react'
// import './fstquantum.css';
import Header from '../../pages/header.js'
import Aquantum from '../../assets/5th.png'
import Imgphy from '../../assets/physics.webp';
import Imgmath1 from '../../assets/math1.jpg';
import Imgelectrical from '../../assets/electrical.jpg';
import Imgpps from '../../assets/pps1.jpg';
import Imgss from '../../assets/softskills1.webp';
import  Imgchem from '../../assets/chemistry.webp';
import Imgmath2 from '../../assets/math2.jpg';
import Imgelectronics from '../../assets/electronics.png';
import Imgmech from '../../assets/mechanical.jpg';

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

    <div >
      <Header />
<div >
  <h2 class="quantum-head">1st year quantum book</h2>
      <div className="content" style={{  
    height: "auto"}}>


  <div className="book">
    <img src={Imgphy} alt="" />
       <button onClick={() => handleDownload("physics")}>Download</button>
       <div className="cover">
       <p>Engineering Physics</p>
       </div>
</div>

<div className="book">
<img src={Imgmath1} alt="" />
    <button onClick={() => handleDownload("Mathematics1")}>Download</button>
       <div className="cover">
       <p>Engineering Mathematics-I</p>
       </div>
</div>

<div className="book">
<img src={Imgelectrical} alt="" />  
<button onClick={() => handleDownload("BasicElectricalEngineering")}>Download</button>
       <div className="cover">
       <p>Electrical Engineering</p>
       </div>
</div>


<div className="book">
<img src={Imgpps} alt="" />
<button onClick={() => handleDownload("ProgrammingforProblemSolving")}>Download</button>
       <div className="cover">
       <p>PPS</p>
</div>
</div>
 

<div className="book">
<img src={Aquantum} alt="" />
<button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
       <p>Artificial Intelligence</p>
</div>
</div>
 

<div className="book">
<img src={Imgss} alt="" /> 
<button onClick={() => handleDownload("SoftSkills1")}>Download</button>
       <div className="cover">
       <p>Soft Skill-I</p>

</div>
</div>
 

<div className="book">
<img src={ Imgchem} alt="" />  
<button onClick={() => handleDownload("Chemistry")}>Download</button>
       <div className="cover">
       <p>Engineering Chemistry</p>

</div>
</div>
 

<div className="book">
<img src={Imgmath2} alt="" />  
<button onClick={() => handleDownload("Mathematics2")}>Download</button>
       <div className="cover">
       <p>Engineering Mathematics-II</p>

</div>
</div>


  
<div className="book">
<img src={Imgelectronics} alt="" />
<button onClick={() => handleDownload("electronics")}>Download</button>
       <div className="cover">
       <p>Electronics Engineering</p>
</div>
</div>


<div className="book">
<img src={Imgmech} alt="" />  
<button onClick={() => handleDownload("FundamentalsofMechanicalEnggMechatronics")}>Download</button>
       <div className="cover">
       <p>Mechanical Engineering and Mechatronics</p>
</div>
</div>


 
<div className="book">
<img src={Imgmech} alt="" />  
<button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
       <p>Emerging Technology</p>
</div>
</div>


 
<div className="book">
<img src={Imgmech} alt="" />  
<button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
       <p>soft skll-II</p>
</div>
</div>


  


</div>
    </div>
    </div>
  )
}

export default quantum
