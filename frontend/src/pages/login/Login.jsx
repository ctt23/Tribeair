import React, { useState } from "react";
import "./login.css";
import Navbar from "../../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { supabase } from '../../supabase'; 

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null); // To handle any errors
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithOtp({
      email: email, // Use the user's email from state
      options: {
        shouldCreateUser: true, // Set to false if you don't want automatic signup
      },
    });

    if (error) {
      setError(error.message); 
    } else {
      console.log("OTP code sent successfully");
      alert("An OTP code has been sent to your email address. Please check your inbox.");
      navigate("/verify", { state: { email: email } }); // Redirect to the verify page with email
    }
  }; // <-- Added missing closing curly brace for handleSubmit

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
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Login;