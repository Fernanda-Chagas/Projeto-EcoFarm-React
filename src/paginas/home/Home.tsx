
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
                    <img className="slider-item" src="https://images.pexels.com/photos/1486976/pexels-photo-1486976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Banana" />
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
                        <p>Com o Brasil estando atualmente em 31° Lugar no mapa da fome, a EcoFarm nasceu da vontade de fazer a diferença!
                        </p>
                        <p>Com 15% da população brasileira vivendo em situação de miséria e vulnerabilidade, nós da EcoFarm, pensamos em uma solução prática e efetiva através da ODS 2 da ONU, podemos viabilizar o acesso a uma agricultura mais sustentável, e com os lucros da nossa ONG.
                        </p>
                        <p>E com os lucros da nossa ONG, ajudar outras ONGs que trabalham com pessoas em situação de vulnerabilidade, ajudando assim ao combate contra a fome.
                        </p>
                    </Box>
                </Grid>
            </Grid>

            <Grid container alignItems='center' justifyContent='center' className="gridContainer2">
                <Box className="title">
                    <h2>Ong's que trabalhamos</h2>
                </Box>
            </Grid>
            <Grid container alignItems='center' justifyContent='center' className="gridContainer2">
                <Grid item className="gridImage">
                    <Grid item xs={3}>
                        <Box className="image">
                            <a href="/sobre">
                                <img className="image__img" src="https://cdn.discordapp.com/attachments/1011758755010068545/1024413932527558716/unknown.png" alt="Haja" />
                                <div className="image__overlay image__overlay--blur" >
                                    <p>HAJA</p>
                                </div>
                            </a>
                        </Box>
                    </Grid>


                    <Grid item xs={3}>
                        <Box className="image">
                            <a href="/sobre">
                                <img className="image__img" src="https://cdn.discordapp.com/attachments/1011758755010068545/1024415469177937990/unknown.png" alt="Amigos do Bem" />
                                <div className="image__overlay image__overlay--blur">
                                    <p>Amigos do bem</p>
                                </div>
                            </a>
                        </Box>
                    </Grid>

                    <Grid item xs={3}>
                        <Box className="image">
                            <a href="/sobre">
                                <img className="image__img" src="https://cdn.discordapp.com/attachments/1011758755010068545/1024415505316053012/unknown.png" alt="Progen" />
                                <div className="image__overlay image__overlay--blur">
                                    <p> Progen </p>
                                </div>
                            </a>
                        </Box>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container alignItems='center' justifyContent='center' className="gridContainer3">
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