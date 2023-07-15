import React from 'react'

import {AiFillTwitterCircle ,AiOutlineInstagram } from 'react-icons/ai'
import {BiLogoFacebookCircle} from 'react-icons/bi'


function Footer() {
  return (
    <div className=' text-white mx-auto max-w-[1200px] md:px-32 px-2 sm:px-8 py-8 grid grid-cols-2 gap-4 sm:gap-8'>
    <div className='' >
         <h1 className='text-2xl font-bold' >E-cell</h1>
         <p>Lorem ipsum, dolor sit amet </p>
    </div>
    <div className='w-full flex justify-between' >
    <div className='space-y-2' >
      <h3 className='font-semibold text-[15px]' >Quick Links</h3>
      <ul className='space-y-2 text-[13px]' >
      <li>Home</li>
      <li>Initiatives</li>
      <li>Galery</li>
      <li>Blog</li>
      <li>Merchandise</li>
      </ul>
    </div>
    <div className='space-y-2 text-right sm:text-left ' >  
      <h3 className='text-[15px] font-semibold' >ContactUs</h3>
      <div>
        <p className='text-[13px]' >Phone</p>
        <p className='text-[11px]' >98765432345</p>
      </div>
      <div>
        <p className='text-[13px]' >Email</p>
        <p className='text-[11px]'>ecell@iiit-bh.ac.in</p>
      </div>
      <h1 className='text-[15px] font-bold pl-2 sm:pl-0 '  >
        Follow us on:

      </h1>
      <div className='flex justify-between' >
        <AiFillTwitterCircle size={25} />
        <BiLogoFacebookCircle size={25} />
        <AiOutlineInstagram size={25} />
      </div>


    </div>
    </div>
    

    </div>
  )
}

export default Footer;