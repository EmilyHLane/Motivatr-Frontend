import React, { Component } from "react";

class PostEmail extends Component {
  render() {
    return (
      <div className="post-love-send>">
        <button className="link" onClick={this.props.onEmail}>
          <i className="far fa-envelope" />
        </button>
      </div>
    );
  }
}

export default PostEmail;
