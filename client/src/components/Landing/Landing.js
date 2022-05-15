import React from 'react';

import './Landing.css';
import { signInWithGoogle } from '../../Firebase';

// Material UI
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#fffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  export default function Landing() {
  return (
   <Box sx={{ flexGrow: 1 }} mb={30}>
      <Grid container spacing={2} columns={16} alignItems='center' justify='center' mt={4}>
        <Grid item xs='16' md={8}>
            <Item elevation={0} p={2}>
                <h1 className='bold-red-text' m={2} variant="h1">
                    Connect with 
                    UH students
                </h1>
                <Typography mb={4} style={{ fontWeight: 800 }}>
                    UH Chat makes it easy to connect with other students at The University of Houston.
                </Typography>

                <Button onClick={ signInWithGoogle } variant="contained" size="large" style={{ background: '#C7112F'}}>login</Button>
                
               

            </Item>
           
        </Grid>
        <Grid item xs='16' md={8}>
            <Item elevation={0}>
                    <img src="/connect.svg" alt="students" />
            </Item>
        </Grid>

      </Grid>
    </Box>
  )
}
