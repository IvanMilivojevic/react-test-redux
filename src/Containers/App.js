import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styles from "./App.module.css";
import Header from "../Components/Header/Header";
import Letters from "./Letters/Letters";
import PostsList from "./PostsList/PostsList";
import NewPost from "./NewPost/NewPost";
import Auth from "./AuthForm/Auth";
import Logout from "./AuthForm/Logout/Logout";

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
    let routes = (
      <Switch>
        <Route path="/" exact component={Letters} />
        <Route path="/new-post" component={NewPost} />
        <Route path="/auth" component={Auth} />
        <Redirect to="/" />
      </Switch>
    );

    if (this.props.isAuthorized) {
      routes = (
        <Switch>
          <Route path="/" exact component={Letters} />
          <Route path="/posts" component={PostsList} />
          <Route path="/new-post" component={NewPost} />
          <Route path="/auth" component={Auth} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/" />
        </Switch>
      );
    }

    return (
      <BrowserRouter>
        <div className={styles.App}>
          <Header />
          {routes}
        </div>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: !!state.ath.token,
  };
};

export default connect(mapStateToProps)(App);
