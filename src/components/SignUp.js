import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      username: ""
    };
  }

  change(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submit(e) {
    e.preventDefault();
    if (this.state.password === "password") {
      alert('Password cannot be "password" ');
      this.setState({ password: "" });
    } else {
      axios
        .post(`${baseURL}/api/user`, {
          email: this.state.email,
          password: this.state.password,
          username: this.state.username
        })
        .then(res => {
          this.props.history.push("/login");
        })
        .catch(err => {
          alert(err);
        });
    }
  }

  render() {
    return (
      <div className="signup-page">
        <div className="signup-container">
          <h2>Sign Up</h2>
          <Link to="/" className="close-button">
            x
          </Link>
          <form className="signup-form" onSubmit={e => this.submit(e)}>
            <label>email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="your email address"
              onChange={e => this.change(e)}
              required
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="create a password"
              onChange={e => this.change(e)}
              minLength="8"
              required
            />
            <label>username</label>
            <input
              type="text"
              name="username"
              value={this.state.username}
              placeholder="create a username"
              onChange={e => this.change(e)}
              required
            />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
