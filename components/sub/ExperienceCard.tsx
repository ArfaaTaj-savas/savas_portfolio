import React from "react";
import Image from "next/image";

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, icon }) => {
  return (
    <div 
      className="bg-gradient-to-r from-gray-900 to-black shadow-lg rounded-xl p-6 flex flex-col md:flex-row items-center gap-6 
      transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
      role="article"
      aria-label={`Experience card for ${title}`}
    >
      {/* Optimized Next.js Image */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 flex-shrink-0">
        <Image 
          src={icon} 
          alt={`${title} icon`} 
          layout="fill"
          objectFit="contain"
          className="experience-icon rounded-lg"
        />
      </div>

      {/* Text Content */}
      <div className="text-center md:text-left">
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm mt-2 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
