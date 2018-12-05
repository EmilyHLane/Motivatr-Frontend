import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostEditForm extends Component {
  render() {
    const data = this.props.data;

    return (
      <div className="new-post-container col-1 edit-post-container">
        <input
          className="post-text-placeholder text-top"
          type="text"
          name="textUpper"
          value={data.textUpper}
          placeholder={data.placeUpper}
          onChange={this.props.editPost}
        />
        <div className="post-image-placeholder">
          <img src={data.image} alt={data.altTxt} />
        </div>
        <input
          className="post-text-placeholder text-bottom"
          type="text"
          name="textLower"
          value={data.textLower}
          placeholder={data.placeLower}
          onChange={this.props.editPost}
        />
        <button className="post-done" onClick={this.props.submitEdit}>
          Done
        </button>
        <Link to="/">
          <button className="post-cancel">Cancel</button>
        </Link>
      </div>
    );
  }
}

export default PostEditForm;
