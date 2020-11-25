import React from "react";

const withClass = (ComponentDep, styleClass) => {
  return (props) => (
    <div className={styleClass}>
      <ComponentDep {...props} />
    </div>
  );
};

export default withClass;
