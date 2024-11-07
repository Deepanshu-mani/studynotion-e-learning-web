import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import CTAButton from "../components/core/HomePage/Button";
import HighlightText from "../components/core/HomePage/HighlightText";
import Banner from "../assets/Images/banner.mp4";
import CodeBlocks from "../components/core/HomePage/CodeBlocks";
import "../App.css";
import Footer from "../components/common/Footer";
import InstructorSection from "../components/core/HomePage/InstructorSection";
import ExploreMore from "../components/core/HomePage/ExploreMore";
import TimelineSection from "../components/core/HomePage/Timeline";
import LearningLanguageSection from "../components/core/HomePage/LearningLanguageSection";
import ReviewSlider from "../components/common/ReviewSlider";
function Home() {

  useEffect(() => {
    var videocon = document.querySelector("#video-container");
    var playbtn = document.querySelector("#play");

    videocon.addEventListener("mouseenter", function () {
      gsap.to(playbtn, {
        scale: 1,
        opacity: 1
      })
    })
    videocon.addEventListener("mouseleave", function () {
      gsap.to(playbtn, {
        scale: 0,
        opacity: 0
      })
    })
    videocon.addEventListener("mousemove", function (dets) {
      gsap.to(playbtn, {
        left: dets.x - 30,
        top: dets.y - 50
      })
    })
  })
  return (
    <div>
      {/* SECTION 1 */}
      <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-center">
        <Link to={"/signup"} className="mt-16">
          <div className="group mx-auto rounded-full bg-richblack-800 text-richblack-200 font-bold transition-all duration-200 hover:scale-95 w-fit hover:border-2 hover:border-richblack-200">
            <div className="flex flex-row gap-3 items-center px-12 py-3 rounded-full transition-all duration-200 group-hover:bg-richblack-900">
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className="text-center text-4xl font-semibold mt-7 ">
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        <div className="w-[90%] text-center font-bold mt-4 text-richblack-300 ">
          With our online coding courses, you can learn at your own pace, from
          anywhere in the world, and get access to a wealth of resources,
          including hands-on projects, quizzes, and personalized feedback from
          instructors.
        </div>

        <div className="flex flex-row gap-7 mt-8">
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>
          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div
          id="video-container"
          className=" mx-3 my-7 relative shadow-lg rounded-lg overflow-hidden shadow-blue-200 hover:shadow-xl transition-shadow duration-300 ease-in-out"
        >
          <div
            id="play"
            className=" bg-black px-3 py-5 text-lg font-inter fixed rounded-full font-bold opacity-1 scale-1 z-10"
          >
            PLAY
          </div>
          <video
            className="w-full h-auto border-4 border-white rounded-md shadow-lg hover:scale-105 transition-transform duration-500 ease-in-out object-cover"
            muted
            loop
            autoPlay
          >
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* CODE SECTION 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className="text-[2.5rem] leading-[44px]">
                Unlock Your
                <HighlightText text={" coding potential "} />
                with our online courses.
              </div>
            }
            subheading={
              " Our courses are designed and taught by industry experts who have years of experiences in coding and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it Yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>StudyNotion</title>\n</head>\n<body>\n<h1>Hello, Coders!</h1>\n</body>\n</html>`}
            codecolor={"text-yellow-25"}
            bggradient={<div className="codeblock1 absolute"></div>}
          />
        </div>

        {/* CODE SECTION 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className="text-[2.5rem]">
                Start
                <HighlightText text={" coding in seconds "} />
              </div>
            }
            subheading={
              "Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."
            }
            ctabtn1={{
              btnText: "Continue Lesson",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeblock={`<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>StudyNotion</title>\n</head>\n<body>\n<h1>Hello, Coders!</h1>\n</body>\n</html>`}
            codecolor={"text-yellow-25"}
            bggradient={<div className="codeblock2 absolute"></div>}
          />
        </div>
        {/* Explore Section */}
        <ExploreMore />
      </div>


      {/* SECTION => 2 */}

      <div className="bg-pure-greys-5 text-richblack-700">
        <div className="homepage_bg h-[320px]">
          {/* Explore Full Catagory Section */}
          <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8">
            <div className="lg:h-[150px]"></div>
            <div className="flex flex-row gap-7 text-white lg:mt-8">
              <CTAButton active={true} linkto={"/signup"}>
                <div className="flex items-center gap-2">
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>
              <CTAButton active={false} linkto={"/login"}>
                Learn More
              </CTAButton>
            </div>
          </div>
        </div>

        <div className="mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 ">
          {/* Job that is in Demand - Section 1 */}
          <div className="mb-10 mt-[-100px] flex flex-col justify-between gap-7 lg:mt-20 lg:flex-row lg:gap-0">
            <div className="text-4xl font-semibold lg:w-[45%] ">
              Get the skills you need for a{" "}
              <HighlightText text={"job that is in demand."} />
            </div>
            <div className="flex flex-col items-start gap-10 lg:w-[40%]">
              <div className="text-[16px]">
                The modern StudyNotion is the dictates its own terms. Today, to
                be a competitive specialist requires more than professional
                skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div className="">Learn More</div>
              </CTAButton>
            </div>
          </div>

          {/* SECTION 2 => TIMELINE SECTION */}
          <TimelineSection />

          {/* SECTION 3 => LEARNING LANGUAGE SECTION */}
          <LearningLanguageSection />
        </div>
      </div>

      {/* SECTION => 3 */}
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white">
        {/* Become a instructor section */}
        <InstructorSection />

        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold mt-8">
          Reviews from other learners
        </h1>
        <ReviewSlider />
      </div>

      {/* Footer */}
      <Footer />    
      



    </div>
  );
}

export default Home;