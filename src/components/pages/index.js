import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Contact from "../../pages/contact";
import Home from "../../pages/home";
import Projects from "../../pages/projects"
import Header from "../header"

class Pages extends Component {
  state = {
    currentPage: "Home"
  };
  render() {
    return (
      <div>
        <Router>
            <Header />

            <Switch>
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/Contact" component={Contact}/>
            {/* <Route exact path="/" component={Home}/> */}
            <Route exact path="/">
                <Home/>
            </Route>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default Pages
