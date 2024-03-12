import React from "react";
import JaiImage from "../assets/Jai.png";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="Home">
      <div className="Image">
        <img alt="Jai Madera" src={JaiImage} className="Photo" />
      </div>
      <div className="Details">
        <p className="HTitle">Hello</p>
        <p className="HSubTitle">A Bit About Me</p>
        <p className="HParagraph">
          I'm a paragraph. Click here to add your own text and edit me. I’m a
          great place for you to tell a story and let your users know a little
          more about you.
        </p>
        <div className="HLinks">
          <Link className="HLink yellow" to="/resume">
            Resume
          </Link>
          <Link className="HLink red" to="/projects">
            Projects
          </Link>
          <Link className="HLink cyan" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
