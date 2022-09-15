import React, { useEffect, useState } from 'react';
import Estoque from '../../models/Estoque';
import { busca } from '../../services/Services';
import './ListaProdutos.css'

function ListaProdutos(prop: any) {
    const [produtos, setProdutos] = useState<Estoque[]>([]);

    async function getProdutos() {
        await busca('/api/Estoque/', setProdutos, {
            params: {
                produtosLista: produtos,
                categoria: prop.categoria,
                ordem: prop.ordem,
            }
        })
    }

    useEffect(() => {
        getProdutos()
    }, [produtos.length])

    console.log(prop.categoria);
    console.log(prop.ordem);

    return (
        <>
            {produtos.map(produto => (


                <article className='card'>
                    <img src={produto.fotoProduto} alt="Foto" />
                    <h3>Nome: {produto.nomeProduto}</h3>
                    <h4>R$: {produto.valor}</h4>
                </article>

            ))}
        </>
    );
}

export default ListaProdutos;