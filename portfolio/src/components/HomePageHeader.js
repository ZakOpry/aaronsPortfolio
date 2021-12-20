import React from "react";
import "../styles/HomePageStyles.css";
import headerVid from "../videos/Loopforheader.mp4";

export default function HomePageHeader() {
  return (
    <div className="headerVidDiv">
      <video id="headerVideo" autoPlay muted loop playsInLine>
        <source src={headerVid} type="video/mp4" />
      </video>
      <div className="caption">
        <h1>Tug Films.</h1>
      </div>
    </div>
  );
}
