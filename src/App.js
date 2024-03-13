import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Resume from "./components/Resume";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleHamburgerMenu = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  return (
    <div className="App">
      <Navbar
        hamburgerMenu={hamburgerMenu}
        handleHamburgerMenu={handleHamburgerMenu}
      />
      <Routes>
        <Route path="/*" element={<Home hamburgerMenu={hamburgerMenu} />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
