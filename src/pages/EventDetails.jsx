import React from 'react'
import TicketCard from '../components/cards/TicketCard'

const EventDetails = () => {
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto text-white'>
      <div className='mx-4'>

        {/* <div className='pb-12 sm:pb-8 text-white'>
          <h2 c className='font-semibold text-2xl text-center'>Event Details</h2>
        </div> */}
        <div className=' flex flex-col justify-center'>
          <div className='flex justify-between'>
            <h2 className=' font-semibold text-xl text-center'>Tersus Exposition</h2>
            <h2 className=' font-semibold text-xl text-center'>Time left: 3 mins</h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 sm-gap-4 '>
            <div className='w-full sm:w-3/6'>
              <h2 className=' font-semibold text-lg py-2'>Silver Tickets</h2>
              <div className='grid grid-cols-1 gap-2'>
                <TicketCard/>
              </div>
            </div>
            <div className='w-full sm:w-3/6'>
              <h2 className=' font-semibold text-lg py-2'>VIP Tickets</h2>
              <div className='grid grid-cols-1 gap-2'>
                <TicketCard/>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EventDetails