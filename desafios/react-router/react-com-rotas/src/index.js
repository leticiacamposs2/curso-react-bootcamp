import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Sobre from './Sobre';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {(window.location.pathname === '/sobre') ? <Sobre /> : <App />}      
    </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
