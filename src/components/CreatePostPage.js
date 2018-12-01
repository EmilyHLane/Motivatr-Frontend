import React, { Component } from "react";
import SelectImage from "./SelectImage";
import PostBuilder from "./PostBuilder";
import Header from "./Header";
import { Redirect } from "react-router-dom";
import axios from "axios";
// const baseURL = "https://ehl-motivatr-server.herokuapp.com";
const devURL = "http://localhost:4000";

class CreatePostPage extends Component {
  state = {
    image: "",
    textUpper: "",
    textLower: "",
    likes: 0
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submit = e => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post(`${devURL}/api/post`, {
        textUpper: this.state.textUpper,
        image: this.state.image,
        textLower: this.state.textLower,
        likes: this.state.likes
      })
      .then(res => {
        this.props.history.push("/");
      })
      .catch(err => {
        alert(err);
      });
  };

  cancel = e => {
    e.preventDefault();
    this.setState({
      image: "",
      textUpper: "",
      textLower: ""
    });
  };

  //use componentdidmount to switch to small header by toggling className small-header?

  render() {
    console.log(this.state);
    return (
      <div className="create-post-page">
        <Header />
        <div className="create-post-container">
          <PostBuilder
            textLower={this.state.textLower}
            textUpper={this.state.textUpper}
            image={this.state.image}
            submit={this.submit}
            change={this.change}
          />
          <SelectImage newPost={this.state.image} />
        </div>
      </div>
    );
  }
}

export default CreatePostPage;
