import React from "react";

export default function ContactPageForm() {
  return (
    <div>
      <form
        action="https://formsubmit.co/7ce96fda22c752dbb05cd139c06ee226"
        method="POST"
      >
        <input type="text" name="name" required />
        <input type="email" name="email" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
