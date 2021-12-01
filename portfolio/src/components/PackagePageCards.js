import React from "react";
import "../styles/PackagePageStyles.css";

export default function PackagePageCards(props) {
  const details = props.package;

  return (
    <div className="card">
      <div className="titleDiv">
        <h1 className="packageTitle">{details.package}</h1>
      </div>
      <div className="priceDiv">
        <h2 className="price">{details.price}</h2>
      </div>
      <div className="bodyDetsDiv">
        {details.body.map((dets) => (
          <p className="bodyDetailsPtags">{dets}</p>
        ))}
      </div>
    </div>
  );
}
