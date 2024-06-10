import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { FaArrowLeft } from "react-icons/fa"; // Import Font Awesome arrow left icon
import "./LoginSignup.css";
import {FaEye,FaEyeSlash} from 'react-icons/fa6'
const LoginSignup = () => {

const [state, setState] = useState("Sign Up");
const [isVisible, setIsVisible] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const handleSignInWithGoogle = () => {
    window.location.href = 'http://localhost:4000/auth/google'; // Redirect to the server route for Google OAuth login
  };

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const login = async () => {
    console.log("login");
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("Sign up");
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: 'application/form-data',
        'content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json()).then((data) => responseData = data)
    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace("/")
    }
    else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">

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
      
      <div className="loginsignup-cointainer">
     
 

        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <>
              <p className="label-login">Name</p>
              <input type="text" name="username" value={formData.username} onChange={ChangeHandler} placeholder="Your Name" /></>
          ) : (
            <></>
          )}
          <p className="label-login">Email</p>
          <input type="email" name="email" value={formData.email} onChange={ChangeHandler} placeholder="Email Address" />

          <p className="label-login">Password</p>
          <input type={`${isVisible?"text":"password"}`} name="password" value={formData.password} onChange={ChangeHandler} placeholder="Password" />
          {isVisible?<FaEye color="white" className={`${state=='Sign Up'?"eye1":"eye"}`} onClick={()=>setIsVisible(false)} />:<FaEyeSlash className={`${state=='Sign Up'?"eye1":"eye"}`} color="white" onClick={()=>setIsVisible(true)}/>}
          </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
        
          
         {state === "Login" ? "Login" : "Sign Up"}
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              SignIn
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Sign Up
            </span>
          </p>
        )}
        <div>
          {state === "Sign Up" ?
            <button onClick={handleSignInWithGoogle}>Sign Up with Google</button> :
            <button onClick={handleSignInWithGoogle}>Login with Google</button>}
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
