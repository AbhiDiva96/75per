import React, { useState, useEffect } from 'react';
import NoResultsFound from '../noResultsFound/index.js';
import '../page6(2nd)/sndquantum.css';
import Header from '../../pages/header.js';
import Aquantum from '../../assets/5th.png';
import Imgmath4 from '../../assets/math4.png';
import Imgdsa from '../../assets/dsa.jpeg';
import Imgcoa from '../../assets/coa.jpeg';
import Imgdstl from '../../assets/dstl.jpeg';
import Imges from '../../assets/es.jpeg';
import Imgtc from '../../assets/tc.jpeg';
import Imgpp from '../../assets/python.jpeg';
import Imgcs from '../../assets/css.jpeg';
import Imguhv from '../../assets/uhv.jpg';
import Imgos from '../../assets/os.jpg';
import Imgtafl from '../../assets/autometa.png';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';

const books = [
  { img: Imgmath4, title: "Engineering Math4", file: "Mathematics4" },
  { img: Imgdsa, title: "Data Structure", file: "dsa" },
  { img: Imgcoa, title: "Computer Organization and Architecture", file: "ComputerOrganizationArchitecture" },
  { img: Imgdstl, title: "Discrete structure & theory of logic", file: "DiscreteStructureTheoryofLogic" },
  { img: Imges, title: "Energy Science & Engineering", file: "Energy Science and Engineering" },
  { img: Imgtc, title: "Technical Communication", file: "TechnicalCommunication" },
  { img: Imgpp, title: "Python Programming", file: "Python Programming" },
  { img: Imgcs, title: "Cyber Security", file: "cyber security" },
  { img: Imguhv, title: "Universal Human Values", file: "UniversalHumanValuesProfessionalEthics" },
  { img: Imgos, title: "Operating System", file: "OperatingSystems" },
  { img: Imgtafl, title: "Theor of Automata and Formal Language", file: "TAFL" },
  { img: Aquantum, title: "Soft Skill-II", file: "sequantum" },
];

function SndQuantum() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBooks, setFilteredBooks] = useState(books);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Simulate loading time
  }, []);

  useEffect(() => {
    setFilteredBooks(
      books.filter(book =>
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
            top: 130, 
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
        <h2 className="quantum-head">2nd year quantum book</h2>
        <div className='inputDiv1'>
          <FaMagnifyingGlass className='left'/>
          <input
            type='text'
            className='inputField'
            placeholder='Search For Quantum ...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {isLoading ? (
          <div className="content" style={{ height: "auto", overflow: "auto" }}>
            {Array.from({ length: 12 }).map((_, index) => (
              <div className="skeleton-book" key={index}></div>
            ))}
          </div>
        ) : (
          filteredBooks.length !== 0 ? (
            <div className="content" style={{ height: "auto" }}>
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
      <MyChatbot />
      <Footer />
    </div>
  );
}

export default SndQuantum;
