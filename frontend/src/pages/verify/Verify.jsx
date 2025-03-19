import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import "./verify.css";

const Verify = () => {
  const [code, setCode] = useState(new Array(6).fill("")); // Initialize state for 6 input fields

  const handleChange = (value, index) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    // Automatically focus the next input field
    if (value && index < 5) {
      document.getElementById(`code-${index + 1}`).focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const verificationCode = code.join(""); // Combine the 6 digits into a single string
    console.log("Verification Code:", verificationCode);
    // Add logic to verify the code
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
        </form>
      </div>
    </>
  );
};

export default Verify;