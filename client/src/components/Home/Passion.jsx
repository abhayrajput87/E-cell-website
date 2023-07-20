import React from 'react'
import visionImg from '../../Assets/passion.jpg'

function Passion() {
  return (
    <div className='relative w-full h-[180px]' >
        <img className='h-full w-full object-cover '  src={visionImg} alt="" />
        <div className='absolute top-0 left-0 bg-black/80 w-full h-full' />
        <div className='absolute h-full top-0 left-0 w-full flex flex-col md:flex-row justify-center md:justify-between md:px-32 pt-8 pb-8  px-8 space-y-4 md:space-y-0 md:items-center z-10' >
            <h1 className='flex flex-col md:flex-row text-white font-bold text-2xl md:text-4xl md:items-center' >Want To Collaborate With Us? <span className='md:px-4 py-1 md:py-0 text-[#145566] font-bold text-base md:text-lg' >Contact With Us</span> </h1>
            <button className=' bg-[#145566]  py-2 w-[150px] rounded-md text-white border-lg font-bold' >Get Started</button>
        </div>

    </div>
  )
}

export default Passion;