import React from "react";
import "../styles/ContactPageStyles.css";

export default function ContactPageForm() {
  return (
    <div className="mainFormDiv">
      <h1 className="mainBodyWords">
        Please enter your name and email address below followed by your
        questions or inquries and I will get back with you.
      </h1>

      <form
        className="form"
        action="https://formsubmit.co/7ce96fda22c752dbb05cd139c06ee226"
        method="POST"
      >
        <input
          className="input"
          id="yourName"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <input
          className="input"
          id="yourEmail"
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <input
          className="input"
          id="yourNumber"
          type="text"
          name="number"
          placeholder="Phone Number"
          required
        />

        <textarea
          className="input"
          id="yourMessage"
          rows="9"
          cols="45"
          resize
          name="message"
          placeholder="Your Message"
          required
        />

        <button className="button" type="submit">
          Send
        </button>
      </form>
    </div>
  );
}
