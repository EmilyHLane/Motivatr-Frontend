import React, { Component } from "react";
import Header from "./Header";
import Posts from "./Posts";
import { getJwt } from "../helpers/jwt";
import jwt_decode from "jwt-decode";

class Home extends Component {
  state = {
    goHome: true,
    userId: null
  };

  componentDidMount() {
    const jwt = getJwt();
    if (jwt) {
      const userInfo = jwt_decode(localStorage.getItem("token"));
      const userId = userInfo.id;
      this.setState({ userId });
    } else {
      console.log("user is not logged in");
    }
  }

  goHome = () => {
    this.setState({ goHome: true });
  };

  goPost = () => {
    this.setState({ goHome: false });
  };

  render() {
    return (
      <div>
        <Posts goPost={this.goPost} goHome={this.state.goHome} />
      </div>
    );
  }
}

export default Home;
