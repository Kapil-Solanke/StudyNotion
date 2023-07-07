import React from "react";
import { Highlight } from "./Highlight";
import { FaArrowRight } from "react-icons/fa";
import Instructor from "../../../assets/Images/Instructor.png";
import CTAButton from "./Button";

const InstructorSection = () => {
  return (
    <div className="flex flex-row flex-wrap sm:mx-auto max-sm:p-3  max-sm:w-screen  items-center  text-richblack-500 h-fit  gap-8">
      <div className=" lg:w-[50%] max-sm:w-full max-sm:mx-auto   max-sm:p-3 drop-shadow-[-20px_-20px_0px_#F5F5F5]  ">
        <img src={Instructor} alt="Instructor" />
      </div>
      <div className=" lg:w-[40%]   flex flex-col items-start gap-8 ">
        <div className="font-semibold text-4xl text-white">
          Become an <Highlight text={"Instructor"} />
        </div>
        <div className=" font-medium text-base">
          Instructors from around the world teach millions of students on
          StudyNotion. We provide the tools and skills to teach what you love.
        </div>
        <CTAButton active={1} linkto={"/signup"}>
          <div className="flex gap-2 items-center">
            Explore Full Catalog
            <FaArrowRight></FaArrowRight>
          </div>
        </CTAButton>
      </div>
    </div>
  );
};

export default InstructorSection;
