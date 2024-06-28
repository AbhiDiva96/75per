import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DownloadIcon from '@mui/icons-material/Download';
import './Pyq.css'; 
import {Link} from 'react-router-dom';
import MyChatbot from '../ChatBot/chatbot';


function Pyq() {
  const yearFiles = [
    {
      year: '1st',
      oddSemesters: {
        subjects: [
          { name: 'Engineering Chemistry', files: ['1sem_physics_chemistry.pdf'] },
          { name: 'Engineering Mathematics-I', files: ['1sem_mathematics.pdf'] },
          { name: 'Emerging Domain in Electronics Engineering', files: ['1sem_electrical_electronics.pdf'] },
          { name: 'Fundamentals of Mechanical Engineering & Mechatronics', files: ['1sem_programming_mechanical.pdf'] },
          { name: 'Engineering Chemistry Lab', files: ['1sem_physics_chemistry_lab.pdf'] },
          { name: 'Electronics Engineering Lab', files: ['1sem_electrical_electronics_lab.pdf'] },
          { name: 'English Language Lab', files: ['1sem_programming_english_lab.pdf'] },
          { name: 'Mechanical Workshop Lab', files: ['1sem_graphics_mechanical_lab.pdf'] },
          { name: 'Emerging Technology for Engineering', files: ['1sem_Emerging_technology.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Engineering Physics', files: ['1sem_physics_chemistry.pdf'] },
          { name: 'Engineering Mathematics-I', files: ['1sem_mathematics.pdf'] },
          { name: 'Basic Electrical Engineering', files: ['1sem_electrical_electronics.pdf'] },
          { name: 'Programming for Problem Solving ', files: ['1sem_programming_mechanical.pdf'] },
          { name: 'Engineering Physics Lab', files: ['1sem_physics_chemistry_lab.pdf'] },
          { name: 'Basic Electrical Engineering Lab', files: ['1sem_electrical_electronics_lab.pdf'] },
          { name: 'Programming for Problem Solving ', files: ['1sem_programming_english_lab.pdf'] },
          { name: 'Engineering Graphics & Design Lab', files: ['1sem_graphics_mechanical_lab.pdf'] },
          { name: 'AI For Engineering', files: ['1sem_ai_technology.pdf'] }
        ]
      }
    },
    {
      year: '2nd',
      oddSemesters: {
        subjects: [
          { name: 'Data Structure', files: ['3rdsem_data_structure.pdf'] },
          { name: 'Computer Organization and Architecture', files: ['3rdsem_computer_organization.pdf'] },
          { name: 'Discrete Structures & Theory of Logic', files: ['3rdsem_discrete_structures.pdf'] },
          { name: 'Data Structures Using C Lab', files: ['3rdsem_data_structures_lab.pdf'] },
          { name: 'Computer Organization Lab', files: ['3rdsem_computer_organization_lab.pdf'] },
          { name: 'Discrete Structure & Logic Lab', files: ['3rdsem_discrete_logic_lab.pdf'] },
          { name: 'Mini Project or Internship Assessment', files: ['3rdsem_mini_project.pdf'] },
          { name: 'Computer System Security/Python Programming', files: ['3rdsem_security_python.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Maths IV/Engg. Science Course', files: ['4thsem_maths_science.pdf'] },
          { name: 'Universal Human Values/ Technical Communication', files: ['4thsem_human_values_communication.pdf'] },
          { name: 'Operating Systems', files: ['4thsem_operating_systems.pdf'] },
          { name: 'Theory of Automata and Formal Languages', files: ['4thsem_automata.pdf'] },
          { name: 'Microprocessor', files: ['4thsem_microprocessor.pdf'] },
          { name: 'Operating Systems Lab', files: ['4thsem_os_lab.pdf'] },
          { name: 'Microprocessor Lab', files: ['4thsem_microprocessor_lab.pdf'] },
          { name: 'Python Language Programming Lab', files: ['4thsem_python_lab.pdf'] },
          { name: 'Computer System Security/Python Programming', files: ['4thsem_python_security.pdf'] }
        ]
      }
    },
    {
      year: '3rd',
      oddSemesters: {
        subjects: [
          { name: 'Database Management System', files: ['5thsem_dbms.pdf'] },
          { name: 'Compiler Design', files: ['5thsem_compiler_design.pdf'] },
          { name: 'Design and Analysis of Algorithm', files: ['5thsem_daa.pdf'] },
          { name: 'Departmental Elective-I', files: ['5thsem_dept_elective1.pdf'] },
          { name: 'Departmental Elective-II', files: ['5thsem_dept_elective2.pdf'] },
          { name: 'Database Management System Lab', files: ['5thsem_dbms_lab.pdf'] },
          { name: 'Compiler Design Lab', files: ['5thsem_compiler_design_lab.pdf'] },
          { name: 'Design and Analysis of Algorithm Lab', files: ['5thsem_daa_lab.pdf'] },
          { name: 'Mini Project or Internship Assessment', files: ['5thsem_mini_project.pdf'] },
          { name: 'Constitution of India, Law and Engineering / Indian Tradition, Culture and Society', files: ['5thsem_constitution_india.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'Software Engineering', files: ['6thsem_software_engineering.pdf'] },
          { name: 'Web Technology', files: ['6thsem_web_technology.pdf'] },
          { name: 'Computer Networks', files: ['6thsem_computer_networks.pdf'] },
          { name: 'Departmental Elective-III', files: ['6thsem_dept_elective3.pdf'] },
          { name: 'Open Elective-I', files: ['6thsem_open_elective1.pdf'] },
          { name: 'Software Engineering Lab', files: ['6thsem_software_engineering_lab.pdf'] },
          { name: 'Web Technology Lab', files: ['6thsem_web_technology_lab.pdf'] },
          { name: 'Computer Networks Lab', files: ['6thsem_computer_networks_lab.pdf'] },
          { name: 'Constitution of India, Law and Engineering / Indian Tradition, Culture and Society', files: ['6thsem_constitution_india.pdf'] }
        ]
      }
    },
    {
      year: '4th',
      oddSemesters: {
        subjects: [
          { name: 'HSMC-1/HSMC-2', files: ['7thsem_hsmc.pdf'] },
          { name: 'Departmental Elective-IV', files: ['7thsem_dept_elective4.pdf'] },
          { name: 'Departmental Elective-V', files: ['7thsem_dept_elective5.pdf'] },
          { name: 'Open Elective-II', files: ['7thsem_open_elective2.pdf'] },
          { name: 'Mini Project or Internship Assessment', files: ['7thsem_mini_project.pdf'] },
          { name: 'Project', files: ['7thsem_project.pdf'] },
          { name: 'MOOCs (Essential for Hons. Degree)', files: ['7thsem_moocs.pdf'] }
        ]
      },
      evenSemesters: {
        subjects: [
          { name: 'HSMC-1/HSMC-2', files: ['8thsem_hsmc.pdf'] },
          { name: 'Departmental Elective-IV', files: ['8thsem_dept_elective4.pdf'] },
          { name: 'Departmental Elective-V', files: ['8thsem_dept_elective5.pdf'] },
          { name: 'Open Elective-II', files: ['8thsem_open_elective2.pdf'] },
          { name: 'Mini Project or Internship Assessment', files: ['8thsem_mini_project.pdf'] },
          { name: 'Project', files: ['8thsem_project.pdf'] },
          { name: 'MOOCs (Essential for Hons. Degree)', files: ['8thsem_moocs.pdf'] }
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

  const viewFile = (filePath) => {
    const link = document.createElement('a');
    link.href = `${process.env.PUBLIC_URL}/${filePath}`;
    link.setAttribute('target', '_blank');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleDownload = (filePath) => {
    downloadFile(filePath);
  };

  const handleView = (filePath) => {
    viewFile(filePath);
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
        <h2 className="year-heading">Download Previous Year Questions - {id} Year</h2>
        <div className="content-container">
          <div className="pyq-box">
            {!selectedSemester ? (
              <div className="semester-selection">
                <div className="semester-card" onClick={() => setSelectedSemester('odd')}>Odd Semester</div>
                <div className="semester-card" onClick={() => setSelectedSemester('even')}>Even Semester</div>
              </div>
            ) : (
              yearItem ? (
                <div className="semester-container">
                  <button className="back-btn" onClick={() => setSelectedSemester(null)}>
                    <i className="back-icon">&larr;</i> Back 
                  </button>
                  
                  <div className="subjects-container">
                    {selectedSemester === 'odd' ? yearItem.oddSemesters.subjects.map((subject, subjIndex) => (
                      <div key={subjIndex} className="subject-box">
                       <div className='subject-title-container'> <h4 className="subject-title">{subject.name}</h4> </div>
                        
                          {subject.files.map((file, fileIndex) => (
                            <div key={fileIndex} className="file-item">
                              {/* <span>{file}</span> */}
                              <div className="file-actions">
                                <div className="icon-container" onClick={() => handleView(`pyqs/${yearItem.year}Year/${file}`)}>
                                  <VisibilityIcon className="icon" />
                                  {/* <span className="icon-label">View</span> */}
                                </div>
                                <div className="icon-container" onClick={() => handleDownload(`pyqs/${yearItem.year}Year/${file}`)}>
                                  <DownloadIcon className="icon" />
                                  {/* <span className="icon-label">Download</span> */}
                                </div>
                              </div>
                              {subject.files.length > 1 && fileIndex < subject.files.length - 1 && <hr className="file-divider" />}
                            </div>
                          ))}
                     
                      </div>
                    )) : yearItem.evenSemesters.subjects.map((subject, subjIndex) => (
                      <div key={subjIndex} className="subject-box">
                       <div className='subject-title-container'> <h4 className="subject-title">{subject.name}</h4> </div>
                  
                          {subject.files.map((file, fileIndex) => (
                            <div key={fileIndex} className="file-item">
                            {/* <span>{file}</span> */}
                            <div className="file-actions">
                              <div className="icon-container" onClick={() => handleView(`pyqs/${yearItem.year}Year/${file}`)}>
                                <VisibilityIcon className="icon" />
                                {/* <span className="icon-label">View</span> */}
                              </div>
                              <div className="icon-container" onClick={() => handleDownload(`pyqs/${yearItem.year}Year/${file}`)}>
                                <DownloadIcon className="icon" />
                                {/* <span className="icon-label">Download</span> */}
                              </div>
                            </div>
                            {subject.files.length > 1 && fileIndex < subject.files.length - 1 && <hr className="file-divider" />}
                          </div>
                          ))}
                       
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <p>Year data not found.</p>
              )
            )}
          </div>
        </div>
      </div>
      <Footer /> <MyChatbot />
    </div>
  );
}

export default Pyq;