import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

const Navbar = () => {
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

      <div className="HamburgerMenu">
        <MenuOutlinedIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Navbar;
