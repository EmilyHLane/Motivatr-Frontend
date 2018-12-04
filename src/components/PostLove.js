import React, { Component } from "react";

class PostLove extends Component {
  render() {
    const loveCount = this.props.loveCount;
    return (
      <div className="post-love-send>">
        <div className="post-love-count">
          <button>
            <i className="far fa-heart" />
          </button>
          <p className="love-count">{loveCount}</p>
        </div>
      </div>
    );
  }
}

export default PostLove;
