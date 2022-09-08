import React from 'react';
import {Box} from '@mui/material';
import {Grid} from '@material-ui/core';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    return (
       <footer className='container'>
        <div className='boxs'>
            <h2>EcoFarm</h2>
            <ul>
                <li>Sobre nós</li>
                <li>Nossos serviços</li>
                <li>Politica de privacidade</li>
            </ul>        
        </div>
        <div className='boxs'>
        <h2>Duvidas</h2>
            <ul>
                <li>Perguntas frequentes</li>
                <li>Como Funciona</li>
                <li>Opções de pagamento</li>
            </ul>        
        </div>
        <div className='boxs'>
        <h2>Fale com a gente</h2>
            <ul>
                <li>Central de ajuda</li>
                <li>Fale conosco</li>
                <li>Seja um fornecedor</li>
            </ul>        
        </div>
        <div className='boxs'>
        <h2>Redes sociais</h2>
            <ul>
                <li>Github</li>
                <li>Linkendin</li>
                <li>Instagram</li>
            </ul>        
        </div>
       </footer>        
    );

}
export default Footer;