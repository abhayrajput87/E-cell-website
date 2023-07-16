import React from 'react'
import visionimg from '../../Assets/vision.jpg';
function Vision() {
  return (
    <div className='bg-[#0F0F0F] w-full h-full pb-16 grid gap-8 lg:grid-cols-2 px-12 md:px-16 pt-32' >
        
        <div className='flex flex-col' >
            <p className='pb-4 text-[#237186]' >Easy Business Solution</p>
            <h1 className='pb-4 text-5xl font-extrabold text-white' >Our <span className=' text-[#237186] ' >Vision</span></h1>
            <div className='flex flex-row space-x-2 ' >
            <div className='border-[1.5px] h-[95%] rounded-lg border-[#237186]' ></div>
            <p className='py-1 text-gray-400 ' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sint distinctio eius ipsam voluptatum vitae architecto dolorum quidem blanditiis? Temporibus corrupti quae provident error nobis ducimus officia ullam placeat esse? </p>
            </div>
            <div className='w-full relative bg-[#151515] px-8 py-3 rounded-md mt-8 ' >
                <div>
                  <h1 className='text-white uppercase text-xl ' >Lorem, ipsum dolor.</h1>
                  <p className='text-gray-400  ' > Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quos quidem quis debitis ducimus similique! </p>
                </div>
          
            </div>
            <div className='w-full relative bg-[#151515] px-8 py-3 rounded-md mt-8 ' >
                <div>
                  <h1 className='text-white uppercase text-xl ' >Lorem, ipsum dolor.</h1>
                  <p className='text-gray-400  ' > Lorem ipsum dolor sit amet. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quos quidem quis debitis ducimus similique! </p>
                </div>
          
            </div>
          
        
        
        </div>
        <div><img src={visionimg} alt="" /></div>
       
    </div>
  )
}

export default Vision;