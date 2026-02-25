import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center px-6 z-[100]  fixed inset-0 bg-white'>
        <div className="flex font-semibold max-sm:text-4xl">
            <div className='text-5xl text-black first'>Evolve</div>
            <div className='text-5xl text-black second'>With</div>
            <div className='text-5xl text-black third'>Rahul</div>
        </div>
    </div>
  )
}

export default Loader