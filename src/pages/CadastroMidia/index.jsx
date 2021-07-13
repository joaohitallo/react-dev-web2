import { Component } from 'react';
import '../../App.css';
import CadastroDeMidia from '../../compoments/CadastroDeMidia/CadastroDeMidia';
import { Container, Typography } from "@material-ui/core"



class CadastroMidia extends Component {
  render() {
    return (
      <Container component="article" maxWidth="xs">
        <Typography variant="h4" align="center" color="primary" display="block">Cadastro de Mídias</Typography>
        <CadastroDeMidia aoEnviar={aoEnviarForm} validarAnodelançamento={validarAnodelançamento} />

      </Container>

    );
  }

}
function aoEnviarForm(dados) {
  console.log(dados)
}
function validarAnodelançamento(anodelançamento) {
  if (anodelançamento.lenght !== 4) {
    return { valido: false, texto: "ANO DE LANÇAMENTO DEVE CONTER 4 DÍGITOS" }
  } else {
    return { valido: true, texto: "" }
  }
}
export default CadastroMidia;
