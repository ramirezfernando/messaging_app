import { Button } from '@mui/material'
import React from 'react'
import { signOutWithGoogle } from '../Firebase';


export default function Chat() {
 
  return (
    <div>chat
        <Button onClick={ signOutWithGoogle }> Sign out</Button>
    </div>
  )
}

