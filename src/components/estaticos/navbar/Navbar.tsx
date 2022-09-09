import React from 'react';
import { Link } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import './Navbar.css'

function Navbar() {

    return (
        <nav  >
            <main id='basics' >
                <section className='menu-n'  >
                    <article >
                        <h2 >
                            EcoFarm
                        </h2>
                    </article>

                    <section>
                        <article>
                            <ul className='list-n'>
                                <li><a href='#'>Home</a></li>
                                <li><a href='#'>Produtos</a></li>
                                <li><a href='#'>Sobre</a></li>
                                <li><a href='#'><AddShoppingCartIcon /></a></li>
                                <li> <Link to='/login' className='link'><LogoutIcon /></Link> </li>
                            </ul>
                        </article>
                    </section>
                    </section>
            </main>
        </nav>
    );
}
export default Navbar;