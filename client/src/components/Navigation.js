import React from 'react'
import { useState } from 'react';
import Popup from './Popup/Popup';

// Material UI
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Image from 'react-image-resizer';
//#C7112F

export default function Navigation() {

    // popup state
    const [buttonPopup, setButtonPopup] = useState(false);


  return (
 <Box sx={{ flexGrow: 1 }}>
    <AppBar position="relative" m={14} style={{ background: '#FFFFFF' }} elevation={0}>
      <Toolbar>
      <Image
          img src={'/uhchat.png'} alt="uh-chat" class="center"
          height={80}
          width={100}
        />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          UH Chat
        </Typography>
        <Button onClick={() => setButtonPopup(true)} variant="text" color='error' >Login</Button>
        <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>

        </Popup>
      </Toolbar>
    </AppBar>
    </Box>
   
  );
}

