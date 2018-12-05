import React, { Component } from "react";
import axios from "axios";
import PostLove from "./PostLove";
import PostEmail from "./PostEmail";
import PostDelete from "./PostDelete";
import PostEdit from "./PostEdit";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostDetail extends Component {
  state = {
    postDetail: [],
    postUser: null,
    loveCount: null
  };

  componentDidMount() {
    const postId = this.props.match.params._id;
    console.log(postId);
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        // const postUser = res.data.createdBy._id;
        const postUser = res.data;
        const postDetail = res.data;
        const loveCount = res.data.likes;
        this.setState({ postDetail, postUser, loveCount });
      })
      .catch(err => alert(err + "post detail comp did mount"));
  }

  render() {
    const data = this.state.postDetail;
    return (
      <div className="post-detail-container">
        <h2>PostDetail page</h2>
        <div className="post-detail-post">
          <p>{data.textUpper}</p>
          <img src={data.image} alt={data.altTxt} />
          <p>{data.textLower}</p>
        </div>

        <div className="post-detail-actions">
          <PostLove loveCount={this.state.loveCount} />
          <PostEmail />
          <PostDelete postId={this.props.match.params._id} />
          <PostEdit />
        </div>
      </div>
    );
  }
}

export default PostDetail;
