// src/About.js
import React, { useContext } from 'react';
import './about.css';
import Header from '../../pages/header';
import image from '../../assets/book.png'
import resource from '../../assets/resource.png'
import benefit from '../../assets/benefits.png'
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Content/context';
import MyChatbot from '../ChatBot/chatbot';

// import sun from './images/sun.png'; // Example image import
// import moon from './images/moon.png'; // Example image import

const About = () => {
  let {theme}=useContext(ThemeContext)
  if(theme=='dark'){
    document.getElementsByTagName('body')[0].classList.toggle('active')
  }
    return (
     <>
     <Header />
        <div className='head-container'>
          <h1>About Us</h1>
        </div>
     <Link to="/" className="back-icon" style={{ position: 'absolute', top: '75px !important', left: '35px', fontSize: '42px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="42" 
          height="42" 
          fill="currentColor" 
          viewBox="0 0 16 16" 
          style={{ 
            fontWeight: 'bold',
            position: 'fixed', 
            top: 139, 
            left: 20
          }}
        >
          <path 
            fillRule="evenodd" 
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </Link>
     
        <div class="main">
        
        <div class="start">
            <div class="img-container">
                <img class="about_logo" src={image}/>
            </div>
            <div class="text-container">
                <h1 class="text-title">What is 75%?</h1>
                <p class="text-desc">
                Welcome to 75per, the ultimate destination for all your study resource needs. Our platform is designed to provide you with comprehensive and high-quality materials, ensuring you have everything required to excel academically. With our resources, you can confidently aim to top your exams and achieve outstanding scores. Our mission is to support your educational journey, making it easier and more efficient to access the best study materials in one convenient place. Experience unparalleled success with 75per, where your academic excellence is our priority.                </p>
            </div>
        </div>
        <div class="end">
            <div class="img-container">
                <img class="mission" src={resource}/>
            </div>
            <div class="text-container">
                <h1 class="text-title">Our Resource</h1>
                <p class="text-desc" > 
                At 75per, we offer an extensive collection of resources tailored for students across all academic years: 1st, 2nd, 3rd, and 4th. Our repository includes comprehensive quantum syllabi, past year question papers, engaging lecture videos, and a plethora of additional invaluable materials. Our aim is to equip you with everything you need to succeed academically, ensuring that you have access to top-notch study aids that facilitate better understanding and higher scores in your exams. Discover the ultimate study companion at 75per, where your educational journey is our top priority.

</p>
            </div>
        </div>
        <div class="start mb">
            <div class="img-container">
                <img class="benefit" src={benefit}/>
            </div>
            <div class="text-container">
                <h1 class="text-title">Benefits of HelpOps-Hub</h1>
                <ol class="text-desc">
                    <li><b>Comprehensive Coverage</b>: We offer expertly curated syllabi, past year questions, and engaging lecture videos. These high-quality materials are designed to enhance your learning experience and provide a deep understanding of the subjects.

</li>
                    <li><b>High-Quality Materials</b>: All your study materials are available in one place, saving you time and effort. You no longer need to search multiple sources for the information you need; it’s all here at 75per.

</li>
                    <li><b>Convenience</b>: With our extensive and well-organized resources, you can aim to top your exams and achieve outstanding scores. Our materials are geared towards helping you perform your best.

</li>
                    <li><b>Enhanced Performance</b>: We are dedicated to supporting your educational journey. Our platform is designed to make learning easier and more efficient, providing continuous support to help you succeed academically.

</li>
                  
                </ol>
            </div>
        </div>
    </div>
    <MyChatbot />
     </> 
    );
};

export default About;
