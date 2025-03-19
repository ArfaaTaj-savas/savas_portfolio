"use client";

import React, { useRef } from "react";
import ProjectCard from "../sub/ProjectCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Projects = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      <div className="relative w-full max-w-5xl">
        {/* Left Arrow */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
        >
          <FaChevronLeft size={20} />
        </button>

        {/* Projects Container */}
        <div ref={scrollRef} className="flex overflow-hidden scroll-smooth w-full space-x-8">
          <ProjectCard
            src="/NextWebsite.png"
            title="Energy Consumption In Homes Businesses."
            description="I developed this project on Energy Consumption in Homes and Businesses using HTML, CSS, and JavaScript. It provides insights on sustainable energy practices with a user-friendly and visually appealing design."
            link="https://yourwebsite.com/nextjs-portfolio"
          />
          <ProjectCard
            src="/SpaceWebsite.png"
            title="My Portfolio Website"
            description="I have built this website using Next.js and Tailwind CSS
            to ensure a modern and responsive design. Throughout the development
            process, I incorporated various content sources to enhance its 
            functionality and user experience."
            link="https://www.youtube.com/"
          />
          <ProjectCard
            src="/to-do-list.png"
            title="To-Do List App"
            description="Developed a fully functional to-do list app using React, integrated it with AWS services for seamless deployment, scalability, and efficient task management."
            link="https://yourwebsite.com/fourth-project"
          />
          <ProjectCard
            src="/CardImage.png"
            title="Recipe Meal Planner And Grocery List Generator"
            description="I have created the Recipe Meal Planner and Grocery List Generator using HTML, CSS, and JavaScript. This project helps users efficiently plan their meals and generate grocery lists, providing a seamless and interactive experience."
            link="https://yourwebsite.com/interactive-cards"
          />
          
          {/* <ProjectCard
            src="/NewProject.png"
            title="Fourth Project"
            description="This is my fourth project description. It follows the same structure and styling as the others but will be hidden until navigated."
            link="https://yourwebsite.com/fourth-project"
          />
          <ProjectCard
            src="/NewProject.png"
            title="Fourth Project"
            description="This is my fourth project description. It follows the same structure and styling as the others but will be hidden until navigated."
            link="https://yourwebsite.com/fourth-project"
          /> */}
        </div> 

        {/* Right Arrow */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 z-10"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Projects;
