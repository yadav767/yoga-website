import React from 'react'

const Loader = () => {
  return (
    <div className='h-screen flex items-center justify-center z-[100]  fixed inset-0 bg-white'>
        <div className="flex font-semibold max-sm:text-4xl">
            <div className='text-5xl text-black first'>Yoga</div>
            <div className='text-5xl text-black second'>By</div>
            <div className='text-5xl text-black third'>Rahul</div>
        </div>
    </div>
  )
}

export default Loader