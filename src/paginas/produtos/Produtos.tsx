import React , { useState } from 'react';
import Navbar from '../../components/estaticos/navbar/Navbar';
import ListaProdutos from '../../components/listaProdutos/ListaProdutos';

import './Produtos.css';

function Produtos() {

    const [categoriaState, setCategoriaState] = useState('FRUTA');
    const [ordemState, setOrdemState] = useState('NomeProduto');

    const onRadioChangeCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCategoriaState(e.currentTarget.value)
    };

    const onRadioChangeOrder = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOrdemState(e.currentTarget.value)
    };

    return(
        <>
            <div id='page_produtos'>

                    <section>
                        <div>
                            
                            <label htmlFor="fruta">
                                Fruta
                                <input type="radio" name="categoria" id='fruta' value="FRUTA" onChange={(e) => onRadioChangeCategory(e)} defaultChecked />
                            </label>
                            
                            <label htmlFor="verdura">
                                Verdura
                                <input type="radio" name="categoria" id='verdura' value="VERDURA" onChange={(e) => onRadioChangeCategory(e)} />
                            </label>
                            
                            <label htmlFor="legumes">
                                Legumes
                                <input type="radio" name="categoria" id='legumes' value="LEGUMES" onChange={(e) => onRadioChangeCategory(e)} />
                            </label>
                        </div>

                        <div>
                            
                            <label htmlFor="nome">
                                Nome
                                <input type="radio" name="ordem" id='nome' value="NomeProduto" onChange={(e) => onRadioChangeOrder(e)} defaultChecked />
                            </label>
                            
                            <label htmlFor="valor">
                                Valor
                                <input type="radio" name="ordem" id='valor' value="Valor" onChange={(e) => onRadioChangeOrder(e)} />
                            </label>
                        </div>
                    </section>

                    <section>
                        <ListaProdutos categoria={categoriaState} ordem={ordemState} />
                    </section>
                
            </div>
        </>
    );
}

export default Produtos;