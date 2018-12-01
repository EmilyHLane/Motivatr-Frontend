import React, { Component } from "react";
import Image from "./Image";
import axios from "axios";

// const KEY = require("../config/keys").US_KEY.REACT_APP_UNSPLASH_KEY;

class SelectImage extends Component {
  state = {
    images: []
  };

  componentDidMount() {
    axios
      .get(
        `https://api.unsplash.com/photos/?client_id=394a69ff5a00a7ecd7a2d9077ebe7ff6ed0ad6b93c40969200b171422519d3e9`
      )
      .then(res => {
        const images = res.data;
        this.setState({ images });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="select-image-container col-2">
        <h3>Select an Image</h3>
        <Image images={this.state.images} clickImg={this.props.clickImg} />
      </div>
    );
  }
}

export default SelectImage;
