import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import TicketCard from '../components/cards/TicketCard'
import { getEvent } from '../sevices/Blockchain'
import { minutesRemaining, useGlobalState } from '../store'

const EventDetails = () => {
  const { id } = useParams()
  const [eventDetails] = useGlobalState('eventDetails')
  const [silverTickets] = useGlobalState('silverTickets')
  const [vipTickets] = useGlobalState('vipTickets')

  useEffect(()=>{
    const loadEventDetails=async()=>{
      getEvent(id)
    }
    loadEventDetails()
  },[id])
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto text-white'>
      <div className='mx-4'>
             <div className=' flex flex-col justify-center'>
          <div className='flex justify-between'>
            <h2 className=' font-semibold text-xl text-center'>{eventDetails?.eventTitle}</h2>
            <h2 className=' font-semibold text-xl text-center'>Time left: {minutesRemaining(eventDetails?.eventDate)} min(s)</h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 sm-gap-4 '>
            <div className='w-full sm:w-3/6'>
              <h2 className=' font-semibold text-lg py-2'>Silver Tickets</h2>
              <div className='grid grid-cols-1 gap-2'>
                {
                  silverTickets?.map((item,i)=>{
                    const {category,eventDate,eventId,eventTitle,ticketId,ticketPrice}=item
                    return(
                      <TicketCard category={category}eventDate={eventDate} eventId={eventId} eventTitle={eventTitle} ticketId={ticketId} ticketPrice={ticketPrice}  key={i+1}/>
                    )
                  })  
                }
              </div>
            </div>
            <div className='w-full sm:w-3/6'>
              <h2 className=' font-semibold text-lg py-2'>VIP Tickets</h2>
              <div className='grid grid-cols-1 gap-2'>
              {
                  vipTickets?.map((item)=>{
                    const {category,eventDate,eventId,eventTitle,ticketId,ticketPrice}=item
                    return(
                      <TicketCard category={category}eventDate={eventDate} eventId={eventId} eventTitle={eventTitle} ticketId={ticketId} ticketPrice={ticketPrice}/>
                    )
                  })  
                }
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EventDetails