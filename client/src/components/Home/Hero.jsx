import React from 'react'
import heroimg from '../../Assets/georgie-cobbs-bKjHgo_Lbpo-unsplash.jpg'
function Hero() {
  return (
    <div className='relative w-full h-screen' >
        <img className='w-full h-screen object-cover'  src={heroimg} alt="" />
        <div className='absolute top-0 left-0 bg-black/50 w-full h-full' />
        <div className='absolute w-[80%] top-[15%] sm:top-[30%] px-8 md:px-24   left-0 ' >
            <p className='uppercase text-white text-xl font-bold ' >Lorem ipsum dolor sit amet.</p>
            <h1 className='mt-2 mb-4 text-white md:text-7xl text-5xl uppercase font-extrabold' >E-CELL</h1>
            <p className=' mb-8 text-white text-xl font-bold' >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia, fugit in impedit dolor laboriosam minus, debitis repudiandae, quisquam sapiente fuga maxime voluptatum minima. Suscipit eligendi, illum rerum debitis numquam officia?</p>
            <button className=' bg-[#145566]  py-2 w-[150px] rounded-md text-white border-lg font-bold' >Get Started</button>
        </div>

    </div>
  )
}

export default Hero;