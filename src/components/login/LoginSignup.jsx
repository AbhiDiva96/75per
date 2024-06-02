import React, { useState } from "react";
import "./LoginSignup.css";

const LoginSignup = () => {
  const [state, setState] = useState("Sign Up");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [errors, setErrors] = useState({});

  const handleSignInWithGoogle = () => {
    window.location.href = 'http://localhost:4000/auth/google'; // Redirect to the server route for Google OAuth login
  };

  const ChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error message on field change
  }

  const validateForm = () => {
    let formErrors = {};
    if (state === "Sign Up" && !formData.username) formErrors.username = "Please fill in your name.";
    if (!formData.email) formErrors.email = "Please fill in your email.";
    if (!formData.password) formErrors.password = "Please fill in your password.";
    return formErrors;
  }

  const handleSubmit = async () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      if (state === "Login") {
        login();
      } else {
        signup();
      }
    }
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
    }).then((response) => response.json()).then((data) => responseData = data);
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
    }).then((response) => response.json()).then((data) => responseData = data);
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
      <div className="loginsignup-cointainer">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "Sign Up" ? (
            <div>
              <input type="text" name="username" value={formData.username} onChange={ChangeHandler} placeholder="Your Name" />
              {errors.username && <p style={{width:'200px'}}className="error-message">{errors.username}</p>}
            </div>
          ) : (
            <></>
          )}
          <div>
            <input type="email" name="email" value={formData.email} onChange={ChangeHandler} placeholder="Email Address" />
            {errors.email && <p style={{width:'200px'}}className="error-message">{errors.email}</p>}
          </div>
          <div>
            <input type="password" name="password" value={formData.password} onChange={ChangeHandler} placeholder="Password" />
            {errors.password && <p style={{width:'200px'}}className="error-message">{errors.password}</p>}
          </div>
        </div>
        <button
          onClick={handleSubmit}
        >
          Continue
        </button>
        {state === "Sign Up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span
              onClick={() => {
                setState("Login");
                setErrors({});
              }}
            >
              Login Here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span
              onClick={() => {
                setState("Sign Up");
                setErrors({});
              }}
            >
              Click Here
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
