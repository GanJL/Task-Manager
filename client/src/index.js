import React from 'react';
import ReactDOM from 'react-dom';
import App from './screens/App';
import { Provider } from 'react-redux'
import store from './store'
import "../src/styles/style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
// import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);

