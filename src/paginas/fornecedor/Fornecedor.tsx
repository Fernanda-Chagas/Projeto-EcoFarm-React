import React from "react";
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import './Fornecedor.css';


function Fornecedor() {
    return (
        <main className='body'>
            <section className='section'>
                <h1 className='title'>Seja um fornecedor</h1>
                <p>Insira os dados abaixo e nós entraremos em contato !</p>
                <form action='https://formspree.io/f/myyveodn' method='post' className='form'>
                    <input type="email" placeholder="Email" name='Email' />
                    <input type="text" placeholder="Telefone para contato" name='Assunto' />
                    <input type="text" placeholder="Cpf/Cnpj" name='Cpf/Cnpj' />
                    <input type="text" placeholder="Assunto" name='Assunto' />
                    <textarea placeholder="Escreva aqui" name="Mensagem"></textarea>
                    <Button type="submit" variant='contained'>
                        Enviar
                    </Button>
                </form>
            </section>
        </main>
    )
}

export default Fornecedor;