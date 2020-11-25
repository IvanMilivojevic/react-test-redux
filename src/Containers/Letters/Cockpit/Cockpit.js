import React from "react";
import PropTypes from "prop-types";
import styles from "./Cockpit.module.css";
import Validation from "./Validation/Validation";
import Box from "../../../Components/Hoc/Box";

const Cockpit = (props) => {
  return (
    <Box component="section">
      <input type="text" onChange={props.change} value={props.letters.join("")} />
      <div className={styles.Test}>
        <p className={props.letters.length > 4 ? styles.Active : null}>{props.letters.length}</p>
      </div>
      <Validation length={props.letters.length} />
    </Box>
  );
};

Cockpit.propTypes = {
  change: PropTypes.func,
  letters: PropTypes.array,
};

export default Cockpit;
