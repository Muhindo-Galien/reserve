import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import TicketCard from '../components/cards/TicketCard'
import { getEvent } from '../sevices/Blockchain'
import { displayData, minutesRemaining, useGlobalState } from '../store'

const EventDetails = ({loaded}) => {
  const { id } = useParams()
  const [eventDetails] = useGlobalState('eventDetails')
  const [silverTickets] = useGlobalState('silverTickets')
  const [vipTickets] = useGlobalState('vipTickets')
  const [avialableSilverTickets] = useGlobalState('avialableSilverTickets')
  const [soldSilverTickets] = useGlobalState('soldSilverTickets')
  const [avialableVipTickets] = useGlobalState('avialableVipTickets')
  const [soldVipTickets] = useGlobalState('soldVipTickets')
  
  
  const [avSilverData, setAvSilverData]=useState([])
  const [avVipData, setAvVipData]=useState([])
  const [activeSilver, setActiveSilver]=useState(1)
  const [activeVip, setActiveVip]=useState(1)

  const handleData=()=>{
    return setAvSilverData(avialableSilverTickets)
  }
  
    const ticketptions=[
      {name:'on sell',
      display: function(){
        setAvSilverData(avialableSilverTickets);
      }},
      {name:'sold',
      display: function(){
        setAvSilverData(soldSilverTickets)
      }},
    ]

  // for vip Ticket
  const handleVipData=()=>{
    return setAvVipData(avialableVipTickets)
  }
  const vipTicketptions=[
    {name:'on sell',
    display: function(){
      setAvVipData(avialableVipTickets);
    }},
    {name:'sold',
    display: function(){
      setAvVipData(soldVipTickets)
    }},
  ]

  useEffect(()=>{
    const loadEventDetails=async()=>{
      getEvent(id)
    }
    loadEventDetails()
  },[id])

  useEffect(()=>{
    handleData()
  },[avialableSilverTickets])

  useEffect(()=>{
    handleVipData()
  },[avialableVipTickets])

  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto text-white'>
      <div className='mx-4'>
             <div className=' flex flex-col justify-center'>
          <div className='flex justify-between'>
            <h2 className=' font-semibold text-xl text-center'>{eventDetails?.eventTitle}</h2>
            <h2 className=' font-semibold text-lg text-center'>Event Date: {displayData(eventDetails?.eventDate)}</h2>
          </div>
          <div className='flex flex-col sm:flex-row gap-2 sm-gap-4 '>
            <div className='w-full sm:w-3/6'>
              <div className='flex justify-between'>
                  <h2 className=' font-semibold text-lg py-2'>Silver Tickets</h2>
                  <div className=' flex gap-2 my-2'>
                    {ticketptions?.map((item,i)=>{
                      return(<button key={i} className={`px-4 py-2 rounded cursor-pointer ${activeSilver === i+1?'bg-gray-900 text-gray-50':'bg-gray-50 text-gray-800'} `}
                       onClick={()=> {setActiveSilver(i+1) ;item.display()}}>{item.name}</button>)
                    })}
                  </div>
              </div>
              <p className='text-center bg-white text-gray-800 py-1.5 px-2 w-full rounded text-lg font-medium mb-3 capitalize'>available {avSilverData?.length}</p>
              <div>
                  <div className='grid grid-cols-1 gap-2'>
                    {
                      avSilverData.length > 0? (avSilverData?.map((item,i)=>{
                        const {category,eventDate,eventId,eventTitle,sold,ticketId,ticketPrice}=item
                        return(<TicketCard category={category}eventDate={eventDate} sold={sold} eventVenue={eventDetails&&eventDetails?.eventVenue} eventId={eventId} eventTitle={eventTitle} ticketId={ticketId} ticketPrice={ticketPrice}  key={i+1}/> )
                      })  
                      ):(       
                        soldSilverTickets?.length===0?(
                          <p className='font-bold text-center pt-5'>No Silver sold ticket yet!</p>
                        ):(
                          null
                        )
                      )
                    }
                  </div>
              </div>
            </div>
            <div className='w-full sm:w-3/6'>
              <div className='flex justify-between'>
                  <h2 className=' font-semibold text-lg py-2'>VIP Tickets</h2>
                  <div className=' flex gap-2 my-2'>
                    {vipTicketptions?.map((item,i)=>{
                      return(<button key={i} className={`px-4 py-2 rounded cursor-pointer ${activeVip === i+1?'bg-gray-900 text-gray-50':'bg-gray-50 text-gray-800'} `}
                       onClick={()=> {setActiveVip(i+1) ;item.display()}}>{item.name}</button>)
                    })}
                  </div>
              </div>
              <p className='text-center bg-white text-gray-800 py-1.5 px-2 w-full rounded text-lg font-medium mb-3 capitalize'>Available {avVipData?.length}</p>
              <div>
                  <div className='grid grid-cols-1 gap-2'>
                    {
                      avVipData.length > 0? (avVipData?.map((item,i)=>{
                        const {category,eventDate,eventId,eventTitle,sold,ticketId,ticketPrice}=item
                        return(<TicketCard category={category}eventDate={eventDate} sold={sold} eventVenue={eventDetails&&eventDetails?.eventVenue} eventId={eventId} eventTitle={eventTitle} ticketId={ticketId} ticketPrice={ticketPrice}  key={i+1}/> )
                      })  
                      ):(       
                        soldSilverTickets?.length===0?(
                          <p className='font-bold text-center pt-5'>No VIP sold ticket yet!</p>

                        ):(
                          null
                        )
                      )
                    }
                  </div>
              </div>

            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default EventDetails