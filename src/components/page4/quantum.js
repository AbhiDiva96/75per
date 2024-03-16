import React from 'react'
import './quantum.css';
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

      <div className="content">

     <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("cd")}>Download</button>
       <div className="cover">
        <p>Compiler Design</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("DataAnalytics")}>Download</button>
       <div className="cover">
        <p>Data Analytics</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button onClick={() => handleDownload("DatabaseManagementSystem")}>Download</button>
       <div className="cover">
        <p>DBMS</p>
     </div>
  </div>
  
  <div className="book">
       <img src={Aquantum} alt="" />  
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
       <img src={Aquantum} alt="" /> 
       
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
       <img src={Aquantum} alt="" />  
        <button  onClick={() => handleDownload()}>Download</button>
       <div className="cover">
        <p>Web Technology</p>
     </div>
  </div>

  <div className="book">
       <img src={Aquantum} alt="" />  
        <button  onClick={() => handleDownload()}>Download</button>
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

</div>
    </div>
  )
}

export default quantum
