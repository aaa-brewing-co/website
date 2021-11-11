import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";

import './style.scss';

// import pages
import Home from '../Home';
import Beer from '../Beer';
import Locations from '../Locations';
import Admin from '../Admin';
import Shops from '../Shops';
import Error from "../Error";
import Login from "../Admin/Login"

import Footer from "../commons/Footer";

function App()  {
  const [token, setToken] = useState();

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/beer" component={Beer} />
        <Route path="/locations" component={Locations} />
        <Route path="/shops" component={Shops} />

        <Route path="/admin">
          {token ? <Admin /> : <Login setToken={setToken} />}
        </Route>

        <Route component={Error} />
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;