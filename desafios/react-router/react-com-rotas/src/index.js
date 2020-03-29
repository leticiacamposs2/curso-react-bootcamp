import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './App';
import Sobre from './Sobre';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={App} />
      <Route path="/sobre" component={Sobre} />
    </Switch>
  </ BrowserRouter>
  , document.getElementById('root')
);

serviceWorker.unregister();
