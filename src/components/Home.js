import React, { Component } from "react";
import Header from "./Header";
import Posts from "./Posts";
import jwt_decode from "jwt-decode";

class Home extends Component {
  state = {
    goHome: true,
    userId: null
  };

  componentDidMount() {
    const userInfo = jwt_decode(localStorage.getItem("token"));
    const userId = userInfo.id;
    this.setState({ userId });
  }

  goHome = () => {
    this.setState({ goHome: true });
  };

  goPost = () => {
    this.setState({ goHome: false });
  };

  render() {
    console.log(this.state.userId);
    return (
      <div>
        <Header goHome={this.goHome} />
        <Posts goPost={this.goPost} goHome={this.state.goHome} />
      </div>
    );
  }
}

export default Home;
