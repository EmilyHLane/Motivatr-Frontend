import React, { Component } from "react";
import axios from "axios";
import PostEditForm from "./PostEditForm";
import SelectImage from "./SelectImage";
const baseURL = "https://ehl-motivatr-server.herokuapp.com";

class PostEditPage extends Component {
  state = {
    altTxt: null,
    image: null,
    textLower: "",
    textUpper: "",
    placeLower: null,
    placeUpper: null
  };

  componentDidMount() {
    const postId = this.props.match.params._id;
    //get current post data
    axios
      .get(`${baseURL}/api/post/${postId}`)
      .then(res => {
        const postDetail = res.data;
        this.setState({
          altTxt: postDetail.altTxt,
          image: postDetail.image,
          placeLower: postDetail.textLower,
          placeUpper: postDetail.textUpper
        });
      })
      .catch(err => alert(err + "on PostEditPage mount"));
  }

  //when user edits, set state
  editPost = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  //update document on submit
  submitEdit = e => {
    e.preventDefault();
    const postId = this.props.match.params._id;
    axios
      .put(`${baseURL}/api/post/${postId}`, {
        altTxt: this.state.altTxt,
        image: this.state.image,
        textUpper: this.state.textUpper,
        textLower: this.state.textLower
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err, " error at submitEdit");
      });
  };

  render() {
    return (
      <main id="main" className="post-edit-page">
        <PostEditForm
          data={this.state}
          editPost={this.editPost}
          submitEdit={this.submitEdit}
        />
        <SelectImage />
      </main>
    );
  }
}

export default PostEditPage;
