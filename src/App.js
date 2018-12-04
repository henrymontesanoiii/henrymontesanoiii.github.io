import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio/Portfolio"
import Home from "./components/pages/Home/Home";
import "../src/css/App.css";

const App = () => (
  <Router>
    <div>
      <br></br>
      <NavTabs />
      <Route exact path="/home" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={Home} />
      <br></br><br></br><br></br>
      <div className="row">
        <div className="col-12 text-right">©2018 Henry Montesano III</div>
      </div>
    </div>
  </Router>
);

export default App;
