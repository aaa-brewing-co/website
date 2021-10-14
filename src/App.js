import React from "react";
import { Switch, Route } from "react-router-dom";

import './App.css';

// import pages
import Home from './components/Home';
import About from './components/About';
import Locations from './components/Locations';
import Error from "./components/Error";

function App()  {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/locations" component={Locations} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;