import React from 'react';
import './SkeletonLoader.css';

const SkeletonLoader = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-heading"></div>
      <div className="skeleton-semester">
        <div className="skeleton-semester-card"></div>
        <div className="skeleton-semester-card"></div>
      </div>
      <div className="skeleton-subject">
        <div className="skeleton-subject-box">
          <div className="skeleton-subject-title"></div>
          <div className="skeleton-file"></div>
          <div className="skeleton-file"></div>
        </div>
        <div className="skeleton-subject-box">
          <div className="skeleton-subject-title"></div>
          <div className="skeleton-file"></div>
          <div className="skeleton-file"></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
