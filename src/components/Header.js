import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getJwt } from "../helpers/jwt";

class Header extends Component {
  state = {
    user: ""
  };

  componentDidMount() {
    const jwt = getJwt();
    if (jwt) {
      this.setState({ user: "registered" });
    } else if (!jwt) {
      this.setState({ user: "guest" });
    }
  }

  handleLogout() {
    return localStorage.removeItem("token");
  }

  render() {
    if (this.props.match.params._id === "signup") {
      console.log(this.props.match.params);
      return null;
    }
    return (
      <header>
        <div className="logo-name-container">
          <Link to="/">
            <h1>motivatr</h1>
          </Link>
        </div>
        <div className="nav-container">
          <nav>
            {this.state.user === "registered" ? (
              <span>
                <Link to="/createpost">Create</Link>
                <Link to="/logout" onClick={this.handleLogout}>
                  Logout
                </Link>
              </span>
            ) : (
              <span>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign up</Link>
              </span>
            )}
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
