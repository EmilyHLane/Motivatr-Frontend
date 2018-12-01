import React, { Component } from "react";

class Image extends Component {
  render() {
    //get props from select image for images and map and return
    const imageData = this.props.images;
    // const something = ["1"];
    const images = imageData.map(data => {
      return (
        <div key={data.id}>
          <img
            className="new-post-image"
            src={data.urls.small}
            alt={data.description}
            onClick={this.props.clickImg}
          />
        </div>
      );
    });

    return <div>{images}</div>;
  }
}

export default Image;
