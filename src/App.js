import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { LocationContext } from './context/LocationContext';
import ApplyJob from './pages/ApplyJob';
import { GlobalStyles } from './global';
import { lightTheme, darkTheme } from './theme';
import Home from './pages/Home';


// const GlobalStyle = createGlobalStyle`
// body {
//   background-color: ${props => props.theme.main === 'dark' ? '#111' : '#EEE'};
//   color: ${props => props.theme.main === 'dark' ? '#EEE' : '#111'};
// }
// `

export default function App() {
  const {theme} = useContext(LocationContext);
  return (
    <ThemeProvider theme={theme.main === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
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
    </ThemeProvider>
  )
}
