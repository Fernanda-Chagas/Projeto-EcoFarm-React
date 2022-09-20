import { Button } from '@mui/material';
import React from 'react';
import './Formulario.css';

function Formulario() {
    return (
        <section className='section-form'>
            <article>
                <div>
                    <h1>Entre em contato</h1>
                    <p>Preencha o formulário abaixo para enviar um agradecimento, sugestão ou relatar algum problema.</p>
                </div>
                <form action='https://formspree.io/f/myyveodn' method='post' className='forms'>

                    <input id="nome" type="text" name="nome" placeholder='Nome Completo' required/>

                    <input id="email" type="email" name="email" placeholder='E-mail Completo'  required/>

                    <textarea id="message" name="message" placeholder='Escreva sua mensagem' required/>

                    <Button type="submit" id='btn-form' variant='contained' >
                        Enviar
                    </Button>
                </form>
            </article>
        </section>
    );
}

export default Formulario;