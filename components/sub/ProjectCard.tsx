"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
<div className="project-card relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] 
                w-[450px] max-w-full md:w-[420px] sm:w-[380px] h-[480px] flex flex-col bg-[#0D0D2B]">
      {/* Image Section */}
      <div className="h-[250px]">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-t-2xl"
        />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col flex-grow items-center text-center">
        <h1 className="text-xl font-bold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-sm flex-grow">{description}</p>

        {/* Fixed View Button at Bottom */}
        <div className="w-full mt-auto flex items-center justify-center pb-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href={link}
              className="px-3 py-2 text-lg bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;