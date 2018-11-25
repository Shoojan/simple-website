import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/jsx/Home";
import About from "./components/jsx/About";
import News from "./components/jsx/News";
import Navbar from "./components/jsx/CustomNavbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
        </div>
      </Router>
    );
  }
}

export default App;
