import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

import Component1 from "../Component/Component1";
import Component2 from "../Component/Component2";

class Main extends Component {
  render() {
    return (
      <Router>
        <div>
          <Link to="/">Home</Link>
          <br />
          <Link to="/component1">Component1</Link>
          <br />
          <Link to="/component2">Component2</Link>

          <Route exact path="/" render={() => <h1>Home Page</h1>} />
          <Route path="/component1" component={Component1} />
          <Route path="/component2" component={Component2} />
        </div>
      </Router>
    );
  }
}

export default Main;
