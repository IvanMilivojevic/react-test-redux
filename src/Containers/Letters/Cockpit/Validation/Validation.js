import React from "react";
import PropTypes from "prop-types";
import Wrapper from "../../../../Components/Hoc/Wrapper";
import withClass from "../../../../Components/Hoc/withClass";
import styles from "./Validation.module.css";
import ThemeContext from "../../../../Components/Context/ThemeContext";

const Validation = (props) => {
  const lengthResult = props.length >= 5 ? "Text long enough" : "Text too short";

  return (
    <ThemeContext.Consumer>
      {(context) => {
        return (
          <Wrapper>
            {lengthResult}
            <button style={{ marginLeft: "10px" }} onClick={context.setTheme} type="button">
              Toggle Theme
            </button>
          </Wrapper>
        );
      }}
    </ThemeContext.Consumer>
  );
};

Validation.propTypes = {
  length: PropTypes.number,
};

export default withClass(Validation, styles.Validation);
