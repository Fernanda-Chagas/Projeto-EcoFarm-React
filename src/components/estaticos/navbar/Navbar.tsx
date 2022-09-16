import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css'

function Navbar() {

    return (
        <nav>
            <main id='basics' >
                <section className='menu-n'>
                    <div className='loguinho'></div>
                    <section className='shadow'>
                        <article>
                            <ul className='list-n'>
                                <li><a href='/home'>Home</a></li>
                                <li><a href='/produtos'>Produtos</a></li>
                                <li><a href='/sobre'>Sobre</a></li>
                                <li><a href='/seja-um-fornecedor'>Seja um fornecedor</a></li>
                                <li><a href='/contato'>Contato</a></li>
                            </ul>
                        </article>
                    </section>
                    <section>
                        <article>
                            <ul className='list-n'>
                                <li><a href='#'><AddShoppingCartIcon /></a></li>
                                <li> <Link to='/login' className='link' ><LogoutIcon /></Link> </li>
                            </ul>
                        </article>
                    </section>
                </section>
            </main>
        </nav>
    );
}
export default Navbar;