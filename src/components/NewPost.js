import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewPost extends Component {
  render() {
    const data = this.props;
    return (
      <div className="new-post-container">
        <input
          className="post-text-placeholder text-top"
          type="text"
          name="textUpper"
          value={data.textUpper}
          placeholder="Add text here"
          onChange={this.props.change}
        />
        <div className="post-image-placeholder">
          <img src={data.image} alt="selected" />
        </div>
        <input
          className="post-text-placeholder text-bottom"
          type="text"
          name="textLower"
          value={data.textLower}
          placeholder="Add text here"
          onChange={this.props.change}
        />
        <button className="post-done" onClick={this.props.submit}>
          Done
        </button>
        <Link to="/">
          <button className="post-cancel">Cancel</button>
        </Link>
      </div>
    );
  }
}

export default NewPost;
