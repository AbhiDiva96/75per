// LectureSkeleton.jsx
import React from 'react';
import './lectureSkeleton.css';

function LectureSkeleton() {
  return (
    <div className="skeleton-box">
      <div className="skeleton-img"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-link"></div>
    </div>
  );
}

export default LectureSkeleton;
