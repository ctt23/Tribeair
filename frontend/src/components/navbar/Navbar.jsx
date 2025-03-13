import "./navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";



const Navbar = ({ showButtons = true }) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo">Tribeair</span>
        {showButtons && (
          <div className="navItems">
            <button className="navButton noBackground" onClick={handleNavigation}>Tribeair your adventure</button>
            <button className="navButton" onClick={handleNavigation}>Register</button>
            <button className="navButton" onClick={handleNavigation}>Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;