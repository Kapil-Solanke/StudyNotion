import React from "react";
import logo from "../../../assets/Logo/Logo-Small-Light.png";
import { AiFillGoogleCircle } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import FooterComp from "./FooterComp";
const Footer = () => {
  return (
    <div className="px-[80px] py-[52px]">
    <div className="flex flex-row max-md:flex-wrap w-full h-max justify-center   text-[#6E727F] gap-8 max-md:p-0 max-md:">
      {/* left side */}
      <div className="flex  flex-row items-start justify-between gap-3 w-1/2 max-md:gap-3  max-md:justify-end  max-md:px-0">
        {/* company */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-row items-center gap-1 text-[#C5C7D4]">
            <img src={logo} alt="Logo" className="w-8" />
            <p>Study Notion</p>
          </div>
          <div>About</div>
          <div>Careers</div>
          <div>Affiliates</div>
          <div className="flex flex-row items-start w-full gap-1">
            <AiFillGoogleCircle></AiFillGoogleCircle>
            <BsFacebook></BsFacebook>
            <AiOutlineTwitter></AiOutlineTwitter>
            <AiFillYoutube></AiFillYoutube>
          </div>
        </div>
        {/* resorurces */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-3">
            <div className="text-xl text-[#C5C7D4]">Resources</div>
            <div>Articles</div>
            <div>Blog</div>
            <div>Chart Sheet</div>
            <div>Code challenges</div>
            <div>Docs</div>
            <div>Projects</div>
            <div>Videos</div>
            <div>Workspaces</div>
          </div>
          <div className="flex flex-col items-start gap-3 mt-5">
            <div className="text-xl text-[#C5C7D4]">Support</div>
            <div>Help Center</div>
          </div>
        </div>
        {/* plans */}
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col items-start gap-3">
            <div className="text-xl text-[#C5C7D4]">Plans</div>
            <div>Paid Membership</div>
            <div>For students</div>
            <div>Business solutions </div>
          </div>
          <div className="flex flex-col items-start gap-3 mt-5">
            <div className="text-xl text-[#C5C7D4]">Community</div>
            <div>Forums</div>
            <div>Chapters</div>
            <div>Events</div>
          </div>
        </div>
      </div>
      {/* divider */}
      <div className=" w-[2px] h-screen  border-2 border-[#2C333F] max-md:hidden"></div>
      {/* right side */}
      <div className='w-1/2 flex flex-row items-start justify-between gap-3 max-md:gap-8 '>
      <FooterComp
        heading='Subjects'
        items={['AI','Cloud Computing','Code Foundations','Computer Science','Data Analytics','Data Science','Data Visualization','Developer Tools','DevOps','Game Development','IT','Machine Learning','Math','Mobile Development','Web Development','Web Design']}
        />
      <FooterComp
        heading='Languages'
        items={['C','C++','C#','Go','HTML & CSS','Java','JavaScript','Kotlin','PHP','Python','Ruby','R','SQL','Swift']}
        />
      <FooterComp
        heading='Career Building'
        items={['Career Paths','Career services','Interview prep','Professional Certification','_','Full Catalog','Beta Content']}
        />
      </div>
    </div>
    {/* divider */}
    <div className=" w-11/12 mx-auto mt-2 border-2 border-[#2C333F] "></div>
    <div className=" text-[#838894] w-11/12 mx-auto mt-3 flex justify-between p-2  ">
        <div className="flex gap-3">
          <div className=" ">Privacy Policy</div>
          <div className="border-[1px] border-richblue-700 "></div>
          <div>Cookie Policy</div>
          <div className="border-[1px] border-richblue-700 "></div>
          <div>Terms</div>
        </div>
        <div>
        Made with ♥ CodeHelp © 2023 Studynotion
        </div>
    </div>

    </div>
  );
};

export default Footer;
