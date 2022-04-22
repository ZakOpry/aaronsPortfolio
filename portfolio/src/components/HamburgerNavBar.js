import React from "react";
import "../styles/HamburgerNavBarStyles.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
export default function HamburgerNavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="mainMobileNavBarDiv">
        <div className="menuDiv" onClick={() => setMenuOpen(!menuOpen)}>
          <IconContext.Provider value={{ className: "menuIcon" }}>
            <AiOutlineMenu />
          </IconContext.Provider>
        </div>
      </div>

      {menuOpen ? (
        <div className="dropDown">
          <Link onClick={() => setMenuOpen(!menuOpen)} className="link" to="/">
            <div className="navBarButton" id="home">
              <h3>Home</h3>
            </div>
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            to="/packages"
          >
            <div className="navBarButton" id="dropDownProjects">
              <h3>Packages</h3>
            </div>
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            to="/about"
          >
            <div className="navBarButton" id="dropDownContact">
              <h3>About</h3>
            </div>
          </Link>
          <Link
            onClick={() => setMenuOpen(!menuOpen)}
            className="link"
            to="/contact"
          >
            <div className="navBarButton" id="dropDownContact">
              <h3>Contact</h3>
            </div>
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
