import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import { ThemeProvider } from './contexts/theme'
import store from './redux/store'


ReactDOM.render(
  <ThemeProvider >
  <Provider store={store}>
    <App />
  </Provider>
  </ThemeProvider>,
  document.getElementById('root')
);


