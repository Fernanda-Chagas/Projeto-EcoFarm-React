import React, { useState, useEffect, ChangeEvent } from 'react';
import { Grid, Typography, Button, TextField } from '@material-ui/core';
import { Box } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        <Grid container direction='row' justifyContent='center' alignItems='center' className='fundo'>
            <Grid item xs={6} className='img'></Grid>
            <Grid item xs={6} alignItems='center'>
                <Box paddingX={10}>
                    <form>
                        <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' className='textos2'>Cadastrar</Typography>

                        <TextField id='nome' label='Nome' variant='outlined' name='nome' margin='normal' fullWidth />
                        <TextField id='email' label='E-mail' variant='outlined' name='email' margin='normal' fullWidth />
                        <TextField id='tipoUsuario' label='Tipo Usuario' variant='outlined' name='tipoUsuario' margin='normal' fullWidth />
                        <TextField id='senha' label='Senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <TextField id='confirmarSenha' label='Confirmar Senha' variant='outlined' name='confirmarSenha' margin='normal' type='password' fullWidth />

                        <Box marginTop={2} textAlign='center' className='bt'>
                            <Link to='/home' className='text-decorator-none '>
                                <Button variant='contained' className='btnCancelar'>
                                    Cancelar
                                </Button>
                            </Link>
                            <Link to='/login'>
                                <Button type='submit' variant='contained'>
                                    Cadastrar
                                </Button>
                            </Link>
                        </Box>
                    </form>
                </Box>

            </Grid>


        </Grid>

    );

}
export default CadastroUsuario;