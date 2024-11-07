import React from "react";
import CTAButton from "./Button"; 
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa"; 

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  codeblock,
  bgGradient,
  codeColor,
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>
      
      {/* Left Section: Heading, Subheading, Buttons */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8">
        {/* Main Heading */}
        <h1 className="text-white text-4xl font-bold">{heading}</h1>

        {/* Subheading */}
        <p className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-7 mt-7">
          <CTAButton active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </CTAButton>
          <CTAButton active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </CTAButton>
        </div>
      </div>

      {/* Right Section: Code Block */}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px] bg-richblack-800/60 backdrop-blur-lg rounded-md shadow-[0_10px_25px_rgba(0,0,0,0.75)] shadow-[#222541fc]">
        {/* Background Gradient */}
        {bgGradient}

        {/* Line Numbers */}
        <div className="text-center flex flex-col w-[10%] select-none text-richblack-400 font-inter font-bold">
          {[...Array(12)].map((_, index) => (
            <p key={index}>{index + 1}</p>
          ))}
        </div>

        {/* Code Block with Animation */}
        <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-1`}>
          <TypeAnimation
            sequence={[codeblock, 1000, ""]}
            cursor={true}
            repeat={Infinity}
            style={{
              whiteSpace: "pre-line",
              display: "block",
            }}
            omitDeletionAnimation={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;