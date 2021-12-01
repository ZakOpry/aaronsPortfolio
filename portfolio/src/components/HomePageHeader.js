import React from "react";
import "../styles/HomePageStyles.css";
import headerVid from "../videos/Loopforheader.mp4";
import { useState } from "react";
import { useEffect } from "react";

export default function HomePageHeader() {
  const messages = ["Weddings", "Ceremonies.", "Receptions"];
  const [messageIndex, setMessageIndex] = useState();
  let x = 0;

  return (
    <div className="headerVidDiv">
      <video id="headerVideo" autoPlay muted loop>
        <source src={headerVid} type="video/mp4" />
      </video>
      <div className="caption">
        <h1>Weddings.</h1>
      </div>
    </div>
  );
}
