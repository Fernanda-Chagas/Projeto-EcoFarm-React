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
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id totam veniam velit possimus dolorum nemo? Labore cupiditate neque recusandae iusto. Nesciunt, nisi vitae. Aperiam facilis distinctio fugit quam corrupti laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis, ipsam aut aliquam recusandae id molestias repellendus quas autem! Placeat nostrum repudiandae a quia incidunt exercitationem amet eum quas laboriosam.
            </p>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                Id totam veniam velit possimus dolorum nemo? Labore cupiditate neque recusandae iusto. 
                Nesciunt, nisi vitae. Aperiam facilis distinctio fugit quam corrupti laborum!
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Maxime omnis, ipsam aut aliquam recusandae id molestias repellendus quas autem! 
                Placeat nostrum repudiandae a quia incidunt exercitationem amet eum quas laboriosam.
            </p>
        </Box>
       </Grid>

    );

}

export default Home;