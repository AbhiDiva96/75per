// SndLecture.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../pages/header';
import NoResultsFound from '../noResultsFound/index.js';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';
import LectureSkeleton from './LectureSkeleton.jsx'; // Import the skeleton component

const lectures = [
  { img: 'https://example.com/lmath4.jpg', title: "Engineering Mathematics-4", link: "https://www.youtube.com/watch?v=14bNduEh9ag&list=PL5Dqs90qDljXYjZ8kDHtpMqPGKNGb2dxu" },
  { img: 'https://example.com/ldsa.jpg', title: "Data Structure", link: "https://www.youtube.com/watch?v=ouWefOMkMJA&list=PL-JvKqQx2AtcnX8uPrdjvCplAmwTSFhMO" },
  // Add more lectures as needed...
];

function SndLecture() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredLectures, setFilteredLectures] = useState(lectures);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setFilteredLectures(
      lectures.filter(lecture =>
        lecture.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  useEffect(() => {
    // Simulate a loading delay
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

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
      <div className="inputDiv">
        <FaMagnifyingGlass className="left" />
        <input
          type="text"
          className="inputField"
          placeholder="Search For Lectures ..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div style={{ margin: '20px' }}></div>
      {loading ? (
        <div className="container">
          {Array(lectures.length).fill().map((_, index) => (
            <LectureSkeleton key={index} />
          ))}
        </div>
      ) : filteredLectures.length !== 0 ? (
        <div className="container">
          {filteredLectures.map((lecture) => (
            <div className="box" key={lecture.title}>
              <div className="upper">
                <img src={lecture.img} alt={lecture.title} />
              </div>
              <span className="text-box-in">{lecture.title}</span>
              <a href={lecture.link} target="_blank" rel="noopener noreferrer">
                View Content
              </a>
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

export default SndLecture;
