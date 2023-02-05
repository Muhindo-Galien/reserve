import React from 'react'
import { FaTicketAlt } from 'react-icons/fa';
import { minutesRemaining, truncate } from '../../store';


const EventCard = (
  {eventDate,eventId,eventOwner,eventTitle,passed,silverTicketPrice,ticketCount,tickets,vipTicketCount,vipTicketPrice}
) => {
  return (
    <div className='bg-[#9276e7] shadow-sm rounded py-4 px-2 text-white'>
      <div className='flex gap-4'>
        <div className=' flex flex-col gap-2 w-4/6 sm:w-3/5'>
          <h2 className=' font-semibold text-xl'>{eventTitle}</h2>
          <h4 className='text-sm font-medium mt-2 sm:mt-0'>Owned by <span className='font-medium bg-[#fff] px-1.5 py-1 rounded-2xl text-gray-800'>{truncate(eventOwner,6,6,15)}</span></h4>
          <h4 className='text-sm font-medium'>Silver Ticket price <span className='font-bold'>{silverTicketPrice} ETH</span></h4>
          <h4 className='text-sm font-medium'>VIP Ticket price <span className='font-bold'>{vipTicketPrice} ETH</span></h4>
          <p className='mt-2 sm:mt-0 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col gap-2 w-2/6  sm:w-2/5'>  
          <div className='grid grid-cols-1 gap-2 rounded sm:grid-cols-2'>
            <div className=' bg-[#000] rounded h-16 sm:h-24 flex flex-col  items-center justify-center py-2 px-1.5'>
              <FaTicketAlt className='text-3xl'/>
              <h2 className=' capitalized text-center text-sm'><span className='font-semibold sm:font-medium'>{ticketCount}</span> Sil tickets</h2>
            </div>
            <div className=' rounded h-16 sm:h-24 flex flex-col  items-center justify-center py-2 px-1.5 bg-[#000]'>
              <FaTicketAlt className='text-3xl'/>
              <h2 className=' capitalized text-center text-sm font-normal'><span className='font-semibold  sm:font-medium'>{vipTicketCount}</span> VIP tickets</h2>
            </div>
          </div>
            <div className='rounded h-14 sm:h-auto  flex flex-col  items-center justify-center py-2 px-1.5 bg-[#fff] text-gray-800'>
              <span className='text-sm sm:text-base font-normal'>Expires in</span>
              <span className='text-sm sm:text-base font-normal'>{minutesRemaining(eventDate)} min(s)</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default EventCard