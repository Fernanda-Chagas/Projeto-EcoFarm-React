import React, { ChangeEvent } from 'react';
import { Drawer, Button, Divider, Badge, IconButton, Typography } from '@material-ui/core';
import { CartItem, useCart } from '../../hooks/useCart';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import "./SideCart.css";

type Anchor = 'right';

export default function SideCart() {

    let navigate = useNavigate();
    const [token, setToken] = useLocalStorage('token');
    const { cart, updateProductAmount, removeProduct } = useCart();

    function handleProductIncrement(produto: CartItem) {
        const IncrementArguments = {
            idProduto: produto.id,
            amount: produto.quantidade + 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleProductDecrement(produto: CartItem) {
        const IncrementArguments = {
            idProduto: produto.id,
            amount: produto.quantidade - 1
        }
        updateProductAmount(IncrementArguments)
    }

    function handleRemoveProduct(idProduto: number) {
        removeProduct(idProduto)
    }

    function handleClick() {
        if (token === "") {
            toast.error('Você precisa estar logado para finalizar a compra!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined
            });
            navigate("/login")

        }
        else {

            toast.success('Compra Realizada com Sucesso!!', {
                theme: "colored"
            })
        }
    }


    const [state, setState] = React.useState({
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        setState({ ...state, [anchor]: open });
    };

    /* Conteudo do carrinho Altera Aqui */

    const list = (anchor: Anchor) => (
        <>
            <div>
                <Divider />
                {cart.map(produto => (
                    <div key={produto.id} className="container-carrinho">
                        <h3>{produto?.nomeProduto}</h3>
                        <img src={produto?.fotoProduto} alt={produto?.nomeProduto} className='imgCart' />
                        <h4>{produto.quantidade}x</h4>

                        <div >
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                disabled={produto.quantidade <= 1}
                                onClick={() => handleProductDecrement(produto)}
                            >
                                <RemoveCircleOutlineIcon />
                            </Button>
                            <input
                                type="text"
                                readOnly
                                value={produto.quantidade}
                            />
                            <Button
                                className='botoes-carrinho'
                                type="button"
                                data-testid="increment-product"
                                onClick={() => handleProductIncrement(produto)}
                            >
                                <AddCircleOutlineIcon />
                            </Button>
                        </div>
                        <Button
                            variant="contained"
                            color="secondary"
                            className='btnDelete'
                            onClick={() => handleRemoveProduct(produto.id)}
                            startIcon={<DeleteIcon />}>
                            Delete
                        </Button>
                        <hr />
                    </div>

                ))}
                <Divider />
            </div>
             <div className='btFinish1'><button className='btn2' type='submit' value='submit' onClick={handleClick}>
                Finalizar Compra
            </button>
            </div>
            
            <div className='modalCart'>
                {/* <BasicModal /> */}
            </div>
        </>
    );

    return (
        /* BOTÃO DO CARRINHO */
        /* BOTÃO DO CARRINHO */
        <div>
            {(['right'] as Anchor[]).map((anchor) => (
                <React.Fragment key={anchor}>
                     <Button onClick={toggleDrawer(anchor, true)}className='list-n'>
                    <AddShoppingCartIcon />
                    </Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}