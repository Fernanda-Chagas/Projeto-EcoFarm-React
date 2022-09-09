import React from "react";
import './CadastroUsuario.css';

function CadastroUsuario() {
    return (
        /* 
        {Nome - Sobranome} {Senha- Confirmar Senha} - {Usuario} - {E-mail} */
        <main id="img-bg">
            <div className="container-cadastro">
                <form className="cadastro-usuario" >
                    <label htmlFor="nome"> Nome </label>
                    <input type="text" name="nome" placeholder="Nome" />

                    <label htmlFor="sobrenome">Sobrenome</label>
                    <input type="text" name="sobrenome" placeholder="Sobrenome" />

                    <label htmlFor="usuario">Usuario</label>
                    <input type="text" name="usuario" placeholder="Usuario" />

                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" placeholder="Email" />

                    <label htmlFor="senha">Senha</label>
                    <input type="password" name="senha" placeholder="Senha" />

                    <label htmlFor="confirmarsenha">Confirmar Senha</label>
                    <input type="password" name="confirmarsenha" placeholder="ConfirmarSenha" />
                    
                    <button type="button" className="botao">
                        Cadastrar-se
                    </button>
                </form>

            </div>
        </main>

    );

}
export default CadastroUsuario;