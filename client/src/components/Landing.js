import React from 'react';
//import Popup from './Popup/Popup';
import LoginButton from './Login';
import { useEffect } from 'react';
import { useState } from 'react';
import { gapi } from 'gapi-script';
import Popup from 'react-animated-popup'


import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Button} from '@mui/material';
import Radium, { StyleRoot } from 'radium';
import Image from 'react-image-resizer'
const clientId = '40905900314-8thciv5blalp0662ukqke1ibqekqap75.apps.googleusercontent.com'


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === '#fffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

function Landing() {
    const img = {
        /* Extra small devices (phones, 600px and down) */
        '@media screen and (maxWidth: 600px)': {
            width: 300,
            height: 300,
        },
        /* Small devices (portrait tablets and large phones, 600px and up) */
        '@media screen and (minWidth: 600px)': {
            width: 300,
            height: 300,
        },
        /* Medium devices (landscape tablets, 768px and up) */
        '@media screen and (minWidth: 768px)': {
            width: 380,
            height: 380,
        },
        /* Large devices (laptops/desktops, 992px and up) */
        '@media screen and (minWidth: 992px)': {
            width: 400,
            height: 400,
        },
        /* Extra large devices (large laptops and desktops, 1200px and up) */
        '@media screen and (minWidth: 1200px)': {
            width: 500,
            height: 500,
        }, 
  };

  const text = {
    fontWeight: 600,
     color:'#C7112F',
    /* Extra small devices (phones, 600px and down) */
    '@media screen and (maxWidth: 600px)': {
        fontSize: 'small',
    },
    /* Small devices (portrait tablets and large phones, 600px and up) */
    '@media screen and (minWidth: 600px)': {
        fontSize: 'small',

    },
    /* Medium devices (landscape tablets, 768px and up) */
    '@media screen and (minWidth: 768px)': {
        fontSize: 'small',

    },
    /* Large devices (laptops/desktops, 992px and up) */
    '@media screen and (minWidth: 992px)': {
        fontSize: 'small',

    },
    /* Extra large devices (large laptops and desktops, 1200px and up) */
    '@media screen and (minWidth: 1200px)': {
        fontSize: 'small',

    }, 
};
    // popup state
    const [visible, setVisible] = useState(false);
    // google log in
    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load('client:auth2', start)
    })

  return (
   <Box sx={{ flexGrow: 1 }} mb={30}>
      <Grid container spacing={2} columns={16} alignItems='center' justify='center' mt={4}>
        <Grid item xs='16' md={8}>
            <Item elevation={0} p={2}>
                <Typography m={2} style={text} variant="h1">
                    Connect with 
                    UH students
                </Typography>
                <Typography mb={4} style={{ fontWeight: 800 }}>
                    UH Chat makes it easy to connect with other students at The University of Houston.
                </Typography>

                <Button onClick={() => setVisible(true)} variant="contained" size="large" style={{ background: '#C7112F'}}>login</Button>
                
                <Popup visible={visible} onClose={() => setVisible(false)}>
                    <h2> Sign in to </h2>
                    <Image
                        img src={'/uhchat.png'} alt="uh-chat" class="center"
                        height={80}
                        width={100}
                    />
                    <LoginButton/>
                </Popup>

            </Item>
           
        </Grid>
        <Grid item xs='16' md={8}>
            <Item elevation={0}>
                <StyleRoot>
                    <img src="/connect.svg" style={img} alt="students" />
                </StyleRoot>
            </Item>
        </Grid>

      </Grid>
    </Box>
  )
}
export default Radium(Landing)