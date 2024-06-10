import React from 'react'
import Header from '../../pages/header';
import './fstlecture.css';



import ec from '../../assets/ec.jpg';
import mtwo from '../../assets/mtwo.jpg';
import me from '../../assets/me.jpg';
import ee from '../../assets/eicseng.jpg';
import et from '../../assets/et.jpg';
import elceng from '../../assets/ecleng.jpg';
import ep from '../../assets/ep.jpg';
import mone from '../../assets/mone.jpg';
import pps from '../../assets/pps.jpg';
import ai from '../../assets/ai.jpg';
import ssi from '../../assets/ssi.jpg';
import ssii from '../../assets/ssii.jpg';

function lecture() {
  return (
    <div>
      <Header/>
     <div className="lecturetrd">
       <h1> 1st year lecture</h1>

     </div>

     {/* <div className="lecturelink"> */}
    
         
        <div class="container">
       
       {/* compiler Design */}
        <div class="box">
         <div className="upper">
                <img src={ep} alt="img" />
                </div>
              <span class='text-box-in' >Engineering Physics</span>
             <a href="https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca">
                 View Content
            </a>
        </div>

     {/* data analytics */}
        <div class="box">
         <div className="upper">
                <img src={mone} alt="img" />
                </div>
              <span class='text-box-in'>Engineering Mathematics-I</span>
             <a href="https://www.youtube.com/watch?v=VH6N7inCy9M&list=PL5Dqs90qDljVTfWmYSWjD99kcqdkI5zMM">
                 View Content
            </a>
        </div>


{/* daa */}
        <div class="box">
         <div className="upper">
                <img src={elceng} alt="img" />
                </div>
              <span class='text-box-in'>Electrical Engineering </span>
             <a href="https://www.youtube.com/watch?v=XdpqKF2g9PA&list=PL-JvKqQx2Atc61XCOHXm_ACNkOkAm3yO4">
                 View Content
            </a>
        </div>

{/* machine learning */}
        <div class="box">
         <div className="upper">
                <img src={pps} alt="img" />
                </div>
              <span class='text-box-in'>PPS</span>
             <a href="https://www.youtube.com/watch?v=V7HBrSMEidc&list=PL-JvKqQx2AtdDyHzdsB1EzZuGCZN-3ucI">
                 View Content
            </a>
        </div>

          
  {/* dbms */}
  <div class="box">
         <div className="upper">
                <img src={ai} alt="img" />
                </div>
              <span class='text-box-in'>Artificial Intelligence</span>
             <a href="https://www.youtube.com/watch?v=4ORelX5MDcY&list=PLUwI7zx-CMG1_OxCdn6ceo-YJOwIFzB_u">
                 View Content
            </a>
        </div>

{/* computer network */}
        <div class="box">
         <div className="upper">
                <img src={ssi} alt="img" />
                </div>
              <span class='text-box-in'>Soft Skill-I</span>
             <a href="https://www.youtube.com/watch?v=04A4PRikkCY&list=PL-JvKqQx2AteLNR8UO4UQiDmQF-Wotu5G">
                 View Content
            </a>
        </div>

{/* oops */}
        <div class="box">
         <div className="upper">
                <img src={ec} alt="img" />
                </div>
              <span class='text-box-in'> Engineering Chemistry</span>
             <a href="https://www.youtube.com/watch?v=GmhI0QzGTb4&list=PLtxdcwCcWWQ3O1VE8t6KFAFvxMg4GgzNx">
                 View Content
            </a>
        </div>

{/* web technology */}
        <div class="box">
         <div className="upper">
                <img src={mtwo} alt="img" />
                </div>
              <span class='text-box-in'> Engineering Mathematics-II</span>
             <a href="https://www.youtube.com/watch?v=0THzxpXzxfA&list=PL5Dqs90qDljVlWQBPaa6FIsoF2CodPiQJ">
                 View Content
            </a>
        </div>

   {/* Big data */}
        <div class="box">
         <div className="upper">
                <img src={ee} alt="img" />
                </div>
              <span class='text-box-in'> Electronics Engineering</span>
             <a href="https://www.youtube.com/watch?v=_r4YM5CjgQo&list=PLkojphh8hBnbk1YiRdV87sxhGf3l7doGp">
                 View Content
            </a>
        </div>

{/* software engineering */}

<div class="box">
         <div className="upper">
                <img src={me} alt="img" />
                </div>
              <span class='text-box-in'>Mechanical Engineering and Mechatronics</span>
             <a href="https://www.youtube.com/watch?v=lMdwCZPJfj0&list=PL-JvKqQx2Atd9ffOCQTTrzePu1K12Gf6K">
                 View Content
            </a>
        </div>

     

        <div class="box">
         <div className="upper">
                <img src={et} alt="img" />
                </div>
              <span class='text-box-in'>   Emerging Technology</span>
             <a href="https://www.youtube.com/watch?v=27_3ilfvlck&list=PLaGBxvvw_eMWvXPgdYd444ih2wp1QxZ_Z">
                 View Content
            </a>
        </div>

        
        <div class="box">
         <div className="upper">
                <img src={ssii} alt="img" />
                </div>
              <span class='text-box-in'> Soft skll-II</span>
             <a href="https://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8ahttps://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8ahttps://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8a">
                 View Content
            </a>
        </div>


       </div>
     </div>
    // </div>
  )
}

export default lecture
