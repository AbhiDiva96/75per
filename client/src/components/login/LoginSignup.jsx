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
    window.location.href = 'http://localhost:8000/auth/google'; // Redirect to the server route for Google OAuth login
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
    setError(""); // Reset error message before new request
    try {
      const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log(data.success)
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('username', data.username); // Store username
        window.location.replace("/");
      } else {
        setError(data.errors || "Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Invalid credentials!.");
    }
  };
  
  const signup = async () => {
    console.log("Sign up");
    setError("");

    if (!isValidUsername(formData.username)) {
      setError("Invalid username. It must be 3-15 characters long and can contain only letters, numbers, and underscores.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/signup", {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        localStorage.setItem('username', formData.username); // Store username
        window.location.replace("/");
      } else {
        setError(data.errors || "Email already exists");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("Email already exists");
    }
  };
  
  return (
    <div className={styles.loginsignup}>
      <div className={styles["loginsignup-container"]}>
        <h1 className={styles["headings"]}>{state}</h1>
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
            Create an account? {""}
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
