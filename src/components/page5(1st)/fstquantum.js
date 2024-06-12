import React, { useState, useEffect } from 'react';
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
import {FaMagnifyingGlass } from 'react-icons/fa6'

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
      <Header />
      <div>
        <h2 className="quantum-head">1st year quantum book</h2>
        <div class='inputDiv1'>
        <FaMagnifyingGlass className='left'/>

<input
  type='text'
  className='inputField'
  placeholder='Search For Quantum ...'
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>
</div>
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
      </div>
    </div>
  );
}

export default Quantum;
