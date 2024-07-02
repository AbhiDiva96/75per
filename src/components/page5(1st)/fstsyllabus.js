import React from "react";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import '../page4/syllabus.css';
import {Link} from 'react-router-dom';
import MyChatbot from "../ChatBot/chatbot";

const fstsyllabus = () => {
  // const [selectSem, setSelectSem] = useState(null);

  const handleDownload = (syllabus) => {
    const syllabusFilePath =
      process.env.PUBLIC_URL + `/syllabus/${syllabus}.pdf`;

    const link = document.createElement("a");
    link.href = syllabusFilePath;
    link.download = `syllabus${syllabus}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
      <h2 className="head">Download Syllabus</h2>

      <div className="ag-format-container">
        <div className="ag-courses_box">
          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="ag-courses-item_title">Semester 1st</div>
              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("1stsem")}>
                    Download
                  </button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div
                className="ag-courses-item_title check"
                style={{
                  boxShadow: "none",
                  background: "transparent !important",
                }}
              >
                Semester 2nd
              </div>
              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("2ndsem")}>
                    Download
                  </button>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer /> <MyChatbot />
    </div>
  );
};

export default fstsyllabus;
