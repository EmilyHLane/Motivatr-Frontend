import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PostLove from "./PostLove";
import PostEmail from "./PostEmail";
import EmailForm from "./EmailForm";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostDetail extends Component {
  state = {
    postDetail: [],
    postUser: null,
    loveCount: null
  };

  componentDidMount() {
    const postId = this.props.match.params._id;
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        const postUser = res.data.createdBy;
        const postDetail = res.data;
        const loveCount = res.data.likes;
        this.setState({ postDetail, postUser, loveCount });
      })
      .catch(err => alert(err + "on postDetail comp did mount"));
  }

  deletePost = () => {
    const postId = this.props.match.params._id;
    axios
      .delete(`${baseURL}/api/post/${postId}`)
      .then(res => {
        console.log("frontend response >>>", res);
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("frontend response error >>>", err);
      });
  };

  render() {
    const data = this.state.postDetail;
    const postId = this.props.match.params._id;
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
          <div className="post-edit-delete">
            <button className="actions-button" onClick={this.deletePost}>
              <i className="far fa-trash-alt" />
            </button>
            <Link
              className="link actions-button"
              to={`/posteditpage/${postId}`}
            >
              <i className="fas fa-pencil-alt" />
            </Link>
          </div>
        </div>

        {/* if user selects email icon */}
        <div className="render-email-form" />
        <EmailForm />
      </div>
    );
  }
}

export default PostDetail;
