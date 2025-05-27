import { useState } from 'react'

import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RegisterForm from './components/RegisterForm'


function App() {
  

  return (
    
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<RegisterForm/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App
