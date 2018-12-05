// import React, { Component } from "react";
// import axios from "axios";
// const baseURL = "https://ehl-motivatr-server.herokuapp.com";

// class PostDelete extends Component {
//   deletePost = () => {
//     const postId = this.props.postId;
//     console.log("deleted: " + postId);
//     axios
//       .delete(`${baseURL}/api/post/${postId}`)
//       .then(res => {
//         console.log("frontend response >>>", res);
//         this.props.history.push("/");
//       })
//       .catch(err => {
//         console.log(err);
//       });
//   };

//   render() {
//     return (
//       <div className="post-edit-delete">
//         <button onClick={this.deletePost}>
//           <i className="far fa-trash-alt" />
//         </button>
//       </div>
//     );
//   }
// }

// export default PostDelete;
