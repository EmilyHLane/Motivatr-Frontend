import React, { Component } from "react";
import axios from "axios";
// const baseURL = "https://ehl-motivatr-server.herokuapp.com";
const devURL = "http://localhost:4000";

class PostDetail extends Component {
  state = {
    postDetail: []
  };

  componentDidMount() {
    const postId = this.props.postId;
    axios
      .get(`${devURL}/api/post/${postId}`)
      .then(res => {
        const postDetail = res.data;
        this.setState({ postDetail });
      })
      .catch(err => alert(err));
  }

  componentWillUnmount() {}

  render() {
    const data = this.state.postDetail;
    return (
      <div>
        <h2>PostDetail page</h2>
        <div>
          <p>{data.textUpper}</p>
          <img src={data.image} alt="data.alt" />
          <p>{data.textLower}</p>
        </div>
      </div>
    );
  }
}

export default PostDetail;
