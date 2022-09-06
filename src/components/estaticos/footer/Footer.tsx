import React from 'react';
import {Box} from '@mui/material';
import {Grid} from '@material-ui/core';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



function Footer() {

    return (
       <Grid>

        <Box>
            <h1>EcoFarm</h1>
            <ul>
                <li>Sobre nós</li>
                <li>Nossos serviços</li>
                <li>Politica de privacidade</li>
            </ul>
        
        </Box>
        <Box>
        <h1>Duvidas</h1>
            <ul>
                <li>Perguntas frequentes</li>
                <li>Como Funciona</li>
                <li>Opções de pagamento</li>
            </ul>
        
        </Box>
        <Box>
        <h1>Fale com a gente</h1>
            <ul>
                <li>Central de ajuda</li>
                <li>Fale conosco</li>
                <li>Seja um fornecedor</li>
            </ul>
        
        </Box>
        <Box>
        <h1>Redes sociais</h1>
            <ul>
                <li>Github</li>
                <li>Linkendin</li>
                <li>Instagram</li>
            </ul>
        
        </Box>
        <Box></Box>

       </Grid>

        
    );

}
export default Footer;