import { Button } from '@mui/material'
import React from 'react'
import { signOutWithGoogle } from '../Firebase';
import { Messages } from '../components';

export default function Chat() {
 
  return (
    <div>
        <Messages></Messages>
        <Button onClick={ signOutWithGoogle }> Sign out</Button>
    </div>
  )
}

