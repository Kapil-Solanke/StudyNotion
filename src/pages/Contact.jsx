// import React from 'react'
// import ContactUsForm from '../components/ContactPage/ContactUsForm'
// import Footer from '../components/common/Footer'
// import { HiChatBubbleLeftRight } from "react-icons/hi2";
// import { BiWorld } from "react-icons/bi";
// import { IoCall } from "react-icons/io5";
// const Contact = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="flex items-start justify-center px-20 py-16 gap-14  font-inter">
//         <div className="flex flex-col items-start px-10 py-6 gap-6 bg-richblack-800 rounded-md">
//           <div className="flex p-3 gap-2 items-start ">
//             <div className="w-6 h-6 text-richblack-200">
//               <HiChatBubbleLeftRight />
//             </div>
//             <div className="flex flex-col items-start gap-1">
//               <div className="text-richblack-5 font-inter font-semibold text-base">
//                 Chat With Us
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 Our friendly team is here to help.
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 @mail address
//               </div>
//             </div>
//           </div>
//           <div className="flex p-3 gap-2 items-start ">
//             <div className="w-6 h-6 text-richblack-200">
//               <BiWorld />
//             </div>
//             <div className="flex flex-col items-start gap-1">
//               <div className="text-richblack-5 font-inter font-semibold text-base">
//                 Visit Us
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 Come and say hello at our office HQ.
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 Here is the location/ address
//               </div>
//             </div>
//           </div>
//           <div className="flex p-3 gap-2 items-start ">
//             <div className="w-6 h-6 text-richblack-200">
//               <IoCall />
//             </div>
//             <div className="flex flex-col items-start gap-1">
//               <div className="text-richblack-5 font-inter font-semibold text-base">
//                 Call Us
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 Mon - Fri From 8am to 5pm
//               </div>
//               <div className="text-richblack-200 font-inter font-normal text-sm">
//                 +123 456 7890
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex flex-col justify-center border-4 items-start p-12 gap-8 border-richblack-600 rounded-xl">
//           <div className="flex flex-col text-richblack-5 font-semibold text-2xl ">
//             Got a Idea? We’ve got the skills.
//             <div className=" text-richblack-5 font-semibold  ">
//               Let's Team Up
//             </div>
//             <div className=" text-richblack-300 font-normal text-base  ">
//               Tall us more about yourself and what you’re got in mind.
//             </div>
//           </div>
//           <ContactUsForm/>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   )
// }

// export default Contact
import React from "react"

import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]">
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        {/* <ReviewSlider /> */}
      </div>
      <Footer />
    </div>
  )
}

export default Contact