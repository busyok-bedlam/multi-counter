import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import counterApp from './reducers/index';
import { Provider } from 'react-redux';
import * as actions from './actions/index';
let store = new createStore(counterApp);

console.log(store.getState().counters);
ReactDOM.render(
  <Provider store={store}>
  <App/>
  </Provider>
  ,document.getElementById('root'));
registerServiceWorker();
