import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post/Post";
import { postsFetch } from "../../store/actions";

const FeaturedPost = React.lazy(() => import("../FeaturedPost/FeaturedPost"));

class PostsLists extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.postsFetchStart(this.props.token);
  }

  setFeatured = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    console.log("renderposts");
    return (
      <div>
        {this.props.posts.map((post) => {
          return (
            <Post title={post.title} content={post.content} key={post.id} click={() => this.setFeatured(post.id)} />
          );
        })}
        <Route
          path="/posts/:id"
          exact
          render={() => (
            <Suspense fallback={<div>Loading...</div>}>
              <FeaturedPost />
            </Suspense>
          )}
        />
      </div>
    );
  }
}

PostsLists.propTypes = {
  posts: PropTypes.array,
  token: PropTypes.string,
  history: PropTypes.object,
  postsFetchStart: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    posts: state.pst.posts,
    token: state.ath.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postsFetchStart: (token) => dispatch(postsFetch(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsLists);
