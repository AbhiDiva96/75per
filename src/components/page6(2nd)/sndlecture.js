import React, { useState, useEffect } from 'react';
import Header from '../../pages/header';
import NoResultsFound from '../noResultsFound/index.js'
import Imgmath4 from '../../assets/lmath4.jpg';
import Imgdsa from '../../assets/ldsa.jpg';
import Imgcoa from '../../assets/lcoa.jpg';
import Imgdstl from '../../assets/ldstl.jpg';
import Imges from '../../assets/les.jpg';
import Imgtc from '../../assets/ltc.jpg';
import Imgpy from '../../assets/lpy.jpg';
import Imgcss from '../../assets/lcss.jpg';
import Imguhv from '../../assets/luhv.jpg';
import Imgos from '../../assets/los.jpg';
import Imgtafl from '../../assets/ltafl.jpg';
import ssii from '../../assets/ssii.jpg';
import {FaMagnifyingGlass } from 'react-icons/fa6'
import {Link} from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';

const lectures = [
  { img: Imgmath4, title: "Engineering Mathematics-4", link: "https://www.youtube.com/watch?v=14bNduEh9ag&list=PL5Dqs90qDljXYjZ8kDHtpMqPGKNGb2dxu" },
  { img: Imgdsa, title: "Data Structure", link: "https://www.youtube.com/watch?v=ouWefOMkMJA&list=PL-JvKqQx2AtcnX8uPrdjvCplAmwTSFhMO" },
  { img: Imgcoa, title: "Computer Organization & Architecture", link: "https://www.youtube.com/watch?v=8msCz6Nb6nk&list=PL-JvKqQx2Atfuxo1LR0m9RQramPymoBsj" },
  { img: Imgdstl, title: "Discrete Structure & Theory of Logic", link: "https://www.youtube.com/watch?v=QW2qyX9YU3g&list=PL-JvKqQx2AtcaCRa_z-JeH4FKh1_ZTs_0" },
  { img: Imges, title: "Energy Science", link: "https://www.youtube.com/watch?v=PcmtbcyDIyg&list=PLRLB5WCqU54W6Gt6NczCeizFGRwLVibFX" },
  { img: Imgtc, title: "Technical Communication", link: "https://www.youtube.com/watch?v=ZXqi3KqjyMA&list=PLaGBxvvw_eMUhn3H7mlBnqCUcd2Vqgq2s" },
  { img: Imgpy, title: "Python Programming", link: "https://www.youtube.com/watch?v=Wh3zMk4yAc4&list=PLHEcKKWWhXy_QBXhpQpuqMbtjGVJm_fkt" },
  { img: Imgcss, title: "Cyber Security", link: "https://www.youtube.com/watch?v=BS5v5Rr-oVo&list=PL-JvKqQx2AteIbm-z4X709scVr9OaHpIY" },
  { img: Imguhv, title: "Universal Human Values", link: "https://www.youtube.com/watch?v=J1gSYelcM40&list=PLHkk39NrOxRm5ByJViESOeTKWitZS1Hyg" },
  { img: Imgos, title: "Operating System", link: "https://www.youtube.com/watch?v=i4WyGv5Mbak&list=PL_obO5Qb5QTE9s7QCNjqk97Q4UUgOseWP" },
  { img: Imgtafl, title: "Theory of Automata & Formal Language", link: "https://www.youtube.com/watch?v=oSCfvEKGUPQ&list=PL_obO5Qb5QTEihQ35PgzjZSh7PveVt-iF" },
  { img: ssii, title: "Soft Skill-2", link: "https://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8a" },
];

function SndLecture() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLectures, setFilteredLectures] = useState(lectures);

  useEffect(() => {
    setFilteredLectures(
      lectures.filter(lecture =>
        lecture.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  return (
    <div>
      <Link to="/sndyear" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="42" 
          height="42" 
          fill="currentColor" 
          viewBox="0 0 16 16" 
          style={{ 
            fontWeight: 'bold',
            position: 'fixed', 
            top: 139, 
            left: 20
          }}
        >
          <path 
            fillRule="evenodd" 
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </Link>
      <Header />
      <div className="lecturetrd">
        <h1>2nd year lecture</h1>
      </div>
      <div class='inputDiv'>
      <FaMagnifyingGlass className='left'/>

<input
  type='text'
  className='inputField'
  placeholder='Search For Lectures ...'
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
</div>
      <div style={{ margin: '20px' }}>
      </div>
      { filteredLectures.length !== 0 ? <div className="container">
        {filteredLectures.map((lecture) => (
          <div className="box" key={lecture.title}>
            <div className="upper">
              <img src={lecture.img} alt={lecture.title} />
            </div>
            <span className='text-box-in'>{lecture.title}</span>
            <a href={lecture.link} target="_blank" rel="noopener noreferrer">
              View Content
            </a>
          </div>
        ))}
      </div> : <NoResultsFound />} <MyChatbot />
      <Footer/>
    </div>
  );
}

export default SndLecture;
