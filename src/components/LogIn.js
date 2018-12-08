import React, { Component } from "react";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import { Link } from "react-router-dom";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class Login extends Component {
  state = {
    email: "",
    password: ""
  };

  //get user input
  change = e => {
    console.log(this);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //sign in with email and password - backend validation and pw encryption
  submit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.email !== "" && this.state.password !== "") {
      axios
        .post(`${baseURL}/api/user/login`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          const { token } = res.data;
          localStorage.setItem("token", token);
          //pass token in header
          setAuthToken(token);
          if (token) {
            this.props.history.push("/");
          } else {
            alert("sorry try again");
          }
        })
        .catch(err => {
          alert(err);
        });
    } else {
      alert("Please enter your email and password.");
    }
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-container">
          <h2>Log In</h2>
          <Link to="/" className="close-button">
            x
          </Link>
          <form className="login-form" onSubmit={this.submit}>
            <label>email</label>
            <input
              type="email"
              name="email"
              value={this.state.email}
              placeholder="email"
              onChange={this.change}
            />
            <label>password</label>
            <input
              type="password"
              name="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.change}
            />
            <button>submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
