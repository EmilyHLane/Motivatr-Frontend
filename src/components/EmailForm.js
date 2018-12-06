import React, { Component } from "react";

class EmailForm extends Component {
  render() {
    return (
      <div className="email-form-container">
        <h2>Send to a friend</h2>
        <form className="email-form" action="send" method="POST">
          <input type="email" name="toEmail" placeholder="email address" />
          <input
            type="email"
            name="fromEmail"
            placeholder="your email address"
          />
          <textarea name="emailMessage">Add a note</textarea>
          <button
            type="submit"
            className="email-send-button"
            onClick={this.props.sendEmail}
          >
            Send
          </button>
          <button
            className="email-cancel-button"
            onClick={this.props.cancelEmail}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default EmailForm;
