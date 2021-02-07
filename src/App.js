import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocationContext } from './context/LocationContext';
import ApplyJob from './pages/ApplyJob';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';
import Home from './pages/Home';
import './style.css';

export default function App() {
  const {theme} = useContext(LocationContext);
  return (
    <ThemeProvider theme={theme.main === 'dark' ? lightTheme : darkTheme}>
      <GlobalStyles />
        <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/applyjob">
                <ApplyJob />
              </Route>
            </Switch>
        </Router>
    </ThemeProvider>
  )
}
