import React, { useState, useEffect } from 'react';
import NoResultsFound from '../noResultsFound/index.js';
import Header from '../../pages/header.js';
import Aquantum from '../../assets/5th.png';
import Imgphy from '../../assets/physics.webp';
import Imgmath1 from '../../assets/math1.jpg';
import Imgelectrical from '../../assets/electrical.jpg';
import Imgpps from '../../assets/pps1.jpg';
import Imgss from '../../assets/softskills1.webp';
import Imgchem from '../../assets/chemistry.webp';
import Imgmath2 from '../../assets/math2.jpg';
import Imgelectronics from '../../assets/electronics.png';
import Imgmech from '../../assets/mechanical.jpg';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot.jsx';
import Footer from './../../pages/footer.js';

const books = [
  { img: Imgphy, title: "Engineering Physics", file: "physics" },
  { img: Imgmath1, title: "Engineering Mathematics-I", file: "Mathematics1" },
  { img: Imgelectrical, title: "Electrical Engineering", file: "BasicElectricalEngineering" },
  { img: Imgpps, title: "PPS", file: "ProgrammingforProblemSolving" },
  { img: Aquantum, title: "Artificial Intelligence", file: "DatabaseManagementSystem" },
  { img: Imgss, title: "Soft Skill-I", file: "SoftSkills1" },
  { img: Imgchem, title: "Engineering Chemistry", file: "Chemistry" },
  { img: Imgmath2, title: "Engineering Mathematics-II", file: "Mathematics2" },
  { img: Imgelectronics, title: "Electronics Engineering", file: "electronics" },
  { img: Imgmech, title: "Mechanical Engineering and Mechatronics", file: "FundamentalsofMechanicalEnggMechatronics" },
  { img: Imgmech, title: "Emerging Technology", file: "DatabaseManagementSystem" },
  { img: Imgmech, title: "Soft Skill-II", file: "DatabaseManagementSystem" },
];

function Quantum() {
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
      <div>
        <h2 className="quantum-head">1st year quantum book</h2>
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
        
        { isLoading ? (
          <div className="content" style={{ height: "auto", overflow: "auto" }}>
            {Array.from({ length: 11 }).map((_, index) => (
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

export default Quantum;
