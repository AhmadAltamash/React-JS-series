import React from 'react'

function Button({
    children,
    type="button",
    bgColor = "bg-blue-600",
    hoverColor = "bg-blue-600",
    textColor = "text-white",
    className='',
    ...props

}) {
  return (
   <button className={`px-4 py-4 rounded-lg ${className} ${type} ${bgColor} hover:${hoverColor} ${textColor}`} {...props}>
        {children}
   </button>
  )
}

export default Button