import React, { Component } from "react";
import axios from "axios";
// import { Redirect } from "react-router-dom";
// const baseURL = "http://localhost:4000";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostDelete extends Component {
  deletePost = () => {
    const postId = this.props.postId;
    console.log("deleted" + postId);
    axios.delete(`${baseURL}/api/post/${postId}`).then(res => {
      console.log(res);
      res.redirect("/");
    });
  };

  render() {
    return (
      <div className="post-edit-delete">
        <button onClick={this.deletePost}>
          <i className="far fa-trash-alt" />
        </button>
      </div>
    );
  }
}

export default PostDelete;
