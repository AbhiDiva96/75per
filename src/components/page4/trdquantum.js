import React from 'react'
import './quantum.css';
import Header from '../../pages/header.js'
import Aquantum from '../../assets/5th.png'
import Imgcd from '../../assets/cd.jpg';
import Imgda from '../../assets/da.png';
import Imgdbms from '../../assets/dbms.png';
import Imgdaa from '../../assets/daa1.jpg';
// import Imgmlt from '../../assets/mlt.jpg'
import Imgcn from '../../assets/cn.webp';
import Imgwt from '../../assets/wt.png';
import Imgitcs from '../../assets/itcsimg.jpg'

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
        <div style={{ overflow:"auto"}}>
        <div className="quantum-head">
          <h2> Download Quantum</h2> 
        </div>
      <div className="content" style={{ 
    height: "auto",overflow:"auto"}}
  
>

     <div className="book">
       <img src={Imgcd} alt="" />  
        <button onClick={() => handleDownload("cd")}>Download</button>
       <div className="cover">
        <p>Compiler Design</p>
     </div>
  </div>

  <div className="book">
       <img src={Imgda} alt="" />  
        <button onClick={() => handleDownload("DataAnalytics")}>Download</button>
       <div className="cover">
        <p>Data Analytics</p>
     </div>
  </div>

  <div className="book">
       <img src={Imgdbms} alt="" />  
        <button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
        <p>DBMS</p>
     </div>
  </div>
  
  <div className="book">
       <img src={Imgdaa} alt="" />  
        <button onClick={() => handleDownload("Design&AnalysisOfAlgorithms")}>Download</button>
       <div className="cover">
        <p>DAA</p>
     </div>
  </div>

  <div className="book">
     <div className="image">
       <img src={Aquantum} alt="" />
       </div>  
        <button  onClick={()=> handleDownload("Machine learning techniques")}>Download</button>
       <div className="cover">
        <p>Machine Learning</p>
     </div>
  </div>

  <div className="book">
       <img src={Imgcn} alt="" /> 
       
        <button  onClick={() => handleDownload(
          "ComputerNetwork"
        )}>Download</button>
    
       <div className="cover">
        <p>Computer Network</p>
     </div>
  </div>


  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={()=> handleDownload("oopsquantum")}>Download</button>
       <div className="cover">
        <p>OOPs</p>
     </div>
  </div>

  <div className="book">
       <img src={Imgwt} alt="" />  
        <button  onClick={() => handleDownload("WEB TECH QUANTUM")}>Download</button>
       <div className="cover">
        <p>Web Technology</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={() => handleDownload("BigData")}>Download</button>
       <div className="cover">
        <p>Big Data</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("sequantum")}>Download</button>
       <div className="cover">
        <p>Software Engineering</p>
     </div>
  </div>

  
  <div className="book">
       <img src={Imgitcs} alt="" />  
        <button onClick={() => handleDownload("itcs")}>Download</button>
       <div className="cover">
        <p>ITCS</p>
     </div>
  </div>

</div>
    </div>
    </div>
  )
}

export default quantum
