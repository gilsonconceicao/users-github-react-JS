import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
//page
import NavBar from './Components/NavBar'; 
import RequestGit from './Pages/RequestGit';
import ViewPerfil from './Pages/ViewPerfil';
//componenes
import Home from './Pages/Home'

const RoutesPage = () => {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>} />  
          <Route path='/request' element={<RequestGit/>}/>
          <Route path='/perfil/:login' element={<ViewPerfil/>}/>
        </Routes>
      </BrowserRouter>  
    </div>
  )
}

export default RoutesPage