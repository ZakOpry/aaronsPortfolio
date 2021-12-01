import React from "react";
import "../styles/HomePageStyles.css";
import HomePageHeader from "./HomePageHeader";
import HomePageMiddle from "./HomePageMiddle";

export default function HomePage() {
  return (
    <div className="homePageMainDiv">
      <HomePageHeader />
      <HomePageMiddle />
    </div>
  );
}
