import React from 'react'
import { FaUserAlt } from 'react-icons/fa';
const Navbar = () => {
  return (
      <>
          <div className='fixed z-50 w-full bg-rose-800 flex items-center justify-between text-gray-50 font-semibold px-20 py-4'>
              <div className='flex items-center justify-between gap-5'>
                  <div className='flex items-center justify-center gap-2'>
                      <span className='w-10 h-10 bg-gray-300 rounded-sm'/>
                      <h3>Medical Darpan</h3>
                  </div>
                  <ul className='flex items-center justify-center gap-5'>
                      <li>Home</li>
                      <li>Products</li>
                      <li>Distributiors</li>
                      <li>Manufactures</li>
                      <li>About us</li>
                      <li>Blog</li>
                  </ul>
          </div>
              <div className='flex items-center justify-center gap-5'>
                  <h4>Login</h4>
                  <span className='w-8 h-8 border border-gray-50 rounded-full flex items-center justify-center p-2'>
                      <FaUserAlt className='w-full h-full'/>
                  </span>
          </div>
          </div>    
    </>
  )
}

export default Navbar