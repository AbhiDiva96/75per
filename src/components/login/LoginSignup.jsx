import React, { useState } from "react";
import styles from "./LoginSignup.module.css";

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleSignInWithGoogle = () => {
    window.location.href = 'http://localhost:4000/auth/google'; // Redirect to the server route for Google OAuth login
  };

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidUsername = (username) => { 
    const regex = /^[a-zA-Z0-9_]{3,15}$/;  
    return regex.test(username);
  };

  const login = async () => {
    console.log("login");
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => responseData = data)
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  
    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem('username', responseData.username); // Store username
      window.location.replace("/");
    } else if (responseData) {
      setError(responseData.errors);
    }
  };
  
  const signup = async () => {
    console.log("Sign up");
    setError("");
  
    if (!isValidUsername(formData.username)) {
      setError("Invalid username. It must be 3-15 characters long and can contain only letters, numbers, and underscores.");
      return;
    }
  
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => response.json())
      .then((data) => responseData = data)
      .catch((error) => {
        setError("An error occurred. Please try again.");
      });
  
    if (responseData && responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      localStorage.setItem('username', formData.username); // Store username
      window.location.replace("/");
    } else if (responseData) {
      setError(responseData.errors);
    }
  };
  
  

  return (
    <div className={styles.loginsignup}>
      <div className={styles["loginsignup-container"]}>
        <h1>{state}</h1>
        <div className={styles["loginsignup-fields"]}>
          {state === "Sign Up" ? (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={ChangeHandler}
              placeholder="Your Name"
              className={styles.input}
            />
          ) : null}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={ChangeHandler}
            placeholder="Email Address"
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={ChangeHandler}
            placeholder="Password"
            className={styles.input}
          />
        </div>
        <button
          onClick={() => {
            state === "Login" ? login() : signup();
          }}
        >
          Continue
        </button>
        {error && <p className={styles["loginsignup-error"]}>{error}</p>}
        {state === "Sign Up" ? (
          <p className={styles["loginsignup-login"]}>
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className={styles["loginsignup-login"]}>
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
              }}
            >
              Click Here
            </span>
          </p>
        )}
        <div>
          <button className={styles["google-signin"]} onClick={handleSignInWithGoogle}>
            {state === "Sign Up" ? "Sign Up with Google" : "Login with Google"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
