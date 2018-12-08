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
    console.log(this.state.posts.length);
    if (this.state.posts.length === 0) {
      console.log("no posts");
      this.getPosts();
    }
  }

  getPosts = () => {
    axios.get(`${baseURL}/api/post/`).then(res => {
      console.log(res.status);
      const posts = res.data;
      this.setState({ posts });
    });
    console.log("getposts called");
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
