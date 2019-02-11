import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./components/App.js";
import Login from "./components/Login.js";
import Register from "./components/Register.js";
import Checkout from "./components/Checkout.js";

const Root = () => (
  <Router>
    <Switch>
      <Route component={App} exact path="/" />

      <Route component={Login} exact path="/Login" />

      <Route component={Checkout} exact path="/Checkout" />

      <Route component={Register} exact path="/Register" />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
