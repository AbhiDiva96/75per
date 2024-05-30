import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import './Pyq.css'; // Import the CSS file

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
          { name: 'Computer Science', files: ['3rdsem_computer_science.pdf'] }
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
          { name: 'Data Structures', files: ['5thsem_data_structures.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Operating Systems', files: ['6thsem_operating_systems.pdf' ,'os 23-24.pdf'] },
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

  return (
    <>
      <Header />
      <div className="container-pyq">
        <h2 className='head'>Download Previous Year Questions</h2>
        {yearItem && <h3 className='year-heading'>{yearItem.year} Year</h3>}
        <div className="ag-format-container">
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
                <p>No files available for this year or semester.</p>
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pyq;
