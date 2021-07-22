import React from "react"; import './App.css';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CadastroMidia from './pages/CadastroMidia';
import Login from './pages/Login';
import Pagina404 from './pages/Error404'
import Main from './pages/Main'
import Categoria from "./pages/Categoria";

import Header from './compoments/Header';
import NavBar from './compoments/NavBar';
import Filme from './pages/Filme';



function App() {
  return (
    <Router>
      <div>
        <Header />
      </div>
      <div>
        <div className="content">
          <div className="navbar">
            <NavBar />
          </div>
          <Switch>
            <Route exact path="/" >
              <Main />
            </Route>
            <Route path="/filmes/:id">
              <Filme />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/cadastroMidia">
              <CadastroMidia />
            </Route>
            <Route path="/categoria/:id">
              <Categoria />
            </Route>
            <Route component={Pagina404} />
          </Switch>
        </div>
      </div>

    </Router>
  );
}




export default App;
