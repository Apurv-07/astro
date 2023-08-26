import React from 'react'

const Button = (props) => {
    const {onClick, type, children}=props
  return (
    <button className='bg-orange-500 text-white mt-7 py-2 px-4 rounded-md ml-[50%] -translate-x-1/2' type={type} onClick={onClick}>{children}</button>          
  )
}

export default Button