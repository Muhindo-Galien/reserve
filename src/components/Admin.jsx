import React from 'react'
import { withdrawProcceds } from '../sevices/Blockchain'
import { useGlobalState } from '../store'

const Admin = () => {
  const [contractBalance]=useGlobalState('contractBalance')
  return (
    <div className='max-w-lg flex flex-col gap-2 text-white mx-auto shadow-xl px-2 py-3 bg-[#8D72E1]'>
      <div className='mx-4 sm:mx-0'>

        <h2 className=' font-semibold text-lg text-center'>Admin</h2>
      <div className='flex justify-between'>
        <h2 className=' font-semibold text-lg'>Contract balance: </h2>
        <h2 className=' font-semibold text-lg'>{contractBalance} ETH</h2>
      </div>
        <button 
        onClick={withdrawProcceds}
          type="button"
          className='text-center bg-white text-gray-800 py-1.5 px-2 w-full rounded text-lg font-medium'>
            Withdraw Proceeds
         </button>
      </div>
    </div>
  )
}

export default Admin