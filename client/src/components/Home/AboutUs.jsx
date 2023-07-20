import React from 'react'
import whoimg from '../../Assets/whoarewe.jpg';
function AboutUs() {
  return (
    <div className='bg-[#151515] w-full h-full pb-16 grid gap-8 lg:grid-cols-2 px-12 md:px-16 pt-32' >
        <div><img src={whoimg} alt="" /></div>
        <div className='flex flex-col' >
            <p className='pb-4 text-[#237186]' >Bringing Together All Entrepreneurs</p>
            <h1 className='pb-4 text-5xl font-extrabold text-white' >WHO ARE <span className=' text-[#237186] ' >WE</span> ?</h1>
            <div className='flex flex-row space-x-2 ' >
            <div className='border-[1.5px] h-[95%] rounded-lg border-[#237186]' ></div>
            <p className='py-1 text-gray-400 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, laboriosam nesciunt adipisci officiis eos laudantium veritatis corrupti. Provident fugit explicabo vel corporis esse nesciunt, rem voluptatum expedita distinctio neque assumenda animi cupiditate id consectetur, quidem fugiat asperiores possimus architecto quaerat eligendi quas veniam! Itaque, nostrum! Perspiciatis incidunt omnis laudantium vero? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae quibusdam quaerat, repellendus, vel id exercitationem quasi et ullam, perferendis itaque officiis excepturi aliquid! Porro tenetur corporis iure nostrum fugit error alias quisquam sequi cum, eligendi repellendus tempora atque nesciunt illo sed officia nam ea itaque, ab suscipit modi possimus sunt.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutUs;