import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className=" sm:px-8 bg-[#8D72E1] z-50 mx-auto w-full fixed shadow-sm text-gray-50">
        <div className=' flex items-center justify-between py-4 sm:mx-0 mx-4 '>
          <Link to={'/'}>
            <h1 className='font-black text-4xl'>Reserve</h1>
          </Link>
          {/* tablet laptop */}
          <div className=''>
            <ul className='sm:flex justify-center gap-4 lg:mx-gap-10 text-gray-50 hidden font-medium'>
              <Link to={'/'}>
                <li className='cursor-pointer'>Home</li>
              </Link>
              <Link to={'/about'}>
                <li className='cursor-pointer'>About</li>
              </Link>
              <Link to={'/'}>
                <li className='cursor-pointer'>Feedbacks</li>
              </Link>
            </ul>
          </div>

            <div className='flex gap-4 items-center'>
              <button disabled type='button' className=' sm:block bg-white font-medium  px-3 py-2 rounded-2xl text-gray-900 my-1 cursor-pointer'>Connect Wallet</button>
            </div>
          </div>
        </div>
  )
}

export default NavBar