import React from 'react'
import ticketPng from "../assets/ticket.png"
import { connectWallet } from '../sevices/Blockchain'
import { setGlobalState, useGlobalState } from '../store'

const Hero = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')

  return (
    <div className='pb-8 max-w-4xl mx-auto'>
      <div className="mx-4 flex flex-col sm:flex-row gap-8 sm:gap-2 justify-center sm:justify-between text-white">
        <div className='w-full sm:w-4/5 pt-5'>
          <div className="w-full sm:w-10/12  sm:text-left">
            <h1 className='font-bold text-4xl'>Unleash Lightning Speed Ticket Sales with Reserve!</h1>
            <p className='text-sm pt-2'>Experience the power of decentralized technology with Reserve. Your one-stop-shop for all ticket needs. The quickest way to book tickets. </p>
            {connectedAccount?(
              <button 
                type='button'
                onClick={() => setGlobalState('modal', 'scale-100')}
                className='my-4 bg-[#fff] text-base hover:text-white  py-2 px-2.5 rounded text-gray-800 hover:bg-[#9276e7] hover:border-none shadow-lg font-semibold
              '>Add An Event</button>
            ):(
              <button  
              type='button' 
              className='my-4 bg-[#fff] text-base hover:text-white  py-2 px-2.5 rounded text-gray-800 hover:bg-[#9276e7] hover:border-none shadow-lg font-semibold'
              onClick={()=>connectWallet()} 
              >Connect Wallet</button>
            )}
          </div>
        </div>
        <div className='w-full sm:w-2/5 pb-4 sm:pb-0'>
          <img src={ticketPng} alt='ticketPng' className='h-64 w-full object-cover'/>
        </div>
      </div>
    </div>
  )
}

export default Hero