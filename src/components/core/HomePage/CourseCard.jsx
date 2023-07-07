// import React from "react";
// import { HiUsers } from "react-icons/hi2";
// const CourseCard = ({ course, index, current }) => {
//   return (
//     <div
//       className={`flex  flex-col gap-4  py-6 px-7 ${
//         current === course.heading ? "shadow-[12px_12px_0px_#FFD60A] bg-white" : "bg-richblack-800"
//       } `}
//       key={index}>
//       <div className={`font-inter font-semibold text-lg  ${
//         current === course.heading ? "text-richblack-800" : " text-richblack-25"
//       } `}>
//         {course.heading}
//       </div>
//       <div className={`font-inter font-normal text-base ${
//         current === course.heading ? "text-richblack-500" : " text-richblack-400"
//       } `}>
//         {course.description}
//       </div>
//       <div className={`flex flex-row justify-between items-center py-4 px-6 gap-6 font-inter font-semibold text-lg ${
//         current === course.heading ? "text-richblue-300" : " text-richblack-400"
//       }  border-dashed border-t-2 mt-3  `}>
//         <div className="flex items-center gap-2">
//           <HiUsers />
//           <div>{course.level}</div>
//         </div>
//         <div className="flex items-center gap-2">
//           <HiUsers />
//           <div>{course.lessionNumber}</div>
//         </div>
    
//       </div>
//     </div>
//   );
// };

// export default CourseCard;
import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({cardData, currentCard, setCurrentCard}) => {
  return (
    <div
      className={`w-[360px] lg:w-[30%] ${
        currentCard === cardData?.heading
          ? "bg-white shadow-[12px_12px_0_0] shadow-yellow-50"
          : "bg-richblack-800"
      }  text-richblack-25 h-[300px] box-border cursor-pointer`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-richblack-400 border-dashed h-[80%] p-6 flex flex-col gap-3">
        <div
          className={` ${
            currentCard === cardData?.heading && "text-richblack-800"
          } font-semibold text-[20px]`}
        >
          {cardData?.heading}
        </div>

        <div className="text-richblack-400">{cardData?.description}</div>
      </div>

      <div
        className={`flex justify-between ${
          currentCard === cardData?.heading ? "text-blue-300" : "text-richblack-300"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessionNumber} Lession</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;