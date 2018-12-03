import React from "react";
import { Link } from "react-router-dom";
import PostDetail from "./PostDetail";

const Post = props => {
  const getData = props.posts;

  const postData = getData.map(data => {
    return (
      <Link
        id={data._id}
        to="/post/:_id"
        key={data._id}
        onClick={props.clickPost}
      >
        <div className="post-container">
          <p id={data._id}>{data.textUpper}</p>
          <img id={data._id} src={data.image} alt={data.altTxt} />
          <p id={data._id}>{data.textLower}</p>
        </div>
      </Link>
    );
  });

  if (props.goHome === true) {
    return <div className="all-posts">{postData}</div>;
  } else {
    return <PostDetail postId={props.postId} />;
  }
};

export default Post;
