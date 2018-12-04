import React, { Component } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import SelectImage from "./SelectImage";
import PostBuilder from "./PostBuilder";
import Header from "./Header";
import { getJwt } from "../helpers/jwt";

const baseURL =
  "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

class CreatePostPage extends Component {
  state = {
    userId: null,
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
        userId: this.state.userId,
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

  componentDidMount() {
    const jwt = getJwt();
    if (jwt) {
      const userInfo = jwt_decode(localStorage.getItem("token"));
      const userId = userInfo.id;
      this.setState({ userId });
    } else {
      console.log("user is not logged in");
    }
  }

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
