import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import AddCategory from './AddCategory'
import AddProduct from './AddProduct'
import AdminDashboard from './AdminDashboard'
import Orders from './Orders'

const AdminRoutes = () => {
  const auth = isAuth()
  let { pathname } = useLocation()
  if (auth) {
    const {
      user: { role },
    } = auth as Jwt
    if (role === 1) {
      switch (pathname) {
        case '/admin/dashboard':
          return <AdminDashboard />
        case '/create/category':
          return <AddCategory />
        case '/create/product':
          return <AddProduct />
        case '/admin/orders':
          return <Orders />
      }
    }
  }
  return <Navigate to="/signin" replace />
}

export default AdminRoutes
