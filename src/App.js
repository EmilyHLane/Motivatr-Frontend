import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import CreatePostPage from "./components/CreatePostPage";
import QuoteFinder from "./components/QuoteFinder";
import PostDetail from "./components/PostDetail";
import PostEditPage from "./components/PostEditPage";
import EmailForm from "./components/EmailForm";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <a href="#main" className="skip-to-main">
          Skip to main content
        </a>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/logout" component={LogOut} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/createpost" component={CreatePostPage} />
          <Route exact path="/quotefinder" component={QuoteFinder} />
          <Route
            exact
            path="/post/:_id"
            render={props => <PostDetail {...props} />}
          />
          <Route
            exact
            path="/posteditpage/:_id"
            render={props => <PostEditPage {...props} />}
          />
          <Route exact path="/sendemailpage" component={EmailForm} />
        </Switch>
      </div>
    );
  }
}

export default App;
