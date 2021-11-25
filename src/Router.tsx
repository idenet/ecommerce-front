import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/core/Home';
import Shop from './components/core/shop';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router