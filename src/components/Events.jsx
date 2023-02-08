import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../store'
import EventCard from './cards/EventCard'

const Events = () => {
  const [allEvents]=useGlobalState('allEvents')
  return (
    <>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        {allEvents.map((item,i)=>{
          const{eventDate,eventId,eventOwner,eventTitle,passed,silverTicketPrice,ticketCount,sellingduration,eventVenue,eventHost,tickets,vipTicketCount,vipTicketPrice}=item;
            return(
              <Link to={ `/event/${item.eventId}`}  key={i}>
                <EventCard
                  eventDate={eventDate}
                  eventId={eventId}
                  eventOwner={eventOwner}
                  eventTitle={eventTitle}
                  passed={passed}
                  silverTicketPrice={silverTicketPrice}
                  ticketCount={ticketCount}
                  sellingduration={sellingduration}
                  eventVenue={eventVenue}
                  eventHost={eventHost}
                  tickets={tickets}
                  vipTicketCount={vipTicketCount}
                  vipTicketPrice={vipTicketPrice}
                /> 
              </Link>
            )
        }
        )}
      </div>
    </>
  )
}

export default Events