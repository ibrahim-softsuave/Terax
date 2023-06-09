import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage/loginPage'
import { Home } from '../pages/Home'

export const RootRoutes = () => {
  return (
    <Routes>
        <Route path='/*' element={<Navigate to='/login'/>}></Route>
        <Route path='/login' element={<LoginPage page='signin'/>}></Route>
        <Route path='/register' element={<LoginPage page='register'/>}></Route>
        <Route path ='/home' element={<Home/>}></Route>
    </Routes>
  )
}

