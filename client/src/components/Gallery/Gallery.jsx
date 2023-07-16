import React from "react"
import "./Image.css"
import image1 from '../../Assets/passion.jpg'
import image2 from '../../Assets/touch.jpg'
import image3 from '../../Assets/vision.jpg'
export default function ImageCollapse() {
    return (
        <div className="md:w-[80%] w-full flex flex-col mx-auto mt-8 md:mt-16 mb-16"  >



            <h
                className="px-8 text-3xl md:text-5xl text-[#145566] font-extrabold underline pb-2 md:pb-4" >
                HIGHLIGHTS
            </h>

            <div className="grid grid-rows-6 h-[90vh] ">

                <div className="px-8 mb-8 row-span-3 " >
                    <img className="object-cover w-full h-full rounded-lg" src={image2} alt="" />
                    <div className="border-4 bg-[#145566] mt-3 border-[#145566] " />
                </div>


                <div className="flex flex-col md:flex-row row-span-3 px-8 gap-4 " >
                    <img className="object-cover md:w-[40%] md:h-[90%] rounded-lg " src={image1} alt="" />
                    <img className="object-cover   md:w-[60%] h-full rounded-lg " src={image3} alt="" />
                </div>

            </div>

        </div>


    )

}