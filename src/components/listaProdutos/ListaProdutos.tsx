import React, { useEffect, useState } from 'react';
import Estoque from '../../models/Estoque';
import { busca } from '../../services/Services';
import './ListaProdutos.css';
import { useCart} from '../../hooks/useCart';
import useLocalStorage from 'react-use-localstorage';

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

    const { addProduct } = useCart();

    function handleAddCart(idProduto: number){
        addProduct(idProduto)
    }

    return (
        <>
            {produtos.map(produto => (
                'TODOS' === prop.categoria
                    ?
                    <>

                        <article className='card'>
                            <img src={produto.fotoProduto} alt={produto.nomeProduto} id='img-card' />
                            <img src='https://i.imgur.com/KCYfXt3.jpeg' alt='Logo-EcoFarm' id='logo-card' />
                            <h1>{produto.nomeProduto}</h1>
                            <h5 className='mg-top'>{produto.categoria}</h5>
                            <h5 className='mg-top'>Quantidade: {produto.quantidade} Kg</h5>
                            <h2 className='mg-toph2'>R$: {produto.valor}<span id='lr-kg'>  Kg</span></h2>
                            <button id='btn-comprar' onClick={() => handleAddCart(produto.id)}>Comprar</button>
                        </article>
                    </>
                    :
                    ''
            ))}

            {produtos.map(produto => (
                produto.categoria === prop.categoria
                    ?
                    <article className='card'>
                        <img src={produto.fotoProduto} alt={produto.nomeProduto} id='img-card' />
                        <img src='https://i.imgur.com/KCYfXt3.jpeg' alt='Logo-EcoFarm' id='logo-card' />
                        <h1>{produto.nomeProduto}</h1>
                        <h5 className='mg-top'>{produto.categoria}</h5>
                        <h5 className='mg-top'>Quantidade: {produto.quantidade} Kg</h5>
                        <h2 className='mg-toph2'>R$: {produto.valor}<span id='lr-kg'>  Kg</span></h2>
                        <button id='btn-comprar' onClick={() => handleAddCart(produto.id)}>Comprar</button>
                    </article>
                    :
                    ''
            ))}
        </>
    );

}

export default ListaProdutos;