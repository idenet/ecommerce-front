import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdminRoutes from './components/admin/AdminRoutes'
import PrivateRoute from './components/admin/PrivateRoute'
import { Cart } from './components/core/Cart'
import Home from './components/core/Home'
import Product from './components/core/Product'
import Shop from './components/core/Shop'
import Signin from './components/core/Signin'
import Signup from './components/core/Signup'
import Success from './components/core/Success'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/paysuccess" element={<Success />} />
      <Route path="/user/dashboard" element={<PrivateRoute />} />
      <Route path="/admin/dashboard" element={<AdminRoutes />} />
      <Route path="/create/category" element={<AdminRoutes />} />
      <Route path="/create/product" element={<AdminRoutes />} />
      <Route path="/admin/orders" element={<AdminRoutes />} />
      <Route path="/product/:productId" element={<Product />} />
    </Routes>
  )
}

export default Router
