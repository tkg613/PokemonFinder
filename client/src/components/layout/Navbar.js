import React from 'react'
import { Link } from 'react-router-dom'

import {BsPCircleFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <nav className='navbar bg-secondary mb-12 shadow-lg'>
      <div className='container mx-auto'>
        <BsPCircleFill className='mr-6 text-3xl'/>
        <Link to='/' className='text-lg font-bold'>
          Pokemon Finder
        </Link>
        <div className='flex-1 px-2 mx-2'>
          <div className='flex justify-end'>
            <Link to='/' className='btn btn-ghost btn-md rounded-btn'>Home</Link>
            <Link to='/about' className='btn btn-ghost btn-md rounded-btn'>About</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar