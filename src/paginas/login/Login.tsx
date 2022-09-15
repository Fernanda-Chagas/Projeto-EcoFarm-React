import React,  { useState, useEffect, ChangeEvent } from 'react';
import { Grid, TextField, Typography, Button } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { login } from '../../services/Services';
import UserLogin from '../../models/Autentication';
import useLocalStorage from 'react-use-localstorage';
import './Login.css';

function Login(){
 
    let navigate= useNavigate();
    const [token, setToken] = useLocalStorage('token');

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            email: "",
            senha: "",
            token: ""
        }
    );

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(()=>{
        if(token !== ''){
            navigate('/produtos')
        }
    })



    async function onSubmit(e: ChangeEvent<HTMLFormElement>){
        
        e.preventDefault();

        try {
            await login(`/api/Usuarios/logar`, userLogin, setToken)
            
            alert('Usuario logado com sucesso!');
        } catch (error) {
            alert('Dados do usuário incorretos. Erro ao logar!');
        }

    }
    
    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.email} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e:ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                            <Button type='submit' variant='contained' color='primary'>
                                Logar
                            </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2}>
                        <Box marginRight={1}>
                            <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastro'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid xs={6} className='imagem'>
            </Grid>
        </Grid>
    );
}

export default Login;