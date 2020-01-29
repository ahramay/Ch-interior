import ReactDOM from 'react-dom';
import React from 'react';
import App from './app';
import '../css/styles.scss';
import Main from './main';


ReactDOM.render(
  <App/>,
  document.querySelector('#app')
  );

  ReactDOM.render(
   <Main/>,
    document.querySelector('#main')
    );