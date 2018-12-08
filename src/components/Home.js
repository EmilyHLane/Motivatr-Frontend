import React, { Component } from "react";
import Posts from "./Posts";
import { getJwt } from "../helpers/jwt";
import jwt_decode from "jwt-decode";

class Home extends Component {
  state = {
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

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <Posts />
      </div>
    );
  }
}

export default Home;
