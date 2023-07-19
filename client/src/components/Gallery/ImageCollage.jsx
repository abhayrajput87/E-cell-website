import React from "react"
import "./Image.css"


export default function ImageCollapse() {
    return (
        <div >
           <section>

             <div class="container flex flex-col px-4 mx-auto mt-10 sm:space-y-0 md:space-y-0 md:flex-row">
                <h1 className="sm:text-3xl md:hidden font-bold text-cyan-700 color">highlights</h1>
                 <div class="flex flex-col justify-center md:w-1/4 ">
                     <div className="flexflex-col sm:h-auto  md:h-96 transform md:rotate-0 sm:rotate-90 max-w-lg bg-no-repeat Image2 md:ml-64 "></div>
                 </div>
                 
                 
                 <div class="flex flex-col sm:space-y-0 md:space-y-12 md:w-1/2">
                     <div className=" flex flex-col bg-no-repeat  Image1 mt-10 md:max-w-2xl "></div>
                     <div className="border-4 bg-[#145566]  border-[#145566] " />
                 </div>

             </div>

           </section>
           
           <section>

            <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
                <div class="flex flex-col space-y-0 md:space-y-12 md:w-1/2">
                     <div className=" flex max-w-lg md:ml-48 bg-no-repeat Image3 "></div>
                </div>

                <div class="flex flex-col space-y-0 md:space-y-12 md:w-1/2">
                     <div className="flex max-w-lg bg-no-repeat Image4 "></div>
                </div>
            </div>

           </section>
        </div>
    )
}

// import React from "react"
// // import "./Image.css"
// import image1 from './img/image 65.png'
// import image2 from './img/image 64.png'
// import image3 from './img/image 67.png'
// export default function ImageCollapse() {
//     return (
//         <div className="md:w-[80%] w-full flex flex-col mx-auto mt-8 md:mt-16 mb-16"  >
            
            
             
//                 <p className="px-8 text-3xl md:text-5xl text-[#145566] font-extrabold underline pb-2 md:pb-4" >
//                     HIGHLIGHTS
//                 </p>
           
//             <div className="grid grid-rows-6 h-[100vh] ">
            
//                     <div className="px-8 mb-8 row-span-3 " >
//                         <img className="object-cover w-full h-full rounded-lg" src={image2} alt="" />   
//                         <div className="border-4 bg-[#145566] mt-3 border-[#145566] " />
//                     </div>

                
//                     <div className="flex flex-col md:flex-row row-span-3 px-8 gap-4 " >
//                         <img className="object-cover md:w-[40%] md:h-[90%] rounded-lg " src={image1} alt="" />
//                         <img className="object-cover   md:w-[60%] h-full rounded-lg " src={image3} alt="" />
//                     </div>

//             </div>
//             </div>

//      )
// }