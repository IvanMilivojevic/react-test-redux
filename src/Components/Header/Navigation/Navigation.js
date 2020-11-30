import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./Navigation.module.css";

const Navigation = (props) => {
  return (
    <ul className={styles.Nav}>
      <li>
        <NavLink to="/" activeClassName={styles.ActiveLink} exact>
          Home
        </NavLink>
      </li>
      {props.isAuthorized ? (
        <li>
          <NavLink to="/posts" activeClassName={styles.ActiveLink}>
            User Posts
          </NavLink>
        </li>
      ) : null}
      <li>
        <NavLink to="/new-post">New Post</NavLink>
      </li>
      <li>
        {props.isAuthorized ? <NavLink to="/logout">Logout</NavLink> : <NavLink to="/auth">Authorization</NavLink>}
      </li>
    </ul>
  );
};

Navigation.propTypes = {
  isAuthorized: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return {
    isAuthorized: !!state.ath.token,
  };
};

export default connect(mapStateToProps)(Navigation);
