import React from "react";
import Particles from "react-particles-js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import { NavigationBar } from "./components/navbar/NavigationBar";
import Research from "./pages/Research/Research";
import AboutUs from "./pages/AboutUs/AboutUs";
import Footer from "./components/footer/Footer";
import Comp from "./pages/Competitions/Comp";
import Alumni from "./pages/Alumni";

function App() {
  return (
    <div>
      <Router>
        <NavigationBar />
        <Switch>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/competitions">
            <Comp />
          </Route>
          <Route exact path="/contact-us">
            {/* contact us */}
          </Route>
          <Route exact path="/research">
            <Research />
          </Route>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/alumni">
            <Alumni />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
