import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/HomePage/Home.jsx'
import Login from './Pages/LoginPage/Login.jsx';
import Register from './Pages/RegisterPage/Register.jsx';
import Search from './Pages/SearchPage/Search.jsx';
import Detail from './Pages/DetailPage/Detail.jsx';

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
          <Route path='/search' element={<Search/>}/>
          <Route path='/search/detail' element={<Detail/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
