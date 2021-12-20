import React from "react";
import AboutPagePic from "./AboutPagePic";
import "../styles/AboutPageStyles.css";
import AboutPageBody from "./AboutPageBody";

export default function AboutPage() {
  return (
    <div className="entireAboutPageDiv">
      <AboutPagePic />
      <AboutPageBody />
    </div>
  );
}
