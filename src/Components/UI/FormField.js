import React from "react";
import PropTypes from "prop-types";
import styles from "./FormField.module.css";

const FormField = (props) => {
  let field = null;
  let invalidField = false;

  if (props.checker && !props.valid) {
    invalidField = true;
  }

  switch (props.type) {
    case "input":
      field = (
        <input
          type={props.config || "text"}
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          className={`${styles.Input} ${invalidField ? styles.InvalidInput : ""}`}
          id={props.name}
          onChange={props.changed}
        />
      );
      break;
    case "textarea":
      field = (
        <textarea
          name={props.name}
          placeholder={props.placeholder}
          value={props.value}
          className={`${styles.Input} ${invalidField ? styles.InvalidInput : ""}`}
          id={props.name}
          onChange={props.changed}
        />
      );
      break;
    case "select":
      field = (
        <select
          name={props.name}
          value={props.value}
          className={`${styles.Input} ${invalidField ? styles.InvalidInput : ""}`}
          id={props.name}
          onChange={props.changed}
        >
          <option disabled hidden>
            {props.value}
          </option>
          {props.options.map((option) => (
            <option value={option.value} key={option.value}>
              {option.display}
            </option>
          ))}
        </select>
      );
      break;
    default:
      break;
  }
  return (
    <div className={styles.FormFieldControl}>
      <label htmlFor={props.name}>
        <span>
          {props.name} {props.required ? "*" : null}
        </span>
        {field}
      </label>
    </div>
  );
};

FormField.propTypes = {
  type: PropTypes.string,
  config: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  options: PropTypes.array,
  changed: PropTypes.func,
  required: PropTypes.bool,
  checker: PropTypes.bool,
  valid: PropTypes.bool,
};

export default FormField;
