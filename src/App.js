import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ApplyJob from './pages/ApplyJob';
import Home from './pages/Home';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/applyjob" component={ApplyJob}/>
        </Switch>
      </div>
    </Router>
  )
}
