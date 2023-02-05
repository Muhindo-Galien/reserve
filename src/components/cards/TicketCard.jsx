import React from 'react'
import { FaTicketAlt } from 'react-icons/fa';

const TicketCard = () => {
  return (
    <div className='bg-[#9276e7] shadow-sm rounded  text-white'>
      <div className='flex gap-4 h-40'>
        <div className='flex flex-col gap-2 w-5/12  sm:w-2/5  bg-[#000] justify-center items-center'>  
            <FaTicketAlt className='text-5xl'/>
          <h4 className='text-sm font-semibold'>VIP Ticket</h4>
        </div>
        <div className=' flex flex-col gap-2 w-7/12 sm:w-3/5 justify-center '>
          <h2 className=' font-semibold text-xl py-0'>Tersus Exposition</h2>
          <h2 className='text-sm font-medium'> Ticket price <span className='font-bold'>24 ETH</span></h2>
          <h2 className='text-sm font-medium'>Event Date <span className='font-semibold bg-[#fff] px-1.5 py-1 rounded-xl text-gray-800'>14/02/2023</span></h2>        
        </div>
      </div>
    </div>
  )
}

export default TicketCard