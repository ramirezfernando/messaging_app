import { Button, Grid } from '@mui/material'
import React from 'react'
import { signOutWithGoogle } from '../Firebase';
import { SideBar, Profile, Messages, Courses, Settings } from '../components/Chat';
/*
constructor(props) {
    super(props);
    this.state = {
       changePage: false
    }
}
*/
export default function Chat() {
  

  return (
   

    <Grid container spacing={0} item sm={12} md={12}>
        <Grid item sm={0} md={2} sx={{display: { xs: "none", md: "block", lg: "block" }}}>
            <SideBar/>
        </Grid>
        <Grid item sm={12} md={4}>
            // messages list
        </Grid>
        <Grid item sm={0} md={6} sx={{display: { xs: "none", md: "blocks", lg: "block" }}}>
            // actual messages
        </Grid>
    </Grid>
  )
}

