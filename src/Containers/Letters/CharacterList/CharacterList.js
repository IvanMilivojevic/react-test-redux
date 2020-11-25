import React, { Component } from "react";
import PropTypes from "prop-types";
import Char from "./Char/Char";
import styles from "./CharacterList.module.css";

class CharacterList extends Component {
  componentDidMount() {
    console.log("list mounted");
  }

  shouldComponentUpdate() {
    console.log("list should");
    return true;
  }

  componentDidUpdate() {
    console.log("list updated");
  }

  componentWillUnmount() {
    console.log("list unmounted");
  }

  render() {
    console.log("list render");

    return (
      <div className={styles.LettersWrapper}>
        {this.props.letters.map((letter, index) => (
          <Char
            letter={letter}
            click={() => this.props.clicked(index)}
            // eslint-disable-next-line react/no-array-index-key
            key={index}
          />
        ))}
      </div>
    );
  }
}

CharacterList.propTypes = {
  letters: PropTypes.array,
  clicked: PropTypes.func,
};

export default CharacterList;
