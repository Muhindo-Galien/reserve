import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalState } from '../store'
import EventCard from './cards/EventCard'

const Events = ({fakeArray}) => {
  const [allEvents]=useGlobalState('allEvents')
  console.log("allEvents",allEvents);
  return (
    <>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        {allEvents.map((item,i)=>{
          const{eventDate,eventId,eventOwner,eventTitle,passed,silverTicketPrice,ticketCount,tickets,vipTicketCount,vipTicketPrice}=item;
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