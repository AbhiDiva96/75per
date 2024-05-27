import React from 'react';
import Header from "../../pages/header";
import Footer from "../../pages/footer";


function Pyq() {
  const yearFiles = [
    { year: '1st', files: ['1sem.pdf', 'Nodejs Notes.pdf'] },
    { year: '2nd', files: ['3rdsem.pdf'] },
    { year: '3rd', files: ['5thsem.pdf'] },
    { year: '4th', files: ['7thsem.pdf'] }
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

  return (
    <>
      <Header />
      <h2 className='head'>Download Previous Year Questions</h2>
      <div className="ag-format-container">
        <div className="ag-courses_box">
          {yearFiles.map((yearItem, index) => (
            <div key={index} className="ag-courses_item">
              <a href="#" className="ag-courses-item_link">
                <div className="ag-courses-item_bg"></div>
                <div className="ag-courses-item_title">
                  {yearItem.year} Year
                </div>
                <div className="ag-courses-item_date-box">
                  <ul>
                    {yearItem.files.map((file, index) => (
                      <li key={index} className="file-item ag-courses-item_date">
                        <span>{file}</span>
                        <button onClick={() => handleDownload(`pyqs/${yearItem.year}Year/${file}`)}>Download</button>
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pyq;
