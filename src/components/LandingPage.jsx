import React from 'react'
import Events from './Events'
import Hero from './Hero';

const LandingPage = () => {
  const fakeArray = Array(4).fill().map((item, i) => i);
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <Hero/>
      <div className='pb-10 pt-4 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>Latest events</h2>
      </div>
      <div className="mx-4 grid grid-cols-1  gap-2 sm:grid-cols-2 sm:gap-4">
        {fakeArray.map((item,i)=>{
            return(
              <Events/>
            )
        }
        )}
      </div>
    </div>
  )
}

export default LandingPage