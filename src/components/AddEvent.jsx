import React, { useState } from 'react'
import { setGlobalState, useGlobalState } from '../store'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { addTicket } from '../sevices/Blockchain'

const AddEvent = () => {
  const [modal] = useGlobalState('modal')
  const [started] = useGlobalState('started')
  const[title,setTitle] =useState('')
  const[vipTicketCount,setVipTicketCount] =useState('')
  const[silvericketCount,setSilverTicketCount] =useState('')
  const[silverTicketPrice,setSilverTicketPrice] =useState('')
  const[vipTicketPrice,setVipTicketPrice] =useState('')
  const[eventDate,setEventDate] =useState('')
  const[evenHost,setEvenHost] =useState('')
  const[eventVenue,setEventVenue] =useState('')

  const toTimestamp = (dateStr) => {
    const dateObj = Date.parse(dateStr)
    return dateObj / 1000
  }

  // console.log(
  // 'title=>',title+
  // '\nsilvericketCount=>',silvericketCount+
  // '\nvipTicketCount=>',vipTicketCount+
  // '\nsilverTicketPrice=>',silverTicketPrice+
  // '\nvipTicketPrice=>',vipTicketPrice+
  // '\neventDate=>',toTimestamp(eventDate)+
  // '\nevenHost=>',evenHost+
  // '\nevenHost=>',eventVenue
  // )
  {/* function addEvent(
  uint _silverTicketPrice,
  uint _vipTicketPrice,
uint _ticketCount,
uint _vipTicketCount,
string memory _eventTitle,
uint _eventDate,
string memory _evenHost,
string memory _eventVenue */}
 

  const handleSubmit= async (e) => {
    e.preventDefault()
    if (!silverTicketPrice || !vipTicketPrice || !silvericketCount || !vipTicketCount || !title || !eventDate || !evenHost || !eventVenue) return
    const params = {
       silverTicketPrice,
        vipTicketPrice,
        silvericketCount,
        vipTicketCount,
        title,
        eventDate:toTimestamp(eventDate),
        evenHost,
        eventVenue
    }
    await addTicket(params)
    onClose()
  }
  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
  }

  const onClose = () => {
    setGlobalState('modal', 'scale-0')
    reset()
  }

  const reset = () => {
    setTitle('')
    setVipTicketCount('')
    setSilverTicketCount('')
    setSilverTicketPrice('')
    setVipTicketPrice('')
    setEventDate('')
    setEvenHost('')
    setEventVenue('')

  }

  return (
    <div 
      className={`fixed top-0 left-0 w-screen h-screen z-30
      flex items-center justify-center bg-black bg-opacity-20 
      transform duration-300 font-globalFont ${modal}`}
      >
      <div className='w-11/12 md:w-3/12 h-6/12 p-4 bg-[#9276e7] shadow-sm rounded py-4 px-3 text-white '>
          <div div className='flex items-center justify-between'>
              <h2 className=' font-semibold text-lg'>Add Event</h2>
              <button type='button' onClick={closeModal}>
                <AiOutlineCloseCircle className='font-bold text-2xl '/>
              </button>
          </div>
           <form className='flex flex-col' onSubmit={handleSubmit}>
              <div className="flex flex-row justify-between items-centerborder rounded mt-2">
                <input
                  className="block w-full rounded placeholder:text-white
                  text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                  focus:outline-none focus:ring-0"
                  type="text"
                  name="title"
                  placeholder="Title"
                  required
                  onChange={(e)=>setTitle(e.target.value)}
                  value={title}
                />
              </div>
              <div className="flex flex-row justify-between items-centerborder rounded mt-2 gap-2">
                  <input
                    className="block w-full rounded placeholder:text-white
                    text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                    focus:outline-none focus:ring-0"
                    type="number"
                    min={1}
                    name="silvericketCount"
                    placeholder="No of Siver tickets"
                    required
                    onChange={(e)=>setSilverTicketCount(e.target.value)}
                    value={silvericketCount}
                  />
                <input
                    className="block w-full rounded placeholder:text-white
                    text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                    focus:outline-none focus:ring-0"
                    type="number"
                    min={1}
                    name="vipTicketCount"
                    placeholder="No of VIP tickets"
                    required
                    onChange={(e)=>setVipTicketCount(e.target.value)}
                    value={vipTicketCount}
                  />
              </div>

              <div className="flex flex-row justify-between items-centerborder rounded mt-2 gap-2">
                  <input
                    className="block w-full rounded placeholder:text-white                       text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                      focus:outline-none focus:ring-0  " 
                    type="number"
                    min={1}
                    name="silverTicketPrice"
                    placeholder="Eg. 2 ETH/Ticket"
                    required
                    onChange={(e)=>setSilverTicketPrice(e.target.value)}
                    value={silverTicketPrice}
                  />
                <input
                    className="block w-full rounded placeholder:text-white
                    text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                    focus:outline-none focus:ring-0"
                    type="number"
                    min={1}
                    name="vipTicketPrice"
                    placeholder="Eg. 2 ETH/Ticket"
                    required
                    onChange={(e)=>setVipTicketPrice(e.target.value)}
                    value={vipTicketPrice}
                  />
              </div>

              <div className="flex flex-row justify-between items-centerborder rounded mt-2">
                <input
                  className="block w-full rounded placeholder:text-white
                  text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                  focus:outline-none focus:ring-0"
                  type="text"
                  name="eventVenue"
                  placeholder="Event Venue "
                  required
                  onChange={(e)=>setEventVenue(e.target.value)}
                  value={eventVenue}
                />
              </div>
              <div className="flex flex-row justify-between items-centerborder rounded mt-2">
                <input
                  className="block w-full rounded placeholder:text-white
                  text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                  focus:outline-none focus:ring-0"
                  type="text"
                  name="evenHost"
                  placeholder="Host's Name "
                  required
                  onChange={(e)=>setEvenHost(e.target.value)}
                  value={evenHost}
                />
              </div>

              <div className="flex flex-row justify-between items-centerborder rounded mt-2">
                <input
                 className="inputData block w-full rounded placeholder:text-white
                 text-white bg-transparent border py-1.5 px-2 text-lg placeholder:text-lg  placeholder:font-normal font-normal
                 focus:outline-none focus:ring-0"
                 min={new Date().toISOString().split('T')[0]}
                  type="date"
                  name="eventVenue"
                  required
                  onChange={(e)=>setEventDate(e.target.value)}
                  value={eventDate}
                />
              </div>
              <div className=" rounded mt-2">
                <button 
                 type="submit"
                  className='text-center bg-white text-gray-800 py-1.5 px-2 w-full rounded text-lg font-medium'>
                  Sumbit
                </button>
              </div>
              
           </form>
      </div>

    </div>
  )
}

export default AddEvent