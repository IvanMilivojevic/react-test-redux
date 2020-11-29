import React from "react";
import ReactDOM from "react-dom";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import "./index.css";
import App from "./Containers/App";
import * as serviceWorker from "./serviceWorker";
import themeReducer from "./store/reducers/themeReducer";
import lettersReducer from "./store/reducers/lettersReducer";
import postsReducer from "./store/reducers/postsReducer";
import authReducer from "./store/reducers/authReducer";

const rootReducer = combineReducers({
  thm: themeReducer,
  ltr: lettersReducer,
  pst: postsReducer,
  ath: authReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

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
