// src/components/ScrollToTopButton.js
import React, { useState, useEffect } from 'react';
import './ScrollToTopButton.css'; // Create a CSS file for styling
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down
    const toggleVisibility = () => {
        if (window.scrollY > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top">
            {isVisible && (

                < FaArrowCircleUp onClick={scrollToTop} className="scroll-to-top-button" />
                // <button onClick={scrollToTop} className="scroll-to-top-button">

                // </button>
            )}
        </div>
    );
};

export default ScrollToTopButton;
