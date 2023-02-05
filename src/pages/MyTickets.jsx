import React from 'react'
import TicketCard from '../components/cards/TicketCard'

const MyTickets = () => {
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <div className='pb-12 sm:pb-14 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>My tickets</h2>
      </div>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        <TicketCard/>
      </div>
      
    </div>
  )
}

export default MyTickets