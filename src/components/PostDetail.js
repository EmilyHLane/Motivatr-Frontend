import React, { Component } from "react";
import axios from "axios";
const baseURL =
  "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

class PostDetail extends Component {
  state = {
    postDetail: [],
    postUser: ""
  };

  componentDidMount() {
    const postId = this.props.postId;
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        const postUser = res.data.createdBy._id;
        const postDetail = res.data;
        this.setState({ postDetail, postUser });
      })
      .catch(err => alert(err));
  }

  render() {
    const data = this.state.postDetail;
    return (
      <div>
        <h2>PostDetail page</h2>
        <div>
          <p>{data.textUpper}</p>
          <img src={data.image} alt={data.altTxt} />
          <p>{data.textLower}</p>
        </div>
      </div>
    );
  }
}

export default PostDetail;
