import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = '40905900314-8thciv5blalp0662ukqke1ibqekqap75.apps.googleusercontent.com'

function Logout() {

    const onSuccess = (res) => {
        console.log("LOGOUT SUCCESS!");
    }



  return (
    <div id='signOutButton'>
        <GoogleLogout
            clientId={clientId}
            buttonText={'Logout'}
            onLogoutSuccess={onSuccess}
        />
    </div>
  )
}

export default Logout;