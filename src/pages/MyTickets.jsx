import React from 'react'
import TicketCard from '../components/cards/TicketCard'
import { useGlobalState } from '../store'

const MyTickets = () => {
  const [myTickets] = useGlobalState('myTickets')  
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto text-gray-50'>
      <div className='pb-12 sm:pb-14 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>My tickets</h2>
      </div>
        {
          myTickets.length>0? (myTickets?.map((item,i)=>{
            const {category,eventDate,eventId,eventTitle,eventVenue,ticketId,ticketPrice}=item.ticket
            return(
              <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
                  <TicketCard category={category}eventDate={eventDate} orderedAt={item.orderedAt} sold={true} eventVenue={eventVenue} eventId={eventId} eventTitle={eventTitle} ticketId={ticketId} ticketPrice={ticketPrice}  key={i+1}/> 
              </div>
           )})):(
            <p className='font-bold text-center pt-5'>You don't have any yet!</p>
          )
        }
      
    </div>
  )
}

export default MyTickets