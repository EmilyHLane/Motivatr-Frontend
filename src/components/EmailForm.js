import React, { Component } from "react";

class EmailForm extends Component {
  render() {
    return (
      <div className="email-form-container">
        <h2>Send to a friend</h2>
        <form className="email-form" action="send" method="POST">
          <input
            type="email"
            name="sendTo"
            value={this.props.toEmail}
            placeholder="email address"
            onChange={this.props.addEmailContent}
          />
          <input
            type="email"
            name="from"
            value={this.props.fromEmail}
            placeholder="your email address"
            onChange={this.props.addEmailContent}
          />
          <input
            type="text"
            name="subject"
            value={this.props.subject}
            placeholder="Subject"
            onChange={this.props.addEmailContent}
          />
          <textarea
            name="message"
            value={this.props.message}
            placeholder="Add a message"
            onChange={this.props.addEmailContent}
          />
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
