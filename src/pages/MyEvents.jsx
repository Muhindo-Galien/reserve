import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from '../components/cards/EventCard'
import Events from '../components/Events'
import { useGlobalState } from '../store'

function MyEvents() {
  const [myEvents]=useGlobalState('myEvents')
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <div className='pb-12 sm:pb-14 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>My events</h2>
      </div>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        {myEvents.length>0 ?(myEvents?.map((item,i)=>{
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
          )):(
            <p className='font-bold text-center pt-5 text-white'>You don't have any yet!</p>
            )
          }
          </div>
    </div>
  )
}

export default MyEvents