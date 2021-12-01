import React from "react";
import { Link } from "react-router-dom";

export default function TopNavBarComponents() {
  return (
    <div className="navBarComponentsMainDiv">
      <Link className="link" to="/">
        <div className="navCompDiv" id="home">
          <h1>Home</h1>
        </div>
      </Link>
      <Link className="link" to="packages">
        <div className="navCompDiv" id="pricing">
          <h1>Packages</h1>
        </div>
      </Link>
      <Link className="link" to="about">
        <div className="navCompDiv" id="about">
          <h1>About</h1>
        </div>
      </Link>
      <Link className="link" to="contact">
        <div className="navCompDiv" id="contact">
          <h1>Contact</h1>
        </div>
      </Link>
    </div>
  );
}
