import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Main} exact />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Cadastro} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);