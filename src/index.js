import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import MoviesBox from "./containers/MoviesBox";

ReactDOM.render(
  <MoviesBox />,
  document.getElementById('root'));
registerServiceWorker();
