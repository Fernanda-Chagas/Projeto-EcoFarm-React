import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { Box, FormControl, InputLabel, Select, TextField } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';
import Cadastros from '../../models/Cadastros';
import { cadastroUsuario } from '../../services/Services';

function CadastroUsuario() {

    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [cadastros, setCadastros] = useState<Cadastros>(
        {
            nome: "",
            senha: "",
            email: "",
            tipo: ""
        }
    );

    const [cadastrosResult, setCadastrosResult] = useState<Cadastros>(
        {
            nome: "",
            senha: "",
            email: "",
            tipo: ""
        }
    );

    useEffect(() => {
        if (cadastrosResult.email?.includes("@")) {
            navigate("/login")
        }
    }, [cadastrosResult, navigate]);

    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setCadastros({
            ...cadastros,
            [e.target.name]: e.target.value
        })
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();

        if (confirmarSenha == cadastros.senha) {
            cadastroUsuario(`/api/Usuarios/cadastrar`, cadastros, setCadastrosResult)
            alert('Usuário cadastrado com sucesso!')
            navigate("/login")
        }
        else {
            alert('Dados inconsistentes. Por favor, verifique as informações do cadastro.')
        }
    }

    return (
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid item xs={6} className='img'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField color='success' value={cadastros.nome} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth  />
                        <TextField color='success' value={cadastros.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField color='success' value={cadastros.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField color='success' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='ConfirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <FormControl
                            onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)}
                            variant='outlined' margin='normal' fullWidth className='tipoUsuario'>
                            <InputLabel htmlFor='tipo-usuario' className='tipoUsuario' color='success'>Tipo de Usuário</InputLabel>
                            <Select value={cadastros.tipo} native label="Tipo de Usuário" inputProps={{ name: 'tipo', id: 'tipo-usuario', }} variant='outlined' color='success'>
                                <option arial-label="None" value="" />
                                <option value="CLIENTE">Cliente</option>
                                <option value="FORNECEDOR">Fornecedor</option>
                            </Select>
                        </FormControl>

                        <Box marginTop={2} textAlign='center' className='bt'>
                            <Link to='/login' className='text-decorator-none'>
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Button type='submit' variant='contained'>
                                Cadastrar
                            </Button>
                        </Box>
                    </form>
                </Box>

            </Grid>

        </Grid>

    );

}
export default CadastroUsuario;