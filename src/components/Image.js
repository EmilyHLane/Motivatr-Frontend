import React, { Component } from "react";

class Image extends Component {
  render() {
    const imageData = this.props.images;
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
