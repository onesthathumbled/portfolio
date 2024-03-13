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
          I'm a seasoned software engineer excelling in innovative solutions,
          programming, and collaborative teamwork. Meticulous and
          deadline-driven, I stay updated on the latest technologies to deliver
          high-impact results aligned with company goals.
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
