import React, { Component } from "react";
import axios from "axios";
const baseURL =
  "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

//when user selects delete button
//get id of post and delete
//axios find by id and delete

class PostDelete extends Component {
  deletePost = () => {
    const postId = this.props.postId;
    console.log("deleted" + postId);
    axios.delete(`${baseURL}/api/post/${postId}`);
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
