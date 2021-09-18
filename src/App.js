import React from "react";
import Particles from "react-particles-js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about-us">
            {/* about us */}
          </Route>
          <Route exact path="/achievements">
            {/* achievements */}
          </Route>
          <Route exact path="/contact-us">
            {/* contact us */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
