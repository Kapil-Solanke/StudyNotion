// import React from "react";
// import { Highlight } from "./Highlight";
// import img1 from '../../../assets/Images/Know_your_progress.png'
// import img2 from '../../../assets/Images/Compare_with_others.png'
// import img3 from '../../../assets/Images/Plan_your_lessons.png'
// import CTAButton from "./Button";
// const LearningLanguageSections = () => {
//   return (
//     <div className="flex flex-col w-11/12 mx-auto justify-center items-center px-28 py-20 text-richblack-700 h-fit border-4 gap-8 font-inter">
//       <div className="flex flex-col items-center">
//         <div className="font-semibold text-4xl text-richblue-900">
//           Your swiss knife for <Highlight text={"learning any language"} />
//         </div>
//         <div className="flex flex-col items-center text-center font-medium text-base gap-3 w-2/3">
//           Using spin making learning multiple languages easy. with 20+ languages
//           realistic voice-over, progress tracking, custom schedule and more.
//         </div>      
//       </div>
//       {/* try these with margin without absolute */}
//       <div className="flex items-center justify-center relative border-4 min-h-[500px] overflow-hidden w-full">
//           <img src={img1} alt="know_progress" className="absolute left-0"/>
//           <img src={img2} alt="know_progress" className="absolute" />
//           <img src={img3} alt="know_progress" className="absolute right-0" />
//       </div>

//       <div>
//         <CTAButton active={1} linkto={"/signup"}>
//           Learn More
//         </CTAButton>
//       </div>
//     </div>
//   );
// };

// export default LearningLanguageSections;

import React from 'react'
import HighlightText from './Highlight'
import know_your_progress  from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lesson from "../../../assets/Images/Plan_your_lessons.png"
import CTAButton from "../HomePage/Button"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>
      <div className='flex flex-col gap-5 items-center'>

            <div className='text-4xl font-semibold text-center'>
                Your Swiss Knife for
                <HighlightText text={" learning any language"} />
            </div>

            <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
            Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.
            </div>

            <div className='flex flex-row max-sm:flex-wrap items-center justify-center mt-5'>
                <img 
                    src = {know_your_progress}
                    alt = "KNowYourProgressImage"
                    className='object-contain  sm:-mr-32 '
                />
                <img 
                    src = {compare_with_others}
                    alt = "KNowYourProgressImage"
                    className='object-contain max-sm:-mt-40'
                />
                <img 
                    src = {plan_your_lesson}
                    alt = "KNowYourProgressImage"
                    className='object-contain max-sm:-mt-40  sm:-ml-36'
                />
            </div>

            <div className='w-fit'>
                <CTAButton active={true} linkto={"/signup"}>
                    <div>
                        Learn more
                    </div>
                </CTAButton>
            </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
