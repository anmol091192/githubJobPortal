import React from 'react';
import ReactDOM from 'react-dom';
import { LocationProvider } from './context/LocationContext';

import App from './App';

ReactDOM.render(
    <LocationProvider>
        <App />
    </LocationProvider>
, document.getElementById('root'));
