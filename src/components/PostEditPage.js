import React, { Component } from "react";
import axios from "axios";
import PostEditForm from "./PostEditForm";
import SelectImage from "./SelectImage";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostEditPage extends Component {
  state = {
    postDetail: []
  };

  ComponentDidMount() {
    console.log("mount post edit page");
    const postId = this.props.postid;

    console.log(postId, " is post id");
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        const postUser = res.data.createdBy;
        const postDetail = res.data;
        const loveCount = res.data.likes;
        this.setState({ postDetail, postUser, loveCount });
      })
      .catch(err => alert(err + "on PostEditPage mount"));
  }

  render() {
    console.log(this.state);
    return (
      <div className="post-edit-page">
        <PostEditForm data={this.props} />
        <SelectImage />
      </div>
    );
  }
}

export default PostEditPage;
