import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CadastroMidia from './pages/CadastroMidia';
import Login from './pages/Login';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/cadastroMidia" component={CadastroMidia}/>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;

