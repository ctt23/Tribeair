import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./verify.css";
import { useLocation } from "react-router-dom";
import { supabase } from '../../supabase';

const Verify = () => {
  const [code, setCode] = useState(new Array(6).fill("")); // Initialize state for 6 input fields
  const [error, setError] = useState(null); // To handle any errors
  const location = useLocation();
  const email = location.state?.email; // Get the email from the state

  const handleChange = (value, index) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Automatically focus the next input field
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const verificationCode = code.join(""); // Combine the 6 digits into a single string
    console.log("Verification Code:", verificationCode);

    try {
      const { data, error } = await supabase.auth.verifyOtp({
        email: email,
        token: verificationCode,
        type: 'email',
      });

      if (error) {
        setError(error.message);
      } else {
        console.log("OTP verified successfully!");
        console.log("Session:", data.session);
        // Handle successful login (e.g., redirect to a protected route)
        // You can use data.session to authenticate the user
      }
    } catch (error) {
      setError(error.message);
    }
  };

  const isButtonDisabled = code.some((digit) => !digit); // Disable the button if any input field is empty

  return (
    <>
      <Navbar showButtons={false} />
      <div className="verifyContainer">
        <h1 className="verifyTitle">Verify your email address</h1>
        <form onSubmit={handleSubmit} className="verifyForm">
          <label className="formLabel">
            We’ve sent a verification code to your email address. Please enter this code to continue.
          </label>
          <div className="codeInputContainer">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                id={`code-${index}`}
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(e.target.value, index)}
                className="codeInput"
              />
            ))}
          </div>
          <button
            type="submit"
            className={`verifyButton ${isButtonDisabled ? "disabled" : ""}`}
            disabled={isButtonDisabled}
          >
            Verify email
          </button>
          {error && <div style={{ color: 'red' }}>{error}</div>}
        </form>
      </div>
    </>
  );
};

export default Verify;
