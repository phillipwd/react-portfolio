import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Projects from "./pages/projects"
import './App.css';
import Header from "./components/header"

function App() {
  return (
    <div className="App">
        <Header/>
        <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Contact" component={Contact}/>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
