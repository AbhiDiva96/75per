import React, { useState, useEffect } from 'react';
import Header from '../../pages/header';
import './fstlecture.css';
import NoResultsFound from '../noResultsFound/index.js';
import { Link } from 'react-router-dom';
import Footer from './../../pages/footer.js';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import MyChatbot from '../ChatBot/chatbot.jsx';
import LectureSkeleton from '../page6(2nd)/LectureSkeleton.jsx'; // Import the skeleton component

// Import images
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

function Lecture() {
  // State for search query and loading
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  // Array of lecture items
  const lectureItems = [
    { title: 'Engineering Physics', image: ep, link: 'https://www.youtube.com/watch?v=2Eqe7jPv-Bw&list=PLTYLC3XcJGZ5D3ohTYfOIR39L-H69f9Ca' },
    { title: 'Engineering Mathematics-I', image: mone, link: 'https://www.youtube.com/watch?v=VH6N7inCy9M&list=PL5Dqs90qDljVTfWmYSWjD99kcqdkI5zMM' },
    { title: 'Electrical Engineering', image: elceng, link: 'https://www.youtube.com/watch?v=XdpqKF2g9PA&list=PL-JvKqQx2Atc61XCOHXm_ACNkOkAm3yO4' },
    { title: 'PPS', image: pps, link: 'https://www.youtube.com/watch?v=V7HBrSMEidc&list=PL-JvKqQx2AtdDyHzdsB1EzZuGCZN-3ucI' },
    { title: 'Artificial Intelligence', image: ai, link: 'https://www.youtube.com/watch?v=4ORelX5MDcY&list=PLUwI7zx-CMG1_OxCdn6ceo-YJOwIFzB_u' },
    { title: 'Soft Skill-I', image: ssi, link: 'https://www.youtube.com/watch?v=04A4PRikkCY&list=PL-JvKqQx2AteLNR8UO4UQiDmQF-Wotu5G' },
    { title: 'Engineering Chemistry', image: ec, link: 'https://www.youtube.com/watch?v=GmhI0QzGTb4&list=PLtxdcwCcWWQ3O1VE8t6KFAFvxMg4GgzNx' },
    { title: 'Engineering Mathematics-II', image: mtwo, link: 'https://www.youtube.com/watch?v=0THzxpXzxfA&list=PL5Dqs90qDljVlWQBPaa6FIsoF2CodPiQJ' },
    { title: 'Electronics Engineering', image: ee, link: 'https://www.youtube.com/watch?v=_r4YM5CjgQo&list=PLkojphh8hBnbk1YiRdV87sxhGf3l7doGp' },
    { title: 'Mechanical Engineering and Mechatronics', image: me, link: 'https://www.youtube.com/watch?v=lMdwCZPJfj0&list=PL-JvKqQx2Atd9ffOCQTTrzePu1K12Gf6K' },
    { title: 'Emerging Technology', image: et, link: 'https://www.youtube.com/watch?v=27_3ilfvlck&list=PLaGBxvvw_eMWvXPgdYd444ih2wp1QxZ_Z' },
    { title: 'Soft Skill-II', image: ssii, link: 'https://www.youtube.com/watch?v=TQWspT4kTPc&list=PL8nHpqzOrbFAvPeGY7_PJyoO4xFMs7a8a' },
    // Add more items here
  ];

  // Filtered lecture items based on search query
  const filteredItems = lectureItems.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Link to="/fstyear" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
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
        <h1>1st year lecture</h1>
      </div>
      {/* Input field for search */}
      <div className='inputDiv'>
        <FaMagnifyingGlass className='left'/>
        <input
          type='text'
          className='inputField'
          placeholder='Search For Lecture ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Display filtered lecture items or loading state */}
      {loading ? (
        <div className="container">
          {Array(lectureItems.length).fill().map((_, index) => (
            <LectureSkeleton key={index} />
          ))}
        </div>
      ) : filteredItems.length !== 0 ? (
        <div className="container">
          {filteredItems.map((item, index) => (
            <div className="box" key={index}>
              <div className="upper">
                <img src={item.image} alt={item.title} />
              </div>
              <span className="text-box-in">{item.title}</span>
              <a href={item.link}>View Content</a>
            </div>
          ))}
        </div>
      ) : (
        <NoResultsFound />
      )}
      <MyChatbot />
      <Footer />
    </div>
  );
}

export default Lecture;
