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

  componentDidUpdate() {
    console.log(this.state.user);
    const jwt = getJwt();
    if (!jwt && this.state.user === "registered") {
      this.setState({ user: "guest" });
    } else if (jwt && this.state.user === "guest") {
      this.setState({ user: "registered" });
    } else console.log(this.state.user);
  }

  handleLogout() {
    return localStorage.removeItem("token");
  }

  render() {
    if (
      this.props.location.pathname === "/signup" ||
      this.props.location.pathname === "/login"
    ) {
      return null;
    }
    const isHome = this.props.location.pathname === "/";
    return (
      <header className={isHome ? "big-header" : "small-header"}>
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
