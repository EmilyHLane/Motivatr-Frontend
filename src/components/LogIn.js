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

  componentDidUpdate() {
    console.log("login component updated");
  }

  //get user input
  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //sign in with email and password - backend validation and pw encryption
  submit = e => {
    console.log("clicked submit");
    e.preventDefault();
    if (this.state.email !== "" && this.state.password !== "") {
      console.log("email and pw not null");
      axios
        .post(`${baseURL}/api/user/login`, {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => {
          console.log("made it 1");
          const { token } = res.data;
          console.log("made it 2", res);
          localStorage.setItem("token", token);
          //pass token in header
          console.log("made it here 3");
          setAuthToken(token);
          if (token) {
            this.props.history.push("/");
            console.log("made it her 4");
          } else {
            alert("sorry try again");
          }
        })
        .catch(err => {
          alert(err, "frontend login error after submit post request");
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
