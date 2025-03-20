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
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      {/* Left Side Content */}
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box flex items-center py-2 px-4 border border-[#7042f88b] opacity-90 rounded-lg"
        >
          <SparklesIcon className="text-[#b49bff] mr-3 h-5 w-5" />
          <h1 className="Welcome-text text-sm font-medium text-white">HELLO</h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl md:text-6xl font-bold text-white max-w-[600px]"
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
          className="text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          I&apos;m currently pursuing a Bachelor&apos;s degree at Lovely Professional University, focusing on 
          cybersecurity. I am passionate about web development and have hands-on experience working with 
          cloud servers. Additionally, I am an active member of the AWS Cloud Club, where I expand my 
          knowledge in cloud computing.
        </motion.p>

        {/* Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#"
          role="button"
          aria-label="Learn More about me"
          className="py-3 px-6 bg-gradient-to-r from-purple-500 to-cyan-500 text-center text-white font-semibold cursor-pointer rounded-lg max-w-[200px] block transition-transform transform hover:scale-105"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Right Side Image */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="Work Icons"
          height={650}
          width={650}
          priority
          className="rounded-lg shadow-lg"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
