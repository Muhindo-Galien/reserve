import React from 'react'

const LoadMoreBtn = ({count,setEnd,end}) => {
  return (
    <div className='flex justify-center pt-6'>
      <button 
      className='text-center bg-[#000] px-4 py-2 rounded-2xl font-semibold'
      onClick={() => setEnd(end + count)}
      >View More</button>
    </div>
  )
}

export default LoadMoreBtn