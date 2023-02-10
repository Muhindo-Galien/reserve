import moment from 'moment';
import React, { useEffect } from 'react'
import Countdown from "react-countdown-simple";
import { FaTicketAlt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { displayData, minutesRemaining, truncate } from '../../store';



const EventCard = (
  {eventDate,eventId,eventOwner,eventTitle,passed,sellingduration,eventVenue,eventHost,silverTicketPrice,ticketCount,tickets,vipTicketCount,vipTicketPrice}
  ) => {
    const oneHour = new Date(
      new Date().setMinutes(new Date().getMinutes() -(- minutesRemaining(sellingduration).minutes))
    ).toISOString();
    console.log('sellingduration',sellingduration);
 
  return (
    <div className='bg-[#9276e7] shadow-sm rounded py-4 px-2 text-white'>
      <div className='flex gap-4'>
        <div className=' flex flex-col gap-1 sm:gap-0 w-4/6 sm:w-3/5'>
          <h2 className=' font-semibold text-xl'>{eventTitle&&eventTitle}</h2>
          <h4 className='text-sm font-medium mt-1'>Owned by <span className='font-medium bg-[#fff] px-1.5 py-1 rounded-2xl text-gray-800'>{truncate(eventOwner,6,6,15)}</span></h4>
          <h4 className='text-sm font-medium mt-1'>Silver Ticket price <span className='font-bold'>{silverTicketPrice&&silverTicketPrice} ETH</span></h4>
          <h4 className='text-sm font-medium mt-1'>VIP Ticket price <span className='font-semibold'>{vipTicketPrice&&vipTicketPrice} ETH</span></h4>
          <h4 className='text-sm font-medium mt-1'>Event Host: <span className='font-semibold'> {eventHost&&eventHost}</span></h4>
          <h4 className='text-sm font-medium mt-1.5'>Event Date: <span className='font-semibold'> {displayData(eventDate&&eventDate)}</span></h4>
          <h4 className='text-sm font-medium flex items-center'>Venue 
            <HiOutlineLocationMarker className='mx-1'/>
           <span className='font-semibold'> {eventVenue&&eventVenue}</span>
          </h4>
          
        </div>
        <div className='flex flex-col gap-2 w-2/6  sm:w-2/5'>  
          <div className='grid grid-cols-1 gap-2 rounded sm:grid-cols-2'>
            <div className=' bg-[#000] rounded h-16 sm:h-24 flex flex-col  items-center justify-center py-2 px-1.5'>
              <FaTicketAlt className='text-3xl'/>
              <h2 className=' capitalized text-center text-sm'><span className='font-semibold sm:font-medium'>{ticketCount&&ticketCount}</span> Sil tickets</h2>
            </div>
            <div className=' rounded h-16 sm:h-24 flex flex-col  items-center justify-center py-2 px-1.5 bg-[#000]'>
              <FaTicketAlt className='text-3xl'/>
              <h2 className=' capitalized text-center text-sm font-normal'><span className='font-semibold  sm:font-medium'>{vipTicketCount&&vipTicketCount}</span> VIP tickets</h2>
            </div>
          </div>
                <Countdown
                targetDate={(oneHour)}
                renderer={({ days, hours, minutes, seconds }) => (
                  <div className='w-full rounded h-14 sm:h-auto  flex flex-col  items-center justify-center py-2 px-1.5 bg-[#fff] text-gray-800'>
                    {
                      minutesRemaining(sellingduration&&sellingduration).seconds>=0?(
                      <span className='text-sm sm:text-base font-normal flex flex-col justify-center items-center'>
                        <span className='font-semibold  sm:font-medium'>
                          {minutes} mins 
                        </span>
                        <span className='font-semibold  sm:font-medium'>
                          {seconds} secs
                        </span>
                      </span>

                      ):(
                      <span className='text-sm sm:text-base font-normal flex flex-col justify-center items-center'>
                        <span className='font-semibold  sm:font-medium'>Selling time</span>  
                        <span className='font-semibold  sm:font-medium'>Expired</span> 
                      </span>
                      )
                    }
                  </div>
                )}
              />
        </div>

      </div>
    </div>
  )
}

export default EventCard