import React, { Component } from "react";

class EmailForm extends Component {
  render() {
    return (
      <div className="email-form-container">
        <h2>Send to a friend</h2>
        <form action="/send-email" method="post">
          <input type="email" name="toEmail" placeholder="email address" />
          <input
            type="email"
            name="fromEmail"
            placeholder="your email address"
          />
          <textarea>Add a note</textarea>
          <button className="email-send-button">Send</button>
        </form>
      </div>
    );
  }
}

export default EmailForm;
