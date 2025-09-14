import React from 'react'
import { Link } from 'react-router-dom'

const Button = (params) => {
  return (
    <Link to={params.path} className={`${params.bg} m-auto py-2 px-5 rounded-3xl flex container  cursor-pointer justify-center font-bold text-white mb-4`}>{params.title}</Link>
  )
}

export default Button
