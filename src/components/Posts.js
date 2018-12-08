import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class Posts extends Component {
  state = {
    posts: [],
    postId: ""
  };

  componentDidMount() {
    this.getPosts();
  }

  componentDidUpdate() {
    if (this.state.posts.length === 0) {
      this.getPosts();
    }
  }

  getPosts = () => {
    axios.get(`${baseURL}/api/post/`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  };

  render() {
    return (
      <div>
        <Post posts={this.state.posts} postId={this.state.postId} />
      </div>
    );
  }
}

export default Posts;
