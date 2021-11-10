import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { NavigationBar } from "./components/navbar/NavigationBar";
import Loading from "./components/Loading/loading";
const Landing = lazy(() => import("./pages/Landing/Landing.jsx"));
const Research = lazy(() => import("./pages/Research/Research"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUs"));
const Footer = lazy(() => import("./components/footer/Footer"));
const Comp = lazy(() => import("./pages/Competitions/Comp"));
const Alumni = lazy(() => import("./pages/Alumni/Alumni"));
const Sponsorship = lazy(() => import("./pages/Sponsorship/Sponsorship"));


function App() {
  return (
    <>
      <Suspense fallback={<div><Loading /></div>}>
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
              <Route exact path="/research">
                <Research />
              </Route>
              <Route exact path="/">
                <Landing />
              </Route>
              <Route exact path="/alumni">
                <Alumni />
              </Route>
              <Route exact path="/sponsorship">
                <Sponsorship />
              </Route>
            </Switch>
            <Footer />
          </Router>

        </div >
      </Suspense>
    </>
  );
}

export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Landing from "./pages/Landing/Landing.jsx";
// import { NavigationBar } from "./components/navbar/NavigationBar";
// import Research from "./pages/Research/Research";
// import AboutUs from "./pages/AboutUs/AboutUs";
// import Footer from "./components/footer/Footer";
// import Comp from "./pages/Competitions/Comp";
// import Alumni from "./pages/Alumni/Alumni"
// import Sponsorship from "./pages/Sponsorship/Sponsorship"


// function App() {
//   return (
//     <div>
//       <Router>
//         <NavigationBar />
//         <Switch>
//           <Route exact path="/about-us">
//             <AboutUs />
//           </Route>
//           <Route exact path="/competitions">
//             <Comp />
//           </Route>
//           <Route exact path="/contact-us">
//             {/* contact us */}
//           </Route>
//           <Route exact path="/research">
//             <Research />
//           </Route>
//           <Route exact path="/">
//             <Landing />
//           </Route>
//           <Route exact path="/alumni">
//             <Alumni />
//           </Route>
//           <Route exact path="/sponsorship">
//             <Sponsorship />
//           </Route>
//         </Switch>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;
