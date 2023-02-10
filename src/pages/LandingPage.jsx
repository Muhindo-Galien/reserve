import React from 'react'
import Hero from '../components/Hero';
import Events from '../components/Events';
import { useGlobalState } from '../store';
import Admin from '../components/Admin';


const LandingPage = () => {
  const [connectedAccount] = useGlobalState('connectedAccount')
  const [adminAccount] = useGlobalState('adminAccount')

  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <Hero/>
      <div className='pb-12 sm:pb-14 text-white'>
        {connectedAccount?(
          <h2 className='font-semibold text-2xl text-center'>Latest events</h2>
        ):(
          <p className='font-bold text-center pt-5'>Please, Connecte Your Meta Mast wallet!</p>
          
        )}
        
      </div>
      <Events/>
      {/* {adminAccount.toLocaleLowerCase()==connectedAccount?(
        <Admin/>
      ):(null)} */}
    </div>
  )
}

export default LandingPage