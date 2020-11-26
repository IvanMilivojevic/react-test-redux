import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Wrapper from "../../../../Components/Hoc/Wrapper";
import withClass from "../../../../Components/Hoc/withClass";
import styles from "./Validation.module.css";

const Validation = (props) => {
  const lengthResult = props.length >= 5 ? "Text long enough" : "Text too short";

  return (
    <Wrapper>
      {lengthResult}
      <button style={{ marginLeft: "10px" }} onClick={props.onThemeToggle} type="button">
        Toggle Theme
      </button>
    </Wrapper>
  );
};

Validation.propTypes = {
  length: PropTypes.number,
  onThemeToggle: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => {
  return {
    onThemeToggle: () => dispatch({ type: "THEME_TOGGLE" }),
  };
};

export default connect(null, mapDispatchToProps)(withClass(Validation, styles.Validation));
