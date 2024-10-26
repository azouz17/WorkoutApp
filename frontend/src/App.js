import React , {useState} from 'react'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import { HashRouter , BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route  path="/" element={<Signin/>}/>
      <Route path="Signup" element={<Signup />}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
