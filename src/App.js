import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import { About } from './components/About';
import { Users } from './components/Users';
import { Home } from './components/Home';
import { Header } from './components/Header';

export const App = () => {

  return <Router>
    <div>
      
          <Header />

          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
      
    </div>

  </Router>

}
