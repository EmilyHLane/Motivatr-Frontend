import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";
// const baseURL = "https://ehl-motivatr-server.herokuapp.com";
const devURL = "http://localhost:4000";

class Posts extends Component {
  state = {
    posts: [],
    postId: ""
  };

  componentDidMount() {
    axios.get(`${devURL}/api/post/`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  clickPost = e => {
    e.preventDefault();
    const postId = e.target.id;
    this.setState({ postId });
    this.props.goPost();
  };

  render() {
    return (
      <div>
        <Post
          posts={this.state.posts}
          postId={this.state.postId}
          clickPost={this.clickPost}
          goPost={this.goPost}
          goHome={this.props.goHome}
        />
      </div>
    );
  }
}

export default Posts;
