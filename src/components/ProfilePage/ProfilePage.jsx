import React, { useState, useContext, useEffect, useRef } from "react";
import { ToastContainer, toast } from 'react-toastify';
import { Link } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import './ProfilePage.css';
import { ThemeContext } from "../../Content/context";
import MyChatbot from "../ChatBot/chatbot";

const ProfilePage = () => {
  const { theme } = useContext(ThemeContext);
  const fileInputRef = useRef(null);

  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem('profileData');
    return savedData ? JSON.parse(savedData) : {
      name: 'John Doe',
      email: 'john.doe@example.com',
      bio: 'I love coding and exploring new technologies!',
      avatar: null
    };
  });

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    localStorage.setItem('profileData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let errors = [];

    if (!formData.name) errors.push('Name is required.');
    if (!emailRegex.test(formData.email)) errors.push('Invalid Email Address.');
    if (!formData.bio) errors.push('Bio is required.');

    if (errors.length > 0) {
      errors.forEach(error => toast.error(error));
      return;
    }

    toast.success("Profile updated successfully!");
    setIsEditing(false);
  };

  const handleAvatarChange = (e) => {
    if (isEditing) {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, avatar: reader.result });
        };
        reader.readAsDataURL(file);
      }
    }
  };

  const triggerFileInput = () => {
    if (isEditing) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`profile-page ${theme === 'dark' ? "dark-theme" : "light-theme"}`}>
      <Link to="/" className="back-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="currentColor" viewBox="0 0 16 16" style={{ fontWeight: 'bold', position: 'fixed', top: '20px', left: '20px' }}>
          <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"></path>
        </svg>
      </Link>

      <div className="profile-container">
        <div className="profile-header">
          <h1>Your Profile</h1>
          <button onClick={() => setIsEditing(!isEditing)} className="edit-button">
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>
        </div>

        <div className="avatar-container">
          {formData.avatar ? (
            <img src={formData.avatar} alt="Profile Avatar" className="avatar" />
          ) : (
            <div className="avatar-placeholder">
              <span>{formData.name.charAt(0)}</span>
            </div>
          )}
          {isEditing && (
            <button onClick={triggerFileInput} className="change-avatar-button">
              Change Avatar
            </button>
          )}
          <input 
            type="file" 
            ref={fileInputRef}
            accept="image/*" 
            onChange={handleAvatarChange} 
            className="avatar-input" 
            style={{ display: 'none' }}
          />
        </div>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              id="name"
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              disabled={!isEditing}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input  
              type="email" 
              id="email"
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              disabled={!isEditing}
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea 
              id="bio"
              name="bio" 
              value={formData.bio} 
              onChange={handleChange} 
              disabled={!isEditing}
              required 
            />
          </div>
          {isEditing && (
            <button type="submit" className="save-button">Save Profile</button>
          )}
        </form>
      </div>
      <ToastContainer />
      <MyChatbot />
    </div>
  );
};

export default ProfilePage;