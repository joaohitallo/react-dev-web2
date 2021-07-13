import React, {useState} from  'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core"

function CadastroDeUsuario({validarSenha}) {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [notificações, setNotificações] = useState(false);
    const [erros, setErros] = useState({senha:{valida:true, text: ""}});

    return(
        <form
            onSubmit = {(event) => {
                event.preventDefault()
                console.log({nome});
                console.log({senha});
                console.log({notificações});
            }}
        >
            <TextField
            value = {nome}
            onChange = {(event) =>{
                setNome(event.target.value);
                
            }}
            id = "nome" 
            label = "Nome" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
            <TextField
            value = {senha}
            onChange = {(event) =>{
                setSenha(event.target.value);
            }} 
            onBlur={(event) =>{
                const  ehValida = validarSenha(event.target.value)
                setErros({senha: ehValida})
            }}
            error = {!erros.senha.valida}
            helperText = {erros.senha.texto}
            id = "senha" 
            label = "Senha" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
            
            <FormControlLabel 
            label = "Notificações" 
            control= {<Switch checked = {notificações} onChange={(event) =>{
                setNotificações(event.target.checked)
            }} name = "notificações"  color = "primary"/>} />

    
            <Button type = "submit" variant="contained" color = "primary"> ENTRAR </Button>
        </form>
    )

}

export default CadastroDeUsuario