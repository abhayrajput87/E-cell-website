import React from 'react'
import whoimg from '../../Assets/whoarewe.jpg'
function Partners() {
  return (
    <div className='w-full h-full bg-[#151515] pb-16'  >
        <div className='bg-[#151515] w-full h-full pb-16 grid gap-8 lg:grid-cols-2 px-12 md:px-16 pt-20' >
            <div className='flex flex-col' >
                <h1 className='pb-3 text-5xl font-bold text-white  uppercase' >Our</h1>
                <h1 className='pb-4 text-5xl font-bold text-[#145566] uppercase' >Partners</h1>
                <div className='flex flex-row space-x-2 ' >
                <p className='py-1 text-gray-400 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam nesciunt adipisci officiis eos laudantium veritatis corrupti. Provident fugit explicabo vel corporis esse nesciunt, rem voluptatum expedita distinctio neque assumenda animi cupiditate id consectetur, quidem fugiat asperiores possimus architecto quaerat eligendi quas veniam! Itaque, nostrum! Perspiciatis incidunt omnis laudantium vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam quaerat, repellendus, vel id exercitationem quasi et ullam, perferendis itaque officiis excepturi aliquid! Porro tenetur corporis iure nostrum fugit error alias quisquam sequi cum, eligendi repellendus tempora atque nesciunt illo sed officia nam ea itaque, ab suscipit modi possimus sunt.</p>
                </div>
            </div>
            <div><img src={whoimg} alt="" /></div>
        </div>
        <div className='text-gray-400 bg-[#2c2c2c] py-12 flex justify-center space-x-4 ' >
            <p className='rounded-lg py-4 px-6 bg-[#151515] ' >Partner</p>
            <p className='rounded-lg py-4 px-6 bg-[#151515] ' >Partner</p>
        </div>

   
</div>
  )
}

export default Partners;