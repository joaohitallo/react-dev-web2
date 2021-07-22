import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CadastroMidia from './pages/CadastroMidia';
import Login from './pages/Login';
import Pagina404 from './pages/Error404'
import Main from './pages/Main'

function Routes(){
  return(
    <Router>
      <Switch>
          <Route path="/" component={Main}/>  
          <Route path="/login" component={Login}/>
          <Route path="/cadastroMidia" component={CadastroMidia}/>
          <Route component={Pagina404} />
      </Switch>
    </Router>
  )
};

export default Routes;

