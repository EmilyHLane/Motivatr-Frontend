import React, { Component } from "react";
import { Link } from "react-router-dom";

class LogOut extends Component {
  render() {
    return (
      <div className="log-out-container">
        <h2>You are logged out</h2>
        <Link to="/login">Log In</Link>
      </div>
    );
  }
}

export default LogOut;
