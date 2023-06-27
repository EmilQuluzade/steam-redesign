import React from 'react'
import './Button.css'

const Button = ({buttonName}) => {
  return (
        <div className="buttondiv">
          <button className='button'>{buttonName}</button>
        </div>
  )
}

export default Button