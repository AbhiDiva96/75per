import React from 'react'
import '../page6(2nd)/sndquantum.css';


import Header from '../../pages/header.js'
import Aquantum from '../../assets/5th.png'
import Imgmath4  from '../../assets/math4.png';
import Imgdsa from '../../assets/dsa.jpeg';
import Imgcoa from '../../assets/coa.jpeg';
import Imgdstl from '../../assets/dstl.jpeg';
import Imges from '../../assets/es.jpeg';
import Imgtc from '../../assets/tc.jpeg'
import Imgpp from '../../assets/python.jpeg';
import Imgcs from '../../assets/css.jpeg';
import Imguhv from '../../assets/uhv.jpg';
import Imgos from '../../assets/os.jpg';
import Imgtafl from '../../assets/autometa.png';


        


function sndquantum() {

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
<div style={{overflow:"auto"}}>
<h2 class="quantum-head">2nd year quantum book</h2>
    <div className="content" style={{
    height: "auto"}}>

<div className="book">
<img src={Imgmath4} alt="" />
<button onClick={() => handleDownload("Mathematics4")}>Download</button>
   <div className="cover">
   <p>Engineering Math4</p>
   </div>
</div>



<div className="book">
<img src={Imgdsa} alt="" />
  <button onClick={() => handleDownload("dsa")}>Download</button>
     <div className="cover">
     <p>Data Structure</p>

   </div>
</div>



<div className="book">
<img src={Imgcoa} alt="" />  
<button onClick={() => handleDownload("ComputerOrganizationArchitecture")}>Download</button>
     <div className="cover">
     <p>Computer Organization and Architecture</p>
   </div>
</div>


<div className="book">
     <img src={Imgdstl} alt="" />
<button onClick={() => handleDownload("DiscreteStructureTheoryofLogic")}>Download</button>
     <div className="cover">
     <p>Discrete structure & theory of logic</p>
   </div>
</div>




<div className="book">
<img src={Imges} alt="" />
<button  onClick={()=> handleDownload("Energy Science and Engineering")}>Download</button>
     <div className="cover">
     <p>Energy Science & Engineering</p>

   </div>
</div>



<div className="book">
<img src={Imgtc} alt="" /> 
<button  onClick={() => handleDownload("TechnicalCommunication")}>Download</button>
     <div className="cover">
     <p>Technical Communication</p>
   </div>
</div>



<div className="book">
<img src={Imgpp} alt="" /> 
<button  onClick={()=> handleDownload("Python Programming")}>Download</button>
     <div className="cover">
     <p>Python Programming</p>
   </div>
</div>



<div className="book">
<img src={Imgcs} alt="" />
<button  onClick={() => handleDownload("cyber security")}>Download</button>
     <div className="cover">
     <p>Cyber Security</p>
   </div>
</div>


<div className="book">
<img src={Imguhv} alt="" />  
<button  onClick={() => handleDownload("UniversalHumanValuesProfessionalEthics")}>Download</button>
     <div className="cover">
     <p>Universal Human Values</p>
   </div>
</div>



<div className="book">
<img src={Imgos} alt="" />  

<button onClick={() => handleDownload("OperatingSystems")}>Download</button>
     <div className="cover">
     <p>Operating System</p>
   </div>
</div>

<div className="book">
<img src={Imgtafl} alt="" /> 
<button onClick={() => handleDownload("TAFL")}>Download</button>
     <div className="cover">
     <p>Theor of Automata and Formal Languague</p>

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
  </div>
  )
}

export default sndquantum
