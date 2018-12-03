import React, { Component } from "react";
import Header from "./Header";
import Posts from "./Posts";

class Home extends Component {
  state = {
    goHome: true
  };

  goHome = () => {
    this.setState({ goHome: true });
  };

  goPost = () => {
    this.setState({ goHome: false });
  };

  render() {
    return (
      <div>
        <Header goHome={this.goHome} />
        <Posts goPost={this.goPost} goHome={this.state.goHome} />
      </div>
    );
  }
}

export default Home;
