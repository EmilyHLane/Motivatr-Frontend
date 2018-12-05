import React, { Component } from "react";
import PostEditForm from "./PostEditForm";
import SelectImage from "./SelectImage";

class PostEditPage extends Component {
  render() {
    return (
      <div>
        <h2>PostEditPage</h2>
        <PostEditForm />
        {/* reuse PostBuilder? */}
        <SelectImage />
      </div>
    );
  }
}

export default PostEditPage;
