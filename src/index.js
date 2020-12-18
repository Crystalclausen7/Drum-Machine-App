import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Route } from "react-router-dom";

import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route path="/">
        <App />
      </Route>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
