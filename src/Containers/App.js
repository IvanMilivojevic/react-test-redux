import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import Header from "../Components/Header/Header";
import ThemeContext from "../Components/Context/ThemeContext";
import Letters from "./Letters/Letters";
import PostsList from "./PostsList/PostsList";
import NewPost from "./NewPost/NewPost";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      theme: "light",
    };
  }

  componentDidMount() {
    console.log("app mounted");
  }

  shouldComponentUpdate() {
    console.log("app should");
    return true;
  }

  componentDidUpdate() {
    console.log("app updated");
  }

  themeToggleHandler = () => {
    this.setState((prevState) => {
      const theme = prevState.theme === "dark" ? "light" : "dark";

      return { theme };
    });
  };

  render() {
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme: this.state.theme, setTheme: this.themeToggleHandler }}>
          <div className={styles.App}>
            <Header />
            <Switch>
              <Route path="/" exact component={Letters} />
              <Route path="/posts" component={PostsList} />
              <Route path="/new-post" component={NewPost} />
            </Switch>
          </div>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
