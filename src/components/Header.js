import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { getJwt } from "../helpers/jwt";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: "guest"
    };
  }

  componentDidMount() {
    const jwt = getJwt();
    if (jwt) {
      this.setState({ user: "registered" });
    }
  }

  handleLogout() {
    return localStorage.removeItem("token");
  }

  render() {
    if (this.props.match.params === "signup") {
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
            {/* if user is logged in */}
            {this.state.user === "guest" ? (
              <span>
                <Link to="/login">Log In</Link>
                <Link to="/signup">Sign up</Link>
              </span>
            ) : (
              <span>
                <Link to="/createpost">Create</Link>
                <Link to="/logout" onClick={this.handleLogout}>
                  Logout
                </Link>
              </span>
            )}
          </nav>
        </div>
      </header>
    );
  }
}

export default withRouter(Header);
