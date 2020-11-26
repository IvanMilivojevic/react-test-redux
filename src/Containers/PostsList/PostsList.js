import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Post from "./Post/Post";
import postsFetch from "../../store/actions";

const FeaturedPost = React.lazy(() => import("../FeaturedPost/FeaturedPost"));

class PostsLists extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.postsFetchStart();
  }

  setFeatured = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    console.log("renderposts");
    return (
      <div>
        {this.props.posts.map((post) => {
          return <Post title={post.title} author={post.author} key={post.id} click={() => this.setFeatured(post.id)} />;
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
  history: PropTypes.object,
  postsFetchStart: PropTypes.func,
};

const mapStateToProps = (state) => {
  return {
    posts: state.pst.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postsFetchStart: () => dispatch(postsFetch()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsLists);
