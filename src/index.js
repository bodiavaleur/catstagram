import React from 'react';
import ReactDOM from 'react-dom';
import Catstagram from './Catstagram';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <Provider store={store}>
    <Catstagram />
  </Provider>,
  document.getElementById('root')
);
