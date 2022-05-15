import React from 'react'
import { Home, Chat } from './pages';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { AuthContextProvider, useAuthState } from './Firebase';

const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return(
    <Route
      {...props}
      render={routeProps =>
        isAuthenticated ? <C {...routeProps} /> : <Link to='/' />
      }
    />
  )
}
const UnAuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState()
  return(
    <Route
      {...props}
      render={routeProps =>
        !isAuthenticated ? <C {...routeProps} /> : <Link to='/chat' />
      }
    />
  )
}

function App() {
  return (      
    <AuthContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>    
        </BrowserRouter>
    </AuthContextProvider>

  );
}

export default App;
