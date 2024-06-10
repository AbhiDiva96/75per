import React from 'react'
import Header from '../../pages/header';
import '../page4/lecture.css'
import cn from '../../assets/computerNetwork.jpg';
import da from '../../assets/dataAnalytics.jpg';
import dbms from '../../assets/dbms.jpg';
import daa from '../../assets/daa.jpg';
import mlt from '../../assets/mlt.jpg'
import cd from '../../assets/compilerdesign.jpg';
import oops from '../../assets/oops.jpg';
import wt from '../../assets/wt.jpg';
import se from '../../assets/se.jpg';
import bd from '../../assets/bd.jpg';
                                                                                                                      
function lecture() {
  return (
    <div>
      <Header/>
     <div className="lecturetrd">
       <h1> Lecture</h1>
     </div>

     {/* <div className="lecturelink"> */}
    
         
        <div class="container">
       
       {/* compiler Design */}
        <div class="box">
         <div className="upper">
                <img src={cd} alt="img" />
                </div>
              <span class='text-box-in'>Compiler Design</span>
             <a href="https://www.youtube.com/watch?v=zaZU4zSdQ1U&list=PL_obO5Qb5QTEZrWlX_B19OV5nJViKGnnC">
                 View Content
            </a>
        </div>

     {/* data analytics */}
        <div class="box">
         <div className="upper">
                <img src={da} alt="img" />
                </div>
              <span class='text-box-in'>Data analytics</span>
             <a href="https://www.youtube.com/watch?v=FyxA8JsKn90&list=PL1uhi2_UdvkDp2KlegPmEjmF70O3WUODA">
                 View Content
            </a>
        </div>


{/* daa */}
        <div class="box">
         <div className="upper">
                <img src={daa} alt="img" />
                </div>
              <span class='text-box-in'>Design Analysis and Algorithm </span>
             <a href="https://www.youtube.com/watch?v=twE1eiO7gEE&list=PL-JvKqQx2Atd--1Gs3WB8nmWOWRbEM7WW">
                 View Content
            </a>
        </div>

{/* machine learning */}
        <div class="box">
         <div className="upper">
                <img src={mlt} alt="img" />
                </div>
              <span class='text-box-in'>Machine Learning</span>
             <a href="https://www.youtube.com/watch?v=OZkYkWYNTRo&list=PL5vhyNmOQ5ORE-wzDcfhQZiRM7jESvzhD">
                 View Content
            </a>
        </div>

          
  {/* dbms */}
  <div class="box">
         <div className="upper">
                <img src={dbms} alt="img" />
                </div>
              <span class='text-box-in'>DataBase Management system</span>
             <a href="https://www.youtube.com/watch?v=Agz0dyRu2uI&list=PL_obO5Qb5QTGDsMsl16VLKAxtaTqJRjER">
                 View Content
            </a>
        </div>

{/* computer network */}
        <div class="box">
         <div className="upper">
                <img src={cn} alt="img" />
                </div>
              <span class='text-box-in'>Computer Network</span>
             <a href="https://www.youtube.com/watch?v=04A4PRikkCY&list=PL-JvKqQx2AteLNR8UO4UQiDmQF-Wotu5G">
                 View Content
            </a>
        </div>

{/* oops */}
        <div class="box">
         <div className="upper">
                <img src={oops} alt="img" />
                </div>
              <span class='text-box-in'> OOPs</span>
             <a href="https://www.youtube.com/watch?v=82ba_at_TkM&list=PLDt-fuLi9lO9cej3TpU6_umkt_KSM8H7b">
                 View Content
            </a>
        </div>

{/* web technology */}
        <div class="box">
         <div className="upper">
                <img src={wt} alt="img" />
                </div>
              <span class='text-box-in'> Web Technology</span>
             <a href="https://www.youtube.com/watch?v=M8i-1oeHaDw&list=PL-JvKqQx2Atf5w_httliQrmqPpL7oLc-W">
                 View Content
            </a>
        </div>

   {/* Big data */}
        <div class="box">
         <div className="upper">
                <img src={bd} alt="img" />
                </div>
              <span class='text-box-in'>Big Data</span>
             <a href="https://www.youtube.com/watch?v=I_ku0D4uQzQ&list=PLPIwNooIb9vi4f8tVkzLnr1tll6Pubbqhi">
                 View Content
            </a>
        </div>

{/* software engineering */}

<div class="box">
         <div className="upper">
                <img src={se} alt="img" />
                </div>
              <span class='text-box-in'>Software Engineering</span>
             <a href="https://www.youtube.com/watch?v=imzSpM_5R6k&list=PL-JvKqQx2AtdZ7m5Nui3RwqEnNcZZ9N1L">
                 View Content
            </a>
        </div>


       </div>
     </div>
    // </div>
  )
}

export default lecture
