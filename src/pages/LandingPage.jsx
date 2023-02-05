import React from 'react'
import Hero from '../components/Hero';
import Events from '../components/Events';


const LandingPage = () => {
  const fakeArray = Array(4).fill().map((item, i) => i);
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <Hero/>
      <div className='pb-12 sm:pb-14 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>Latest events</h2>
      </div>
      <Events fakeArray={fakeArray}/>
    </div>
  )
}

export default LandingPage