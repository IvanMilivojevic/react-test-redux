import React from "react";
import ThemeContext from "../Context/ThemeContext";

const withTheme = (ComponentDep) => {
  return (props) => (
    <ThemeContext.Consumer>{(context) => <ComponentDep {...props} themeContext={context} />}</ThemeContext.Consumer>
  );
};

export default withTheme;
