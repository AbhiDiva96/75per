import React, { useState, useEffect, useContext } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom"; // Import Link
import { FaStar } from "react-icons/fa";
import 'react-toastify/dist/ReactToastify.css';
import './review.css';
import { ThemeContext } from "../../Content/context";
import MyChatbot from "../ChatBot/chatbot";

const ReviewPage = () => {
  const {theme}=useContext(ThemeContext)

  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: '',
    review: ''
  });

  useEffect(() => {
    setFormData({ ...formData, rating: rating });
  }, [rating]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!formData.name) {
      errors.push('Name is required.');
    }
    if (!emailRegex.test(formData.email)) {
      errors.push('Invalid Email Address.');
    }
    if (!formData.rating || isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
      errors.push('Rating must be a number between 1 and 5.');
    }
    if (!formData.review) {
      errors.push('Review is required.');
    }

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    toast.success("Thank you for your review!");

    // Clear the form fields
    setFormData({
      name: '',
      email: '',
      rating: '',
      review: ''
    });
    setRating(null);
  };

  return (
    <section className={`${theme=='dark'?"active":""} `}>

<Link to="/" className="back-icon" style={{ position: 'absolute', top: '15px', left: '35px', fontSize: '42px' }}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="42" 
          height="42" 
          fill="currentColor" 
          viewBox="0 0 16 16" 
          style={{ 
            fontWeight: 'bold',
            position: 'fixed', 
            top: 20, 
            left: 20
          }}
        >
          <path 
            fillRule="evenodd" 
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
          />
        </svg>
      </Link>

      <div className={`${theme=='dark'?"active":""} review-container`}>
        <div className="reviewInfo">
          <div>
            {/* Review info section */}
          </div>
        </div>
        <div>

        </div>
        <div className="reviewForm">
          <h1 style={{fontSize: '3rem', color: '#0f3959', fontWeight: '500'}}>Loved our site?</h1>
          <h2>Leave a Review</h2>
          <form onSubmit={handleSubmit}>
            <div className="formBox">
              <div className="inputBox w100">
              <label>Name</label>
                <input className="input-review" placeholder="Manav Malhotra" type="text" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="inputBox w100">
              <label>Email Address</label>
                <input  className="input-review" placeholder="manav@example.com" type="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <label>Rate Us</label>
              <div className="inputBox w100">
                {[...Array(5)].map((star, index) => {
                  const currentRating = index + 1;
                  return (
                    <label key={index}>
                      <input
                        type="radio"
                        name="rating"
                        value={currentRating}
                        onClick={() => setRating(currentRating)}
                      />
                      <FaStar
                        size={20}
                        color={currentRating <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                        onMouseEnter={() => setHover(currentRating)}
                        onMouseLeave={() => setHover(null)}
                      />
                    </label>
                  );
                })}
              </div>
              <div className="inputBox w100">
                <label>Your Feedback</label>
                <textarea placeholder="Tell us what you loved about our site" name="review" value={formData.review} onChange={handleChange} required />
              </div>
              <div className="inputBox w100">
                <input type="submit" value="Submit Review" />
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> <MyChatbot />
    </section>
  );
};
export default ReviewPage;