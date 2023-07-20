import React, { useState } from 'react'


import {AiOutlineMenu,AiOutlineClose} from 'react-icons/ai'

function Navbar() {
  

    const[nav,setNav]=useState(false);
    
    const handleNav=()=>{
        setNav(!nav)
    }
  


  return (
    <div className='  w-full md:px-20 px-8 text-white flex justify-between items-center h-24' >
        <h1 className='text-xl font-black' >E-Cell</h1>
        <div className='hidden md:flex space-x-6 items-center' >
            
        <ul className='flex space-x-6 ' >
            <li>Home</li>
            <li>Team</li>
            <li>Initiatives</li>
            <li>Galeery</li>
            <li>Blog</li>
            <li>Merchandise</li>
        </ul>
        <button className=' bg-[#145566]  py-2 w-[150px] rounded-md text-white border-lg font-bold' >Get Started</button>
        </div>

        <div className='p-4 block md:hidden ' onClick={handleNav} >
        {!nav?<AiOutlineMenu size={20} />:<AiOutlineClose size={20} />}
        </div>
        <div className={nav?'block fixed left-0 top-0 w-[60%] bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500 md:hidden z-20 h-full':'fixed left-[-100%]'} >
        <h1 className="p-4 text-3xl font-bold w-full text-[#ffffff] m-4 ">E-Cell</h1>
      
            <ul className='p-4' >
            <li className='p-4 border-b border-b-gray-600'>Team</li>
            <li className='p-4 border-b border-b-gray-600'>Home</li>
            <li className='p-4 border-b border-b-gray-600'>Initiatives</li>
            <li className='p-4 border-b border-b-gray-600'>Gallery</li>
            <li className='p-4 border-b border-b-gray-600'>Blog</li>
            <li className='p-4'>Merchandise</li>
       
                
            </ul>
        </div>


    </div>
  )

}

export default Navbar;