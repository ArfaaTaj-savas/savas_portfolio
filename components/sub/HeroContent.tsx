"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-8 md:px-20 mt-20 md:mt-40 w-full z-[20] space-y-10 md:space-y-0"
    >
      {/* Left Side Content */}
      <div className="w-full flex flex-col gap-5 justify-center text-start">
        
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-2 px-4 border border-[#7042f88b] opacity-90 rounded-lg backdrop-blur-md"
        >
          <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-sm font-medium text-white">
            👋 HELLO & WELCOME
          </h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-4 text-4xl md:text-6xl font-bold text-white max-w-[600px]"
        >
          <span>
            I&apos;m{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              MD Arfaa Taj
            </span>
            , a B.Tech CSE/IT student
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px] leading-relaxed"
        >
          I&apos;m currently pursuing a Bachelor&apos;s degree at{" "}
          <span className="font-semibold text-white">Lovely Professional University</span>, 
          specializing in <span className="text-white font-medium">Cybersecurity</span>.  
          My passion lies in web development, and I have extensive hands-on experience with 
          <span className="text-white font-medium"> cloud servers</span>.  
          I&apos;m also an active member of the{" "}
          <span className="text-white font-medium">AWS Cloud Club</span>, where I continuously 
          expand my expertise in cloud computing.
        </motion.p>

        {/* Call-to-Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="https://drive.google.com/file/d/1HDPVty8085IB7Mmp_-PIBAjepykUEzY_/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="View My Resume"
          className="py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white font-semibold cursor-pointer rounded-lg max-w-[200px] 
          block transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Resume!
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Illustration of cybersecurity and web development concepts"
          height={600}
          width={600}
          priority
          className="rounded-xl shadow-xl transition-all duration-300 transform hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
