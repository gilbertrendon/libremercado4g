//import React from 'react';
//Para lo del alert
import React, { Component } from 'react'
import { render } from 'react-dom'
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
//fin alert

import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

// optional cofiguration para alert(alerta cambia local y en heroku)
const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
  }

  class Root extends Component  {
    render () {
      return (
        <AlertProvider template={AlertTemplate} {...options}>
          <App />
        </AlertProvider>
      )
    }
  }

  render(<Root />, document.getElementById('root'))
