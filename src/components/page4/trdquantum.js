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
import {FaMagnifyingGlass } from 'react-icons/fa6'
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
      <Header />
      <div style={{ overflow: "auto" }}>
        <div className="quantum-head">
          <h2>Download Quantum</h2>
        </div>
        <div class='inputDiv1'>
          <FaMagnifyingGlass className='left'/>
    <input
      type='text'
      class='inputField'
      placeholder='Search For Quantum...'
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
   
</div>

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
      </div>
    </div>
  )
}

export default Quantum;
