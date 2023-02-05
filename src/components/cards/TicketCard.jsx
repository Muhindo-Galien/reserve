import React from 'react'
import { FaTicketAlt } from 'react-icons/fa';
import { purchaseTicket } from '../../sevices/Blockchain';

const TicketCard = ({category,eventDate,eventId,eventTitle,ticketId,ticketPrice}) => {

  const handlePurchase = async()=>{
    try {
      await purchaseTicket(ticketId,ticketPrice)
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <div className='bg-[#9276e7] shadow-sm rounded  text-white'>
      <div className='flex gap-4 h-40'>
        <div className='flex flex-col gap-2 w-5/12  sm:w-2/5  bg-[#000] justify-center items-center'>  
            <FaTicketAlt className='text-5xl'/>
          <h4 className='text-sm font-semibold'>{category&&category} Ticket</h4>
        </div>
        <div className=' flex flex-col gap-2 w-7/12 sm:w-3/5 justify-center '>
          <h2 className=' font-semibold text-xl py-0'>{eventTitle&&eventTitle}</h2>
          <h2 className='text-sm font-medium'> Ticket price <span className='font-bold'>{ticketPrice&&ticketPrice} ETH</span></h2>
          <h2 className='text-sm font-medium'>Event Date <span className='font-semibold bg-[#fff] px-1.5 py-1 rounded-xl text-gray-800'>14/02/2023</span></h2>
          <button 
              type='button'
              className='w-40 bg-[#fff] text-gray-800 text-base  py-2 px-2.5 rounded-2xl hover:bg-gray-100 hover:border-none shadow-xl font-semibold'
              onClick={()=>handlePurchase()}
              >
              Book now
          </button>     
        </div>
      </div>
    </div>
  )
}

export default TicketCard