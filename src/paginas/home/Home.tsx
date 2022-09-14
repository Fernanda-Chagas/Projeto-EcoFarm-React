import { Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import React from 'react';
import './Home.css';


function Home() {
    return (
       <Grid container direction="row" justifyContent='center' alignItems='center'>
        <Box className='imagem'>
        </Box>
        <Box className='texto1'>
            <p>
            A EcoFarm nasceu como uma Organização não-Governamental,
buscando seguir dentre os objetivos da ONU, a ODS 2 (Fome zero e Agricultura sustentável). 
Nosso ituito é oferecer alimentos de qualidade para todos, ligando pequenos agricultores que não ultilizam agrotóxicos,
a restaurantes, mercados e até mesmo você pode comprar no nosso site. Por um preço justo e produtos frescos, nossa meta é 
reverter os lucros do nosso mercado para ajudar ONGs que trabalham com pessoas em situações de vulnerabilidade, ajudando 
assim a criar uma sociedade mais igualitária para todos, e também, segura.
            </p>
        </Box>
       </Grid>

    );

}

export default Home;