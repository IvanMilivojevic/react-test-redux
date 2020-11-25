import React from "react";
import PropTypes from "prop-types";

const Box = (props) => React.createElement(props.component || "div", { className: "test", id: "test" }, props.children);

Box.propTypes = {
  component: PropTypes.string,
  children: PropTypes.any,
};

export default Box;
