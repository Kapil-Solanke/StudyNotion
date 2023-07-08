import React from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../components/core/HomePage/Button";
import { FaArrowRight } from "react-icons/fa";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 w-screen h-screen justify-center items-center text-3xl text-white">
      Error - 404 Not found
      <div className="flex gap-3">
        <CTAButton active={0} linkto={navigate(-1)}>
          Back
        </CTAButton>
        <CTAButton active={1} linkto={"/"}>
          Home
          <FaArrowRight className=" " />
        </CTAButton>
      </div>
    </div>
  );
};

export default Error;
