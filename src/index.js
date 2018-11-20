// core
import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

// containers
import App from "./components/App";

// reducers
import rootReducer from "./reducers";

// core styles
import "./assets/styles/index.css";

// utils
import registerServiceWorker from "./utils/registerServiceWorker";

const store = createStore(rootReducer, applyMiddleware(thunk));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
