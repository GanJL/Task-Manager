import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import { Provider } from 'react-redux'
import store from './store'
import "../src/styles/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

