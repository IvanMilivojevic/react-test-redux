import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <ul className={styles.Nav}>
      <li>
        <NavLink to="/" activeClassName={styles.ActiveLink} exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/posts" activeClassName={styles.ActiveLink}>
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink to="/new-post">New Post</NavLink>
      </li>
    </ul>
  );
};

export default Navigation;
