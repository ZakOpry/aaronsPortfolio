import React from "react";
import ContactPageForm from "./ContactPageForm";
import "../styles/ContactPageStyles.css";
import ContactPagePic from "./ContactPagePic";

export default function ContactPage() {
  return (
    <div className="entireContactPage">
      <ContactPagePic />
      <ContactPageForm />
    </div>
  );
}
