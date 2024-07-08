import React, { useContext } from "react";
import "./ContactUs.css";
import Header from "../../pages/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import Footer from "../../pages/footer";
import MyChatbot from "../ChatBot/chatbot";
import image from "../../assets/contact.png"
export default function ContactUs() {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact">
        <div className="image">
            <img src={image} alt="image"/>
        </div>
        <div className="contact-box">
          <p>Let's get in touch!</p>
          <div className="name">
          <FontAwesomeIcon icon={faUser} />
            <input type="text" placeholder="username" id="name" />
          </div>
          <div className="email">
          <FontAwesomeIcon icon={faEnvelope} />
            <input type="email" placeholder="email" id="email" />
          </div>
          <div className="message-box">
            <textarea
              placeholder="message"
              id="message-box"
              cols="30"
              rows="10"
            ></textarea>
          </div>
          <div className="button">
            <button onclick="message()">send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
