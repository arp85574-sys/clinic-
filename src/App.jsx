import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'
import About from './Pages/About'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Deals from './Pages/Deals'


function App() {
  

  return (
    <>
     <BrowserRouter>
     <Navbar/>

     <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/About' element={<About/>}/>
<Route path='/Login' element={<Login/>}/>
<Route path='/Signup'element={<Signup/>}/>
<Route path='/deals'element={<Deals/>}/>





     </Routes>
     
     
     
     
     
     
     
     </BrowserRouter> 
      
    </>
  )
}

export default App
