import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import './Pyq.css'; 
import {Link} from 'react-router-dom';

function Pyq() {
  const yearFiles = [
    {
      year: '1st',
      oddSemesters: {
        subjects: [
          { name: 'Mathematics', files: ['1sem_mathematics.pdf', 'Nodejs Notes.pdf'] },
          { name: 'Physics', files: ['1sem_physics.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Chemistry', files: ['2sem_chemistry.pdf'] },
          { name: 'Biology', files: ['2sem_biology.pdf'] }
        ]
      }
    },
    {
      year: '2nd',
      oddSemesters: {
        subjects: [
          { name: 'Computer Science', files: ['3rdsem.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Electronics', files: ['4thsem_electronics.pdf'] }
        ]
      }
    },
    {
      year: '3rd',
      oddSemesters: {
        subjects: [
          { name: 'Data Structures', files: ['5thsem.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Operating Systems', files: ['6thsem_operating_systems.pdf', 'os 23-24.pdf'] },
          { name: 'Networks', files: ['6thsem_networks.pdf'] }
        ]
      }
    },
    {
      year: '4th',
      oddSemesters: {
        subjects: [
          { name: 'Software Engineering', files: ['7thsem_software_engineering.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Machine Learning', files: ['8thsem_machine_learning.pdf'] }
        ]
      }
    }
  ];

  // Function to handle file download
  const downloadFile = (filePath) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${filePath}`;
    const file = filePath.split('/').pop();
    link.setAttribute('download', file);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (filePath) => {
    downloadFile(filePath);
  };

  const { id } = useParams(); 
  const yearItem = yearFiles.find((item) => item.year === id);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const yearLink={"1st":"/fstyear","2nd":"/sndyear","3rd":"/trdyear","4th":"/fothyear"};

  return (
    <div className="page-container">
      <Link to={yearLink[yearItem.year]} className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
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
      <div className="container-pyq">
        <h2 className='head'>Download Previous Year Questions</h2>
        {yearItem && <h3 className='year-heading'>{yearItem.year} Year</h3>}
        <div className="content-container">
          <div className="pyq-box">
            {!selectedSemester ? (
              <div className="semester-selection">
                <button className="semester-button" onClick={() => setSelectedSemester('odd')}>Odd Semester</button>
                <button className="semester-button" onClick={() => setSelectedSemester('even')}>Even Semester</button>
              </div>
            ) : (
              yearItem ? (
                <div className="semester-container">
                  <div className="subjects-container">
                    {selectedSemester === 'odd' ? yearItem.oddSemesters.subjects.map((subject, subjIndex) => (
                      <div key={subjIndex} className="subject-box">
                        <h4 className="subject-title">{subject.name}</h4>
                        <ul>
                          {subject.files.map((file, fileIndex) => (
                            <li key={fileIndex} className="file-item">
                              <span>{file}</span>
                              <button className="download-button" onClick={() => handleDownload(`pyqs/${yearItem.year}Year/${file}`)}>Download</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )) : yearItem.evenSemesters.subjects.map((subject, subjIndex) => (
                      <div key={subjIndex} className="subject-box">
                        <h4 className="subject-title">{subject.name}</h4>
                        <ul>
                          {subject.files.map((file, fileIndex) => (
                            <li key={fileIndex} className="file-item">
                              <span>{file}</span>
                              <button className="download-button" onClick={() => handleDownload(`pyqs/${yearItem.year}Year/${file}`)}>Download</button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                 
                  <button className="back-button" onClick={() => setSelectedSemester(null)}>Back to Semester Selection</button>
                </div>
              ) : (
                <p>Year data not found.</p>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Pyq;
