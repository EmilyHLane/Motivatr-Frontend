import React, { Component } from "react";
import NewPost from "./NewPost";
import { Link } from "react-router-dom";

class PostBuilder extends Component {
  //props.newPost

  render() {
    return (
      <div className="post-builder-container col-1">
        <h2>Post Builder</h2>
        <h3>Create motivation, share it with the world!</h3>
        <NewPost
          textLower={this.props.textLower}
          textUpper={this.props.textUpper}
          image={this.props.image}
          submit={this.props.submit}
          change={this.props.change}
        />
        <Link to="/quotefinder" className="find-quote-link">
          Need some help? Find a quote
        </Link>
      </div>
    );
  }
}

export default PostBuilder;
