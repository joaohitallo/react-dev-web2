import React, {useState} from  'react';
import {Button, TextField, Switch, FormControlLabel} from "@material-ui/core"

function CadastroDeMidia({aoEnviar, validarAnodelançamento}) {
    const [serieoufilme, setSerieoufilme] = useState("");
    const [nome, setNome] = useState("");
    const [sinopse, setSinopse] = useState("");
    const [anodelançamento, setAnodelançamento] = useState("");
    const [classificaçãodemidia, setClassificaçãodemidia] = useState("");
    const [classificaçãoindicativa, setClassificaçãoindicativa] = useState("");
    const [contemviolencia, setContemviolencia] = useState(false);
    const [contemcenasexplicitas, setContemcenasexplicitas] = useState(false);
    const [contemlinguaguemimpropria, setContemlinguagemimpropria] = useState(false);
    const [contemusodedrogas, setContemusodedrogas] = useState(false);
    const [erros, setErros] = useState({anodelançamento:{valido:true, text: ""}});

    return(
        <form
            onSubmit = {(event) => {
                event.preventDefault()
                aoEnviar({
                    serieoufilme,
                    nome,
                    anodelançamento,
                    sinopse,
                    classificaçãodemidia,
                    contemviolencia,
                    contemcenasexplicitas,
                    contemlinguaguemimpropria,
                    contemusodedrogas
                })
                ///console.log({serieoufilme});
                ///console.log({nome});
                ///console.log({sinopse});
                ///console.log({anodelançamento});
                ///console.log({classificaçãodemidia});
                ///console.log({contemviolencia});
                ///console.log({contemcenasexplicitas});
                ///console.log({contemlinguaguemimpropria});
                ///console.log({contemusodedrogas});
                
            }}
        >
            <TextField
            value = {serieoufilme}
            onChange = {(event) =>{
                let tmpSerieoufilme = event.target.value
                if(tmpSerieoufilme.length >= 5){
                    tmpSerieoufilme = tmpSerieoufilme.substr(0,5)
                }
                setSerieoufilme(tmpSerieoufilme);
            }}
            id = "serieoufilme" 
            label = "Série ou Filme?" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
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
            value = {sinopse}
            onChange = {(event) =>{
                setSinopse(event.target.value);
                
            }} 
            id = "sinopse" 
            label = "Sinopse" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
            <TextField
            value = {anodelançamento}
            onChange = {(event) =>{
                setAnodelançamento(event.target.value);
                ///let tmpAnodelançamento = event.target.value
                ///if(tmpAnodelançamento.length >= 4){
                    ///tmpAnodelançamento = tmpAnodelançamento.substr(0,4)
                ///}
                ///setAnodelançamento(tmpAnodelançamento);
            }} 
            onBlur={(event) =>{
                const  ehValido = validarAnodelançamento(event.target.value)
                setErros({anodelançamento: ehValido})
            }}
            error = {!erros.anodelançamento.valido}
            helperText = {erros.anodelançamento.texto}
            id = "anodelançamento" 
            label = "Ano de Lançamento" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
            <TextField
            value = {classificaçãodemidia}
            onChange = {(event) =>{
                setClassificaçãodemidia(event.target.value);
                
            }} 
            id = "classificaçãodemidia" 
            label = "Classificação de Mídia" 
            variant = "filled" 
            margin = "dense" 
            fullWidth 
            />
            <TextField
            value = {classificaçãoindicativa}
            onChange = {(event) =>{
                setClassificaçãoindicativa(event.target.value);
                
            }}
            id = "Classificaçãondicativa" 
            label = "Classificação Indicativa" 
            variant = "filled" 
            margin = "dense" 
            fullWidth
            />

            <FormControlLabel 
            ///id = "contemviolencia" 
            label = "Contém Violência" 
            control= {<Switch checked = {contemviolencia} onChange={(event) =>{
                setContemviolencia(event.target.checked)
            }} name = "Contém Violência"  color = "primary"/>} />

            <FormControlLabel
            ///id = "contemcenasexplicitas" 
            label = "Contêm Cenas Explícitas" 
            control= {<Switch checked = {contemcenasexplicitas} onChange={(event) =>{
                setContemcenasexplicitas(event.target.checked)
            }} name = "Contêm Cenas Explícitas" color = "primary" />} />

            <FormControlLabel
            ///id = "contemlinguaguemimpropria" 
            label = "Contém Linguagem Imprópria" 
            control= {<Switch checked = {contemlinguaguemimpropria} onChange={(event) =>{
                setContemlinguagemimpropria(event.target.checked)
            }} name = "Contém Linguagem Imprópria" color = "primary" />} />

            <FormControlLabel
            ///id = "contemusodedrogas" 
            label = "Contém  Uso de Drogas" 
            control= {<Switch checked = {contemusodedrogas} onChange={(event) =>{
                setContemusodedrogas(event.target.checked)
            }} name = "Contém  Uso de Drogas" color = "primary" />} />

            <Button type = "submit" variant="contained" color = "primary"> CADASTRAR </Button>
        </form>
    )

}

export default CadastroDeMidia