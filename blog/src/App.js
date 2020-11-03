import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import TodasPerguntas from './pages/TodasPerguntas';
import MinhasPerguntas from './pages/MinhasPerguntas';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Landing} exact />
        <Route path="/login" component={Login} />
        <Route path="/cadastro" component={Cadastro} />
        <Route path="/perguntas" component={TodasPerguntas} />
        <Route path="/form" component={MinhasPerguntas} />'
            </Switch>
    </ BrowserRouter>
  );
}


