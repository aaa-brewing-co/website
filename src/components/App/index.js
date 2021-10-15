import React from "react";
import { Switch, Route } from "react-router-dom";

import './style.css';

// import pages
import Home from '../Home';
import Beer from '../Beer';
import Locations from '../Locations';
import Error from "../Error";

function App()  {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beer" component={Beer} />
        <Route path="/locations" component={Locations} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;