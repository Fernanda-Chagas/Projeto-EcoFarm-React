import { Grid, TextField, Typography } from '@material-ui/core';
import { TextFields } from '@mui/icons-material';
import { Box } from '@mui/material';
import React from 'react';
import './Login.css';

function Login(){
    return(
        <div className='box1'>
        <div className='containerlogin'>
               <form>
                    <label htmlFor='usuario'></label>
                    <input type="text" name='usuario' placeholder='Usuario' />
                </form>

                <form>
                    <label htmlFor='senha'></label>
                    <input type="password" name='senha' placeholder='Senha' />
              </form>
              <a href="#">Recuperar senha</a>
              <button type='button' className='botao'>
                Log in
              </button>
        </div>
        
        </div>
    );
}

export default Login;