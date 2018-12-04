import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostEmail extends Component {
  render() {
    return (
      <div className="post-love-send>">
        <Link className="link" to="/sendemailpage">
          <i className="far fa-envelope" />
        </Link>
      </div>
    );
  }
}

export default PostEmail;
