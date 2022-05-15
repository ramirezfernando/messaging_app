import React from 'react'

import { Home, Chat } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (      
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/chat' element={<Chat/>} />
        </Routes>
    </BrowserRouter>
    
  );
}

export default App;
