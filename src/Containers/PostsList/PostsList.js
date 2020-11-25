import React, { Component, Suspense } from "react";
import { Route } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "../../Axios/AxiosPosts";
import Post from "./Post/Post";

const FeaturedPost = React.lazy(() => import("../FeaturedPost/FeaturedPost"));

class PostsLists extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    console.log(this.props);

    Axios.get("/posts")
      .then((response) => {
        console.log(response);
        const posts = response.data.slice(0, 4);
        for (let i = 0; i < posts.length; i += 1) {
          posts[i].author = "Ivan";
        }
        this.setState({ posts });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  setFeatured = (id) => {
    this.props.history.push(`/posts/${id}`);
  };

  render() {
    return (
      <div>
        {this.state.posts.map((post) => {
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
  history: PropTypes.object,
};

export default PostsLists;
