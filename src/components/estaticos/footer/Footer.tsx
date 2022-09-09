import React from 'react';
import './Footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {

    return (
        <footer id='container-principal'>
            <section className='section-footer'>
                <article>
                    <h2>EcoFarm</h2>
                    <ul className='menu'>
                        <li><a href="#">Sobre nós</a></li>
                        <li><a href="#">Nossos serviços</a></li>
                        <li><a href="#">Politica de privacidade</a></li>
                    </ul>
                </article>

                <article>
                    <h2>Duvidas</h2>
                    <ul className='menu'>
                        <li><a href="#">Perguntas frequentes</a></li>
                        <li><a href="#">Como Funciona</a></li>
                        <li><a href="#">Opções de pagamento</a></li>
                    </ul>
                </article>

                <article>
                    <h2>Fale conosco</h2>
                    <ul className='menu'>
                        <li><a href="#">Central de ajuda</a></li>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">Seja um fornecedor</a></li>
                    </ul>
                </article>

                <article>
                    <h2>Redes sociais</h2>
                    <ul className='menu'>
                        <li><GitHubIcon className='icons' /><a href="#" className='redes'>Github</a></li>
                        <li><LinkedInIcon className='icons' /><a href="#" className='redes'>Linkendin</a></li>
                        <li><InstagramIcon className='icons' /><a href="#" className='redes'>Instagram</a></li>
                    </ul>
                </article>
            </section>
            <footer id='rodape'>
                <h5>Direitos reservados: EcoFarm ©</h5>
            </footer>
        </footer>
    );

}
export default Footer;