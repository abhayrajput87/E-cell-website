import React from 'react'
import touchImg from '../../Assets/touch.jpg'

function Touch() {
  return (
    <div className='relative w-full h-full text-white' >
        <img className='w-full md:h-[450px] object-cover '  src={touchImg} alt="" />
        <div className='absolute top-0 left-0 bg-black/80 w-full h-full' />
        <div className='w-full absolute top-0 left-0 z-20 mx-auto' >
            <h1 className='' >Get In Touch</h1>
            <div className='w-[80%] mx-auto grid md:grid-cols-2 md:space-y-0 space-y-8 '   >
                <div className=' flex flex-col space-y-3 md:w-[90%]' >
                    
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Name">Name</label>
                    <input className='bg-transparent'  type="text" name="" id="Name" value="lorem ipsum"/>
                    <div className=' border-[1px] border-[#145566]' />
                    </div>
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Subject">Subject</label>
                    <input className='bg-transparent'  type="text" name="" id="Subject" value="lorem ipsum"/>
                    <div className=' border-[1px] border-[#145566]' />
                    </div>
                    <div className='flex flex-col' >
                    <label className='text-xs font-bold text-[#145566]' htmlFor="Email">Email</label>
                    <input className='bg-transparent'  type="text" name="" id="Email" value="lorem ipsum"/>
                    <div className=' border-[1px] border-[#145566]' />
                    </div>
  


                </div>
                <div>
                    <p className='text-sm font-bold text-[#145566]' >message</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore quo hic et dolor tempore, eligendi quas dolore ad. Sit commodi, rerum quas perspiciatis impedit expedita sapiente placeat temporibus amet praesentium est dolor tempora debitis dignissimos itaque delectus, ullam veniam, nulla enim ratione. Fugiat, doloribus quam obcaecati necessitatibus cupiditate dolorum modi!</p>
                    <div className='' />
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Touch;