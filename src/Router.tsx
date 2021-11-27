import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoutes from './components/admin/AdminRoutes'
import PrivateRoute from './components/admin/PrivateRoute'
import Home from './components/core/Home'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/user/dashboard" element={<PrivateRoute />} />
      <Route path="/admin/dashboard" element={<AdminRoutes />} />
      <Route path="/create/category" element={<AdminRoutes />} />
      <Route path="/create/product" element={<AdminRoutes />} />
    </Routes>
  )
}

export default Router
