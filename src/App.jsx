import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar.jsx'
import Home from './Pages/HomePage/Home.jsx'
import Footer from './Components/Footer/Footer.jsx';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Footer/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          {/* <Route path='/' element={<Home/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
