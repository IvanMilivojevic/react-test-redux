import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Components/Header/Header";
import Letters from "./Letters/Letters";
import PostsList from "./PostsList/PostsList";
import NewPost from "./NewPost/NewPost";
import Auth from "./AuthForm/Auth";

class App extends Component {
  componentDidMount() {
    console.log("app mounted");
  }

  shouldComponentUpdate() {
    console.log("app should");
    return true;
  }

  componentDidUpdate() {
    console.log("app updated");
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Header />
          <Switch>
            <Route path="/" exact component={Letters} />
            <Route path="/posts" component={PostsList} />
            <Route path="/new-post" component={NewPost} />
            <Route path="/auth" component={Auth} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
