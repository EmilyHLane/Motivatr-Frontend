import React, { Component } from "react";
import SelectImage from "./SelectImage";
import PostBuilder from "./PostBuilder";
import Header from "./Header";
import axios from "axios";
const baseURL =
  "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

class CreatePostPage extends Component {
  state = {
    image: "https://dummyimage.com/400/e0e0e0/3d3d3d&text=select+an+image",
    altTxt: "",
    textUpper: "",
    textLower: "",
    likes: 0
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  clickImg = e => {
    const newImage = e.target.src;
    const altTxt = e.target.alt;
    this.setState({ image: newImage, altTxt });
  };

  submit = e => {
    e.preventDefault();
    axios
      .post(`${baseURL}/api/post`, {
        textUpper: this.state.textUpper,
        image: this.state.image,
        altTxt: this.state.altTxt,
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
      altTxt: "",
      textUpper: "",
      textLower: ""
    });
  };

  render() {
    return (
      <div className="create-post-page">
        <Header />
        <div className="create-post-container">
          <PostBuilder
            textLower={this.state.textLower}
            textUpper={this.state.textUpper}
            image={this.state.image}
            altTxt={this.state.altTxt}
            submit={this.submit}
            change={this.change}
          />
          <SelectImage clickImg={this.clickImg} />
        </div>
      </div>
    );
  }
}

export default CreatePostPage;
