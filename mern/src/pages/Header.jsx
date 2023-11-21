import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
  <div className='bg-slate-200'>
    <div className='flex max-w-6xl justify-between items-center mx-auto p-3'>
      <h1 className=' font-bold'>Auth app</h1>
      <ul className='flex gap-4'>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About</Link></li>
        <li><Link to={'/sign-in'}>Sign In</Link></li>
       
      </ul>
    </div>
  </div>
  )
}
