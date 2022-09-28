import React , { useState } from 'react';
import ListaProdutos from '../../components/listaProdutos/ListaProdutos';

import './Produtos.css';

function Produtos() {

    const [categoriaState, setCategoriaState] = useState('TODOS');
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
                            <h2>Categoria</h2>
                            <label htmlFor="todos" className='items'>
                                    <input type="radio" name="categoria" id='todos' value="TODOS" onChange={(e) => onRadioChangeCategory(e)} defaultChecked />
                                    Todos
                                </label>

                                <label htmlFor="frutas" className='items'>
                                    <input type="radio" name="categoria" id='frutas' value="FRUTAS" onChange={(e) => onRadioChangeCategory(e)} />
                                    Fruta
                                </label>
                                
                                <label htmlFor="verduras" className='items'>
                                    <input type="radio" name="categoria" id='verduras' value="VERDURAS" onChange={(e) => onRadioChangeCategory(e)} />
                                    Verdura
                                </label>
                                
                                <label htmlFor="legumes" className='items'>
                                    <input type="radio" name="categoria" id='legumes' value="LEGUMES" onChange={(e) => onRadioChangeCategory(e)} />
                                    Legumes
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