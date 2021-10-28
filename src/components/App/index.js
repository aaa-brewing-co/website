import React from "react";
import { Switch, Route } from "react-router-dom";

import './style.scss';

// import pages
import Home from '../Home';
import Beer from '../Beer';
import Locations from '../Locations';
import Admin from '../Admin';
import Error from "../Error";
import Footer from "../commons/Footer";

function App()  {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beer" component={Beer} />
        <Route path="/locations" component={Locations} />
        <Route path="/admin" component={Admin} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;