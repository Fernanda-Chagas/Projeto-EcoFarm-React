
import { Box, Card, Grid } from '@mui/material';
import { title } from 'process';
import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <section className='slider'>
                <div className='slider-content'>
                    <img className="slider-item" src="https://images.pexels.com/photos/70746/strawberries-red-fruit-royalty-free-70746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Morango" />
                    <img className="slider-item" src="https://images.pexels.com/photos/61127/pexels-photo-61127.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banana" />
                    <img className="slider-item" src="https://images.pexels.com/photos/693794/pexels-photo-693794.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Maça Verde" />
                    <img className="slider-item" src="https://images.pexels.com/photos/266346/pexels-photo-266346.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Limão" />
                </div>
            </section>

            <Grid container alignItems='center' justifyContent='center' className="gridContainer1">
                <Box className="title">
                    <h2>Eco Farm - Comida de qualidade na sua mesa!</h2>
                </Box>
                <Grid item xs={6} className="txtresume" alignItems='center' justifyContent='center'>
                    <Box padding={5}>
                        <p> A Eco Farm nasceu como uma Organização não-Governamental, buscando seguir dentre os objetivos da ONU, a ODS 2 (Fome zero e Agricultura sustentável).
                        </p>
                        <p>Nosso intuito é oferecer alimentos de qualidade para todos, ligando pequenos agricultores que não utilizam agrotóxicos, a restaurantes, mercados e até mesmo você pode comprar no nosso site.
                        </p>
                        <p>Por um preço justo e produtos frescos, nossa meta é reverter os lucros do nosso mercado para ajudar ONGs que trabalham com pessoas em situações de vulnerabilidade, ajudando assim a criar uma sociedade mais igualitária para todos e também segura.
                        </p>
                    </Box>
                </Grid>
            </Grid>

            <Grid container alignItems='center' justifyContent='center' className="gridContainer2">
                <Box className="title">
                    <h2>Nossos produtos</h2>
                </Box>
                <Grid item className="gridImage">
                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/tg6i5Zx.png" alt="Frutas" />
                                <div className="image__overlay image__overlay--blur" >
                                    <p>Frutas</p>
                                </div>
                            </a>
                        </Box>
                    </Grid>
                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/ujgxfUU.jpg" alt="Verduras" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Verduras</p>
                                </div>
                            </a>

                        </Box>
                    </Grid>

                    <Grid item xs={3} >
                        <Box className="image">
                            <a href="/produtos">
                                <img className="image__img" src="https://i.imgur.com/nseSVu9.png" alt="Legumes" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Legumes</p>
                                </div>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}


export default Home;