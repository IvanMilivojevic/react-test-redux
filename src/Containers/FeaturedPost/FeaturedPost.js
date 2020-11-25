import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Axios from "axios";
import styles from "./FeaturedPost.module.css";

class FeaturedPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      featuredPost: null,
    };
  }

  componentDidMount() {
    this.checkFeatured();
  }

  componentDidUpdate() {
    console.log("feat update");
    this.checkFeatured();
  }

  checkFeatured() {
    if (
      (this.props.match.params.id && !this.state.featuredPost) ||
      (this.state.featuredPost && +this.props.match.params.id !== this.state.featuredPost.id)
    ) {
      Axios.get(`/posts/${this.props.match.params.id}`)
        .then((response) => {
          console.log(response);

          this.setState({
            featuredPost: response.data,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }

  render() {
    console.log(this.props);
    let featuredContent = <div>Loading post ...</div>;

    if (this.state.featuredPost) {
      featuredContent = (
        <div>
          <div className={styles.FeaturedTitle}>{this.state.featuredPost.title}</div>
          <div>{this.state.featuredPost.body}</div>
        </div>
      );
    }

    return <div className={styles.FeaturedPost}>{featuredContent}</div>;
  }
}

FeaturedPost.propTypes = {
  match: PropTypes.object,
};

export default withRouter(FeaturedPost);
