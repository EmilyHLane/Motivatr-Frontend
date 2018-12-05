import React, { Component } from "react";
import axios from "axios";
import PostEditForm from "./PostEditForm";
import SelectImage from "./SelectImage";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostEditPage extends Component {
  state = {
    postDetail: []
  };

  componentDidMount() {
    // console.log("mount post edit page");
    const postId = this.props.match.params._id;
    // console.log(postId);
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        const postDetail = res.data;
        this.setState({ postDetail });
      })
      .catch(err => alert(err + "on PostEditPage mount"));
  }

  render() {
    const data = this.state.postDetail;
    return (
      <div className="post-edit-page">
        <PostEditForm data={data} />
        <SelectImage />
      </div>
    );
  }
}

export default PostEditPage;
