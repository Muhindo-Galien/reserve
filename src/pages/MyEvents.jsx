import React from 'react'
import Events from '../components/Events'

function MyEvents() {
  const fakeArray = Array(2).fill().map((item, i) => i);
  return (
    <div className='py-24 sm:py-28 max-w-4xl mx-auto'>
      <div className='pb-12 sm:pb-14 text-white'>
        <h2 c className='font-semibold text-2xl text-center'>My events</h2>
      </div>
        <Events fakeArray={fakeArray}/> 
    </div>
  )
}

export default MyEvents