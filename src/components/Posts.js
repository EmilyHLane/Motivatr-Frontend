import React, { Component } from "react";
import Post from "./Post";
import axios from "axios";

const baseURL =
  "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

class Posts extends Component {
  state = {
    posts: [],
    postId: ""
  };

  componentDidMount() {
    axios.get(`${baseURL}/api/post/`).then(res => {
      const posts = res.data;
      this.setState({ posts });
    });
  }

  // clickPost = e => {
  //   e.preventDefault();
  //   const postId = e.target.id;
  //   this.setState({ postId });
  //   this.props.goPost();
  // };

  render() {
    return (
      <div>
        <Post posts={this.state.posts} postId={this.state.postId} />
      </div>
    );
  }
}

export default Posts;
