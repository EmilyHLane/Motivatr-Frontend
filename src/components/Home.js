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

  render() {
    return (
      <main id="main">
        <section className="welcome-blob">
          <h2>Get motivated.</h2>
          <h2>Inspire others.</h2>
        </section>
        <Posts />
      </main>
    );
  }
}

export default Home;
