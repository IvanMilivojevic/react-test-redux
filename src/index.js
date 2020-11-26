import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import Axios from "axios";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";
import reducer from "./store/reducer";

Axios.defaults.headers.common["Authorization"] = "DEFAULT TOKEN";
Axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/";

// eslint-disable-next-line no-underscore-dangle
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
