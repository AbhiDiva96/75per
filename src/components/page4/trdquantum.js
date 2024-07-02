import React, { useState, useEffect } from 'react';
import './quantum.css';
import Header from '../../pages/header.js';
import Aquantum from '../../assets/5th.png';
import Imgcd from '../../assets/cd.jpg';
import Imgda from '../../assets/da.png';
import Imgdbms from '../../assets/dbms.png';
import Imgdaa from '../../assets/daa1.jpg';
import Imgcn from '../../assets/cn.webp';
import Imgwt from '../../assets/wt.png';
import Imgitcs from '../../assets/itcsimg.jpg';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import NoResultsFound from '../noResultsFound/index.js';
import { Link } from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';

const quantumBooks = [
  { img: Imgcd, title: "Compiler Design", file: "cd" },
  { img: Imgda, title: "Data Analytics", file: "DataAnalytics" },
  { img: Imgdbms, title: "DBMS", file: "DatabaseManagementSystem" },
  { img: Imgdaa, title: "DAA", file: "Design&AnalysisOfAlgorithms" },
  { img: Aquantum, title: "Machine Learning", file: "Machine learning techniques" },
  { img: Imgcn, title: "Computer Network", file: "ComputerNetwork" },
  { img: Aquantum, title: "OOPs", file: "oopsquantum" },
  { img: Imgwt, title: "Web Technology", file: "WEB TECH QUANTUM" },
  { img: Aquantum, title: "Big Data", file: "BigData" },
  { img: Aquantum, title: "Software Engineering", file: "sequantum" },
  { img: Imgitcs, title: "ITCS", file: "itcs" }
];

function Quantum() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(quantumBooks);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading time
  }, []);

  useEffect(() => {
    setFilteredBooks(
      quantumBooks.filter(book =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const handleDownload = (quantum) => {
    const syllabusFilePath = process.env.PUBLIC_URL + `/quantum/${quantum}.pdf`;

    const link = document.createElement('a');
    link.href = syllabusFilePath;
    link.download = `${quantum}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

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
      <div style={{ overflow: "auto" }}>
        <div className="quantum-head">
          <h2>Download Quantum</h2>
        </div>
        <div className='inputDiv1'>
          <FaMagnifyingGlass className='left' />
          <input
            type='text'
            className='inputField'
            placeholder='Search For Quantum...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        { isLoading ? (
          <div className="content" style={{ height: "auto", overflow: "auto" }}>
            {Array.from({ length: 11 }).map((_, index) => (
              <div className="skeleton-book" key={index}>
              
              </div>
            ))}
          </div>
        ) : (
          filteredBooks.length !== 0 ? (
            <div className="content" style={{ height: "auto", overflow: "auto" }}>
              {filteredBooks.map(book => (
                <div className="book" key={book.title}>
                  <img src={book.img} alt={book.title} />
                  <button onClick={() => handleDownload(book.file)}>Download</button>
                  <div className="cover">
                    <p>{book.title}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <NoResultsFound />
          )
        )}
      </div>
      <Footer />
      <MyChatbot />
    </div>
  );
}

export default Quantum;
