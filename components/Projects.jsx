import React, { useState } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";

import portfolioPicture from "../assests/portfolio.jpg";
import prokemonProject from "../assests/pokemon.jpg";
import calculatorProject from "../assests/calculator.jpg";
import shikhbeNakiProject from "../assests/shikhbeNaki.jpg";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
const Projects = () => {
  const [visibleProjects, setvisibleProjects] = useState(3);
  const handleClick = () => {
    visibleProjects == projects.length - 1
      ? setvisibleProjects(() => visibleProjects + 1)
      : setvisibleProjects(() => visibleProjects - 1);
  };
  const projects = [
    {
      id: 1,
      title: "Personal Portfolio",
      desc: " A minimal dark/golden themed personal website to demonstrate my skills and projects I have built. Responsive for small, medium and large devices",
      img: portfolioPicture,
      tools: [
        "NextJs",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "ReactIcons",
        "SEO Optimized",
        "Responsive",
      ],
      link: "https://final-portfolio-bv61-git-main-rashidul-islam-alvi.vercel.app/",
    },

    {
      id: 2,
      title: "Shikhbe Naki - A digital learning platform",
      desc: "Biggest project i have built so far. A digital learning platfrom to read documents , enroll into courses, buy ebooks and many more [Live link is broken right now]",
      img: shikhbeNakiProject,
      tools: [
        "ReactJs",
        "Styled-Component",
        "HTML",
        "CSS",
        "JavaScript",
        "Material UI",
        "Material Icons",
      ],
      link: "",
    },
    {
      id: 3,
      title: "Pokemon.all",
      desc: "A pokemon website where you can browse all the pokemons and see their abilities, stats and other stuff. It's just a template right now, need to feed it with a pokemon API",
      img: prokemonProject,
      tools: [
        "NextJs",
        "Tailwind",
        "HTML",
        "CSS",
        "JavaScript",
        "SEO Optimized",
      ],
      link: "",
    },
    {
      id: 4,
      title: "Bill and Tip Calculator",
      desc: "A simple calculator to calculate the bill and tip by per person.",
      img: calculatorProject,
      tools: ["Vanilla JS", "CSS", "HTML", "JavaScript"],
      link: "",
    },
  ];
  const spanStyle = "text-sm mr-2";
  return (
    <div id="projects" className=" md:flex md:flex-col md:items-center">
      <Header title="Projects" />

      {projects.slice(0, visibleProjects).map((project) => (
        <div className="mt-10 md:w-[80%]" key={project.id}>
          <div className="px-3 py-4 md:p-8  md:flex shadow-[0px_0px_3px_rgba(3,102,214,0.3)]">
            <div className="flex-1 hidden md:block">
              <Image src={project.img} className="object-cover w-full h-full" />
            </div>
            <div className="flex-1 md:ml-8">
              <h1 className="mb-2 md:mb-10 font-bold md:text-[1.5rem]">
                {project.title}
              </h1>
              <p className="mb-5 text-sm md:text-xl">{project.desc}</p>

              <div className="flex flex-wrap">
                {project.tools?.map((tool) => (
                  <span
                    key={tool}
                    className="text-sm p-1 md:px-2 md:py-1 mr-2 mb-2 border-2 border-[#92eac0] rounded-md "
                  >
                    {tool}
                  </span>
                ))}
              </div>

              <div className="mt-4">
                <button className=" shadow-[0px_0px_3px_rgba(3,102,214,0.3)] flex items-center bg-[#747fe0] text-white px-4 py-2 md:px-[14px] md:py-[10px] cursor-pointer rounded-md  mb-3">
                  <p className="hidden md:block"> Live Demo</p>
                  <BsBoxArrowUpRight className="text-lg text-white " />
                </button>
                <button className="shadow-[0px_0px_3px_rgba(3,102,214,0.3)] flex items-center bg-white text-[#747fe0]  px-4 py-2 md:px-[14px] md:py-[10px] cursor-pointer rounded-md border-[#747fe0]">
                  <BsGithub className=" text-[#747fe0] text-lg " />
                  <p className="hidden md:block">Source Code</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleClick}
        className="px-3 py-1 mt-10 text-sm uppercase duration-200 border-2 md:px-4 md:py-2 rounded-xl border-secondary hover:text-white hover:bg-secondary hover:duration-200 "
      >
        {visibleProjects == projects.length - 1 ? "Show more" : "Show less"}
      </button>
    </div>
  );
};

export default Projects;
