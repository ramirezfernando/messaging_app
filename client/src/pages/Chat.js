import React from 'react'
import LogoutButton from '../components/Logout';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';

const clientId = '40905900314-8thciv5blalp0662ukqke1ibqekqap75.apps.googleusercontent.com'


export default function Chat() {
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
    <div>chat

<LogoutButton/>

    </div>
  )
}

