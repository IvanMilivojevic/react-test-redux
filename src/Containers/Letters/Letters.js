import React, { Component } from "react";
import Cockpit from "./Cockpit/Cockpit";
import CharacterList from "./CharacterList/CharacterList";

class Letters extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letters: [],
    };
  }

  componentWillUnmount() {
    console.log("letters unmount");
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
        <Cockpit change={this.lettersHandler} letters={this.state.letters} />
        {this.state.letters.length ? <CharacterList letters={this.state.letters} clicked={this.removeLetter} /> : null}
      </div>
    );
  }
}

export default Letters;
