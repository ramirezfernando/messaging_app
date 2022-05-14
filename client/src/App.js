import React from 'react'

import { Home, Chat } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// For inline media queries
import Radium, { StyleRoot } from 'radium';


function App() {
  return (
    <StyleRoot>
            
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
    </BrowserRouter>
    
    </StyleRoot>

  );
}

export default Radium(App);
