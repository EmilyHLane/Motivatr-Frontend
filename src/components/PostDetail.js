import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { getJwt } from "../helpers/jwt";
import { Link } from "react-router-dom";
import PostLove from "./PostLove";
import PostEmail from "./PostEmail";
import EmailForm from "./EmailForm";
import Comments from "./Comments";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostDetail extends Component {
  state = {
    postDetail: [],
    postUser: null,
    userId: null,
    loveCount: null,
    openEmailForm: null,
    sendTo: "",
    from: "",
    message: "",
    subject: ""
  };

  componentDidMount() {
    //get current user id
    const jwt = getJwt();
    if (jwt) {
      const userInfo = jwt_decode(localStorage.getItem("token"));
      const userId = userInfo.id;
      this.setState({ userId });
    } else {
      console.log("user is not logged in");
    }

    //show this post
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
    //delete the post
    const postId = this.props.match.params._id;
    axios
      .delete(`${baseURL}/api/post/${postId}`)
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log("frontend response error >>>", err);
      });
  };

  //show email form when user clicks email icon
  onEmail = () => {
    this.setState({ openEmailForm: true });
  };

  //get email content from user input
  addEmailContent = e => {
    //set state for email content
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //send email
  //TODO: add validation for no empty fields
  sendEmail = e => {
    e.preventDefault();
    console.log("send email clicked!");
    console.log(this.state);
    const data = this.state.postDetail;
    axios
      .post(`${baseURL}/send`, {
        //request body
        message: this.state.message,
        textUpper: data.textUpper,
        textLower: data.textLower,
        image: data.image,
        altTxt: data.altTxt,
        subject: this.state.subject
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => console.log(err, "send email error frontend"));
  };

  //when user clicks cancel, close email form without sending email
  cancelEmail = e => {
    e.preventDefault();
    this.setState({ openEmailForm: false });
  };

  addLove = () => {
    const postId = this.props.match.params._id;
    const loveCount = parseInt(this.state.loveCount) + 1;
    this.setState({ loveCount });
    axios
      .put(`${baseURL}/api/post/${postId}`, {
        likes: this.state.loveCount
      })
      .then(res => {
        console.log(this.state.loveCount);
      })
      .catch(err => alert(err + "on likes axios frontend"));
  };

  render() {
    const data = this.state.postDetail;
    const postId = this.props.match.params._id;
    const currUser = this.state.userId;
    const postUser = this.state.postUser;
    return (
      <div className="post-detail-container">
        <h2>PostDetail page</h2>
        <div className="post-detail-post">
          <p>{data.textUpper}</p>
          <img src={data.image} alt={data.altTxt} />
          <p>{data.textLower}</p>
        </div>
        <div className="post-detail-actions">
          <PostLove loveCount={this.state.loveCount} addLove={this.addLove} />

          <PostEmail onEmail={this.onEmail} />

          {currUser === postUser ? (
            <span className="post-edit-and-delete">
              <div className="post-edit-delete">
                <Link
                  className="link actions-button edit-icon"
                  to={`/posteditpage/${postId}`}
                >
                  <i className="fas fa-pencil-alt" />
                </Link>
              </div>

              <div className="post-edit-delete">
                <button className="actions-button" onClick={this.deletePost}>
                  <i className="far fa-trash-alt" />
                </button>
              </div>
            </span>
          ) : (
            <div />
          )}
        </div>

        {this.state.openEmailForm === true ? (
          <span className="render-email-form">
            <EmailForm
              sendEmail={this.sendEmail}
              cancelEmail={this.cancelEmail}
              addEmailContent={this.addEmailContent}
              emailData={this.state}
            />
          </span>
        ) : (
          <span>
            <Comments />
          </span>
        )}
      </div>
    );
  }
}

export default PostDetail;
