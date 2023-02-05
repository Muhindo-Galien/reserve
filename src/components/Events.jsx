import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from './cards/EventCard'

const Events = ({fakeArray}) => {
  return (
    <>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        {fakeArray.map((item,i)=>{
            return(
              <Link to={ `/event/${i}`}>
                <EventCard key={i}/> 
              </Link>
            )
        }
        )}
      </div>
    </>
  )
}

export default Events