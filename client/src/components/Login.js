import React from 'react'
import { GoogleLogin } from 'react-google-login';

const clientId = '40905900314-8thciv5blalp0662ukqke1ibqekqap75.apps.googleusercontent.com'
function Login() {

    const onSuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }
    const onFailure = (res) => {
        console.log("LOGIN FAILED! res: ", res);
    }


  return (
    <div id='signInButton'>
        <GoogleLogin
            clientId={clientId}
            buttonText='Login'
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    </div>
  )
}

export default Login;