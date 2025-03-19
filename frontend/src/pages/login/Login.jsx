import React, { useState } from "react";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Email:", email);
    navigate("/verify"); // Redirect to the verify page    
  };

  return (
    <>
      <Navbar showButtons={false} />
      <div className="loginContainer">
        <h1 className="loginTitle">Login to access your account</h1>
        <form onSubmit={handleSubmit} className="loginForm">
            <label htmlFor="email" className="formLabel">Email address</label>
            <br /> {/* Add a line break to move the input below the label */}
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="formInput"
              placeholder="Enter your email address"
              required
            />
            <button type="submit" className="loginButton">Continue with email</button>
        </form>
      </div>
    </>
  );
};

export default Login;