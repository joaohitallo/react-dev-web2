import React from "react";
import { Route, useParams, useRouteMatch } from "react-router-dom";
import Categorias from "../../compoments/Categorias";
import CardFilmes from "../../compoments/CardFilmes";

const Categoria = () => {
  const { id } = useParams()
  const { path } = useRouteMatch()

  return (
    <>
      <Categorias />
      <Route exact path={`${path}/`}>
        <CardFilmes url={`filmes?categoria=${id}`} />
      </Route>
    </>
  );
};

export default Categoria;