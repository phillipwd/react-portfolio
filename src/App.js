import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
// import Contact from "./pages/contact";
// import Home from "./pages/home";
// import Projects from "./pages/projects"
import './App.css';
import Header from "./components/header"
import Pages from "./components/pages"

function App() {
  return (
    <div className="App">
        {/* <Header/> */}
        <Router>
          <Pages />
        {/* <Switch>
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/Contact" component={Contact}/>
          <Route exact path="/" component={Home}/>
        </Switch> */}
        </Router>
    </div>
  );
}

export default App;
