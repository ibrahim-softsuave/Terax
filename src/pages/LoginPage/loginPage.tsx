import React from 'react'
import './styles.scss'
import { LoginForm } from '../../containers/forms/loginForm/loginfrom'

export const LoginPage=()=>{
    return(
        <div className='form-background'>
        <div className='form-container'>
            <LoginForm/>
        </div> 
        </div>
    )
}