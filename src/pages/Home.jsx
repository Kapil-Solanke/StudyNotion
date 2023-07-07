import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Highlight } from "../components/core/HomePage/Highlight";
import CTAButton from "../components/core/HomePage/Button";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import Footer from "../components/common/Footer";
import TimeLineSection from "../components/core/HomePage/TimeLineSection";
import LearningLanguageSections from "../components/core/HomePage/LearningLanguageSections";
import BgGradient from "../components/core/HomePage/BgGradient";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import Reviews from "../components/core/HomePage/Reviews";

export const Home = () => {
  return (
    <div>
      {/* section 1 */}
      <div className="mx-auto mt-24  relative w-11/12 max-w-maxContent flex flex-col items-center gap-4 ">
        <Link to={"/signup"}>
          <div className=" mb-3 mx-auto rounded-full bg-richblack-800 font-bold  text-richblack-200 transition-all duration-200 hover:scale-95 w-fit hover:text-white group shadow-[inset_0px_-1px_0px]  shadow-[#FFFFFF]">
            <div
              className="flex items-center rounded-full gap-2 px-6 py-2  transition-all duration-200
              group-hover:bg-richblack-900">
              <p className="font-inter text-lg ">Become an Instructor</p>
              <FaArrowRight className=" " />
            </div>
          </div>
        </Link>

        <div className="text-white space-x-4 text-center font-semibold text-4xl ">
          Empower Your Future with
          <Highlight text={" Coding Skills"} />
        </div>
        <div className="text-[#838894] text-center w-2/3  text-base font-medium ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>
        <div className="flex gap-6">
          <CTAButton active={1} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={0} linkto={"/login"}>
            Book Demo
          </CTAButton>
        </div>

        {/* banner video */}
        <div className="relative w-full flex items-center justify-center">
          <BgGradient
            bgGradient={"bg-gradient-to-br from-[#1FA2FF] to-[#12D8FA]"}
            opcty={"opacity-60"}
          />
          <div className="  my-14 drop-shadow-[20px_20px_0px_#F5F5F5] w-2/3 ">
            <video muted loop autoPlay>
              <source src={Banner} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-4xl font-semibold text-white">
                Unlock your <Highlight text={" coding potential"} /> with our
                online courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              text: "Try It Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a>\n</nav>`}
            codeColor={"text-pink-100"}
            backgroundGradient={`bg-gradient-to-br from-[#8A2BE2] via-[#FFA500] to-[#F8F8FF]`}
          />
        </div>
        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-4xl font-semibold text-white">
                Start <Highlight text={" coding in seconds"} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              text: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              text: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example</title>\n<link href="styles.css">\n</head>\n<body>\n<h1><ahref="/">Header</a>\n</h1>\n<nav><ahref="one/">One</a>\n</nav>`}
            codeColor={"text-pink-300"}
            backgroundGradient={`bg-gradient-to-br from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] `}
          />
        </div>
        <div className="w-screen">
          <ExploreMore />
        </div>
      </div>

      {/* section 2 */}
      <div className="bg-pure-greys-5 text-richblack-700 h-fit">
        <div className="homepage_bg h-[310px]">
          <div className="w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto">
            <div className="h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white ">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-3">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
        </div>
        {/* first box */}

        <div className="mx-auto w-11/12 max-w-maxContent flex  flex-col items-center justify-between gap-7">
          <div className="flex flex-row flex-wrap gap-5 mb-10 mt-[95px]">
            <div className="text-4xl font-semibold lg:w-[45%]">
              Get the Skills you need for a
              <Highlight text={"Job that is in demand"} />
            </div>

            <div className="flex flex-col gap-10 lg:w-[40%] items-start">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>Learn more</div>
              </CTAButton>
            </div>
          </div>
          <div>
            <TimeLineSection />
          </div>
          <div>
            <LearningLanguageSections />
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex flex-col w-11/12 mx-auto justify-between items-center px-28 py-20 text-richblack-700 h-fit gap-8">
        <InstructorSection></InstructorSection>
        <div className=" flex flex-col gap-8 border-white w-full">
          <div className="font-inter font-semibold text-4xl text-center text-[#F1F2FF]">
            Reviews from other learners
          </div>
          <div className="flex">
            <Reviews />
          </div>
        </div>
      </div>
      {/* footer */}

      <Footer />
    </div>
  );
};

export default Home;
