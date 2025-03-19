import React from "react";
import ExperienceCard from "../sub/ExperienceCard";

const experiences = [
  {
    title: "Cyber Security",
    description: "Ensuring robust protection against cyber threats through advanced security measures.",
    icon: "cyber-security.png",
  },
  {
    title: "Cloud Computing",
    description: "Designing scalable and efficient cloud solutions to optimize performance and reliability.",
    icon: "cloud.png",
  },
  {
    title: "Web Developer",
    description: "Creating responsive, user-friendly, and dynamic web applications for a seamless experience.",
    icon: "web-developer.png",
  },
  {
    title: "AI & Machine Learning",
    description: "Leveraging data-driven insights and intelligent algorithms to build smart solutions",
    icon: "AI.png",
  },
];

const Experience = () => { 
  return (
    <div className="max-w-5xl mx-auto px-4 text-center py-10">
      <h2 className="text-4xl font-bold text-white">
        My <span className="text-purple-500">Work Experience</span>
      </h2>
      <h1>__</h1>
      <div className=" text-[18px] font-medium text-center text-gray-300">
      I am gaining hands-on experience in Cyber Security, Cloud Computing, 
      Web Development, and AI & Machine Learning, continuously expanding
       my skills in the ever-evolving tech world.
        </div>
      <h1>__</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {experiences.map((exp, index) => (
          <ExperienceCard 
            key={index} 
            title={exp.title} 
            description={exp.description} 
            icon={exp.icon} 
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
