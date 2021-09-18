import React from "react";
import Particles from "react-particles-js";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Research from "./pages/Research";
import AboutUs from "./pages/AboutUs";
import Footer from "./components/footer/Footer";



function App() {
  return (
    <div>

      <Router>
        <Navi />
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/about-us">
            {/* <AboutUs /> */}
          </Route>
          <Route exact path="/achievements">
            {/* achievements */}
          </Route>
          <Route exact path="/contact-us">
            {/* contact us */}
          </Route>
          <Route exact path="/research">
            <Research />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
