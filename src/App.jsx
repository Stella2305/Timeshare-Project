import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Pages/HomePage/Home.jsx'
import Footer from './Components/Footer/Footer.jsx';
import SearchBar from './Components/SearchBar/SearchBar.jsx';
import Login from './Pages/LoginPage/Login.jsx';
import Register from './Pages/RegisterPage/Register.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        {/* <NavBar/> */}
        {/* <Footer/> */}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
