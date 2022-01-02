import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from './contexts/theme'
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.render(
  <ThemeProvider >
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();


