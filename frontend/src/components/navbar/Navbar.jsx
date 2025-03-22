import "./navbar.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ showButtons = true }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logo" onClick={() => handleNavigation("/")}>Tribeair</span>
        {showButtons && (
          <div className="navItems">
            <button className="navButton noBackground" onClick={() => handleNavigation("/login")}>Tribeair your adventure</button>
            <button className="navButton" onClick={() => handleNavigation("/login")}>
              <FontAwesomeIcon icon={faUser} className="navIcon" /> Log in
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;