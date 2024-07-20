import React from "react";
import Header from "../../pages/header";
import Footer from "../../pages/footer";
import "../page4/syllabus.css";

const Syllabus = () => {
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

  const handleView = (syllabus) => {
    const syllabusFilePath =
      process.env.PUBLIC_URL + `/syllabus/${syllabus}.pdf`;

    window.open(syllabusFilePath, "_blank");
  };

  return (
    <div>
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
                  <button onClick={() => handleDownload("1stsem")}>Download</button>
                  <button onClick={() => handleView("1stsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 2nd</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("2ndsem")}>Download</button>
                  <button onClick={() => handleView("2ndsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 3rd</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("3rdsem")}>Download</button>
                  <button onClick={() => handleView("3rdsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 4th</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("4thsem")}>Download</button>
                  <button onClick={() => handleView("4thsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 5th</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("5thsem")}>Download</button>
                  <button onClick={() => handleView("5thsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 6th</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("6thsem")}>Download</button>
                  <button onClick={() => handleView("6thsem")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 7th</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("4thyrsyllabus")}>Download</button>
                  <button onClick={() => handleView("4thyrsyllabus")}>View</button>
                </span>
              </div>
            </a>
          </div>

          <div className="ag-courses_item">
            <a href="#" className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>

              <div className="ag-courses-item_title">Semester 8th</div>

              <div className="ag-courses-item_date-box">
                <span className="ag-courses-item_date">
                  <button onClick={() => handleDownload("4thyrsyllabus")}>Download</button>
                  <button onClick={() => handleView("4thyrsyllabus")}>View</button>
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Syllabus;
