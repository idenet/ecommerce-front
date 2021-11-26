import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Signup from './components/core/Signup'
import Signin from './components/core/Signin'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default Router
