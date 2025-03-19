import React from "react";

interface ExperienceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black shadow-lg rounded-xl p-6 flex items-center gap-6 transition-transform transform hover:scale-105 hover:shadow-xl">
      {/* Increased icon size */}
      <img src={icon} alt={title} className="w-24 h-24 object-contain experience-icon" />

      <div>
        <h3 className="text-white text-2xl font-bold">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
