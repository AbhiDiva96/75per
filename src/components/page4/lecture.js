import React, { useState, useEffect } from 'react';
import Header from '../../pages/header';
import '../page4/lecture.css';
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
import { FaMagnifyingGlass } from 'react-icons/fa6';
import NoResultsFound from '../noResultsFound/index.js';
import { Link } from 'react-router-dom';
import Footer from './../../pages/footer.js';
import LectureSkeleton from '../page6(2nd)/LectureSkeleton.jsx'; // Import the skeleton component

function Lecture() {
  // State for search query
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true); // Loading state

  // Array of lecture items
  const lectureItems = [
    { title: 'Compiler Design', image: cd, link: 'https://www.youtube.com/watch?v=zaZU4zSdQ1U&list=PL_obO5Qb5QTEZrWlX_B19OV5nJViKGnnC' },
    { title: 'Data analytics', image: da, link: 'https://www.youtube.com/watch?v=FyxA8JsKn90&list=PL1uhi2_UdvkDp2KlegPmEjmF70O3WUODA' },
    { title: 'Design Analysis and Algorithm', image: daa, link: 'https://www.youtube.com/watch?v=twE1eiO7gEE&list=PL-JvKqQx2Atd--1Gs3WB8nmWOWRbEM7WW' },
    { title: 'Machine Learning', image: mlt, link: 'https://www.youtube.com/watch?v=OZkYkWYNTRo&list=PL5vhyNmOQ5ORE-wzDcfhQZiRM7jESvzhD' },
    { title: 'DataBase Management system', image: dbms, link: 'https://www.youtube.com/watch?v=Agz0dyRu2uI&list=PL_obO5Qb5QTGDsMsl16VLKAxtaTqJRjER' },
    { title: 'Computer Network', image: cn, link: 'https://www.youtube.com/watch?v=04A4PRikkCY&list=PL-JvKqQx2AteLNR8UO4UQiDmQF-Wotu5G' },
    { title: 'OOPs', image: oops, link: 'https://www.youtube.com/watch?v=82ba_at_TkM&list=PLDt-fuLi9lO9cej3TpU6_umkt_KSM8H7b' },
    { title: 'Web Technology', image: wt, link: 'https://www.youtube.com/watch?v=M8i-1oeHaDw&list=PL-JvKqQx2Atf5w_httliQrmqPpL7oLc-W' },
    { title: 'Big Data', image: bd, link: 'https://www.youtube.com/watch?v=I_ku0D4uQzQ&list=PLPIwNooIb9vi4f8tVkzLnr1tll6Pubbqhi' },
    { title: 'Software Engineering', image: se, link: 'https://www.youtube.com/watch?v=imzSpM_5R6k&list=PL-JvKqQx2AtdZ7m5Nui3RwqEnNcZZ9N1L' },
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
      <Link to="/trdyear" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
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
        <h1>Lecture</h1>
      </div>
      {/* Input field for search */}
      <div className='inputDiv'>
        <FaMagnifyingGlass className='left' />
        <input
          type='text'
          className='inputField'
          placeholder='Search For Lectures ...'
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      {/* Display filtered lecture items */}
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
      <Footer />
    </div>
  );
}

export default Lecture;
