import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";

const Navbar = ({ hamburgerMenu, handleHamburgerMenu }) => {
  return (
    <div className="Navbar">
      <Link to="/" className="Logo">
        <div className="Circle"></div>
        <p className="Title">Jai Madera</p>
        <p className="SubTitle">Software Engineer</p>
      </Link>

      <div className="Links">
        {/* <Link to="/" className="Link">
          Home
        </Link> */}
        <Link to="/resume" className="Link">
          Resume
        </Link>
        <Link to="/projects" className="Link">
          Projects
        </Link>
        <Link to="/contact" className="Link">
          Contact
        </Link>
      </div>

      <div className="HamburgerMenu" onClick={handleHamburgerMenu}>
        {hamburgerMenu ? (
          <ClearOutlinedIcon fontSize="large" />
        ) : (
          <MenuOutlinedIcon fontSize="large" />
        )}
      </div>

      {hamburgerMenu && (
        <div className="Menu">
          <Link to="/resume" className="NLink" onClick={handleHamburgerMenu}>
            Resume
          </Link>
          <Link to="/projects" className="NLink" onClick={handleHamburgerMenu}>
            Projects
          </Link>
          <Link to="/contact" className="NLink" onClick={handleHamburgerMenu}>
            Contact
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
