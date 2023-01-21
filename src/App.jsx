import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ByCart from './Components/ByCart'
import Fav from './Components/Fav'
import Navbar from './Components/Navbar'
import Products from './Components/Products'

const App = () => {
  return (
    <div className=' container'>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Products/>} />
        <Route path='/fav' element={<Fav/>} />
        <Route path='/cart' element={<ByCart/>} />
      </Routes>
    </div>
  )
}

export default App