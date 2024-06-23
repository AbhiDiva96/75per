// src/BackButton/backbutton.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './backbutton.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const BackButton = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <div className="back-button" onClick={goBack}>
            <i className="fas fa-arrow-left"></i>
        </div>
    );
};

export default BackButton;
