import React from "react";
import { Link } from "react-router-dom";
import "../styles/HomePageStyles.css";

export default function HomePageMiddle() {
  return (
    <div className="overallMiddlePage">
      <div className="midPageContent">
        <div className="midPageTitles">
          <h1>Weddings. Ceremonies. Receptions.</h1>
        </div>
        <div className="midPageBody">
          <h2 className="planningForDay">Planning your big day?</h2>
          <p>
            First off, we'd like to congratulate you on this special time in
            your life!
          </p>
          <p>
            Here at Tug Films, we know how important this moment is, and that's
            why we specialize in capturing it in a way that allows you to
            cherish and relive it over and over.
          </p>
          <p>
            We are an experienced videography and editing company with weddings
            in mind! We're located in the Lafayette area and serve all
            surrounding areas.
          </p>
          <p>
            We use top notch equipment to ensure nothing but quality so you can
            enjoy your big day knowing Tug Films is capturing it all!
          </p>
          <p>Check out some of our latest work below!</p>
        </div>
        <div className="videoDiv">
          <iframe
            title="theVideo"
            className="weddingVid"
            src="https://drive.google.com/file/d/1iv5Jt0doAc3RaCrq0SzntyoTD_EJYiCw/preview"
            width="640"
            height="480"
            allow="autoplay"
          ></iframe>
        </div>
        <div className="midPageLinks">
          <p className="pTag">
            For package details and pricing, please see our
            <Link className="lowerPageLink" to="/packages">
              "Packages"
            </Link>
            page, or contact me here{" "}
            <Link className="lowerPageLink" to="/contact">
              "Contact"
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
