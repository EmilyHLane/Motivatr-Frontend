// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import PostEditPage from "./PostEditPage";
// const baseURL =
//   "https://ehl-motivatr-server.herokuapp.com" || "http://localhost:4000";

// class PostEdit extends Component {
//   editPost = () => {
//     //show edit form
//     return <PostEditPage />;
//   };

//   submitEdit = () => {
//     axios
//       .post(`${baseURL}/api/post`, {
//         textUpper: "",
//         image: "",
//         altTxt: "",
//         textLower: ""
//       })
//       .then(res => {
//         //go back to home
//       })
//       .catch(err => alert(err));
//   };

//   render() {
//     return (
//       <div className="post-edit-delete">
//         <Link className="link" to="/posteditpage">
//           <i className="fas fa-pencil-alt" />
//         </Link>
//       </div>
//     );
//   }
// }

// export default PostEdit;
