import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import styles from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={styles.Post} onClick={props.click} onKeyDown={props.click} role="button" tabIndex="0">
      <div>{props.title}</div>
      <div>{props.content}</div>
    </div>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  click: PropTypes.func,
};

export default withRouter(Post);
