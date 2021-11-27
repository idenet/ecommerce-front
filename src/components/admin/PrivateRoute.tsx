import React from 'react'
import { Navigate } from 'react-router-dom'
import { isAuth } from '../../helpers/auth'
import Dashboard from './Dashboard'

const PrivateRoute = () => {
  const auth = isAuth()

  return auth ? <Dashboard /> : <Navigate to="/signin" />
}

export default PrivateRoute
