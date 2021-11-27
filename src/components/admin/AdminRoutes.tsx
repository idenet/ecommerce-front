import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import { Jwt } from '../../store/models/auth'
import AdminDashboard from './AdminDashboard'

const AdminRoutes = () => {
  const auth = isAuth()
  if (auth) {
    const {
      user: { role },
    } = auth as Jwt
    if (role === 1) return <AdminDashboard />
  }
  return <Navigate to="/signin" replace />
}

export default AdminRoutes
