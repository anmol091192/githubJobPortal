import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApplyJob from './pages/ApplyJob';
import Home from './pages/Home';
import { LocationProvider } from './context/LocationContext';

export default function App() {


  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              
               <Home />
             
            </Route>
            <Route exact path="/applyjob">
              
               <ApplyJob />
             
            </Route>
          </Switch>
        </div>
      </Router>
   
  )
}
