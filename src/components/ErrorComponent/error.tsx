import React from 'react'
import './error.scss'

export const Error = (props:any) => {
  return (
        <div className='error'> 
            {props.children}
        </div>
  )
}

