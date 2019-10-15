import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import store from "./store";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById("root")
);
