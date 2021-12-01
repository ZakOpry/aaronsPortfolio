import React from "react";
import PackagePageCards from "./PackagePageCards";
import "../styles/PackagePageStyles.css";
import { packageData } from "./PackageDetailsObject.js";
import PackagePageUpperPic from "./PackagePageUpperPic";

export default function PackagesPage() {
  console.log(packageData);
  return (
    <div className="overAllDiv">
      <PackagePageUpperPic />
      <div className="groupOfCardsDiv">
        {packageData.map((items) => (
          <PackagePageCards package={items} />
        ))}
        <h2 className="custom">Custom Packages Available Upon Request!</h2>
      </div>
    </div>
  );
}
