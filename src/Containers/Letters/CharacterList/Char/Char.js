import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class Char extends Component {
  inputRef = React.createRef();

  componentDidMount() {
    console.log(this.props, this.inputRef.current);
  }

  render() {
    const style = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black",
      backgroundColor: "red",
      color: "white",
    };

    style.backgroundColor = this.props.theme === "light" ? "red" : "black";

    return (
      <span
        style={style}
        onClick={this.props.click}
        onKeyDown={this.props.click}
        ref={this.inputRef}
        role="button"
        tabIndex="0"
      >
        {this.props.letter}
      </span>
    );
  }
}

Char.propTypes = {
  click: PropTypes.func.isRequired,
  letter: PropTypes.string,
  theme: PropTypes.string,
};

const mapStateToProps = (state) => {
  return {
    theme: state.theme,
  };
};

export default connect(mapStateToProps)(Char);
