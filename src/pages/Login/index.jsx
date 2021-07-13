import React from 'react';
import { Component } from 'react';
import '../../App.css';

import CadastroDeUsuario from '../../compoments/CadastroDeUsuario/CadastroDeUsuario';
import { Container, Typography } from "@material-ui/core"

class Login extends Component {
  render() {
    return (
      <Container component="article" maxWidth="xs">
        <Typography variant="h4" align="center" color="primary" display="block">Login</Typography>
        <CadastroDeUsuario validarSenha={validarSenha} />
      </Container>
    );
  }
}
function validarSenha(senha) {
  if (senha.lenght !== 8) {
    return { valida: false, texto: "SENHA DEVE CONTER 8 CARACTERES" }
  } else {
    return { valida: true, texto: "" }
  }
}

export default Login;




