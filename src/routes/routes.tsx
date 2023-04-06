import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/loginPage'

export const RootRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Navigate to='/login'/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
    </Routes>
  )
}

