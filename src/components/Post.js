import React from "react";
import { Link } from "react-router-dom";

const Post = props => {
  const getData = props.posts;

  const postData = getData.map(data => {
    return (
      <Link id={data._id} to={`/post/${data._id}`} key={data._id}>
        <div className="post-container">
          <p id={data._id}>{data.textUpper}</p>
          <img id={data._id} src={data.image} alt={data.altTxt} />
          <p id={data._id}>{data.textLower}</p>
        </div>
      </Link>
    );
  });

  return <div className="all-posts">{postData}</div>;
};

export default Post;
