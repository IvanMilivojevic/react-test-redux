import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cockpit from "./Cockpit/Cockpit";
import CharacterList from "./CharacterList/CharacterList";

class Letters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [],
    };
  }

  componentDidMount() {
    this.setState({
      letters: [...this.props.lettersStore],
    });
  }

  componentWillUnmount() {
    this.props.lettersAdd(this.state.letters);
  }

  lettersHandler = (event) => {
    this.setState({
      letters: event.target.value.split(""),
    });
  };

  removeLetter = (index) => {
    this.setState((prevState) => {
      const letters = [...prevState.letters];
      letters.splice(index, 1);

      return { letters };
    });
  };

  render() {
    return (
      <div>
        <h2>Hello from Home page</h2>
        <h2>Hello from Home page</h2>
        <h4>Hello from Home page new</h4>
        <h4>Hello from Home page new</h4>
        <h2>Hello from Home page new 2222</h2>
        <Cockpit change={this.lettersHandler} letters={this.state.letters} />
        {this.state.letters.length ? <CharacterList letters={this.state.letters} clicked={this.removeLetter} /> : null}
      </div>
    );
  }
}

Letters.propTypes = {
  lettersAdd: PropTypes.func,
  lettersStore: PropTypes.array,
};

const mapStateToProps = (state) => {
  return {
    lettersStore: state.ltr.letters,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    lettersAdd: (letters) => dispatch({ type: "LETTERS_ADD", letters }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Letters);
