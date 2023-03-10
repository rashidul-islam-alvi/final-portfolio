import React, { useState } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import portfolioPicture from "../assests/portfolio.png";
import prokemonProject from "../assests/pokemon.png";
import calculatorProject from "../assests/calculator.png";
import shikhbeNakiProject from "../assests/shikhbeNaki.png";
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
    <div
      id="projects"
      className="text-white md:flex md:flex-col md:items-center"
    >
      <Header title="Projects" />

      {projects.slice(0, visibleProjects).map((project) => (
        <div
          key={project.id}
          className=" w-full md:w-[70%] px-2 md:px-0 flex gap-x-5 bg-[#0B1C31]  mt-10 rounded-md text-gray-300"
        >
          <div className="flex-1 hidden w-full md:flex">
            <Image src={project.img} alt="project" className="object-cover" />
          </div>
          <div className="flex-1 p-3 md:flex md:flex-col ">
            <h3 className="mb-5 text-xl text-secondary">{project.title}</h3>
            <p className="mb-5 text-sm max-w-[80%] md:bg-black md:py-3 px-1 text-white ">
              {project.desc}
            </p>
            <div className="flex flex-wrap mb-5 gap-y-2">
              {project.tools?.map((tool) => (
                <span className={spanStyle} key={tool}>
                  {tool}
                </span>
              ))}
            </div>

            <div className="flex text-2xl">
              <BsGithub className="mr-3 cursor-pointer " />
              <Link target="_blank" href={project.link}>
                <BsBoxArrowUpRight className="curson-pointer" />
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={handleClick}
        className="px-3 py-1 mt-10 text-sm text-gray-200 uppercase duration-200 border-2 md:px-4 md:py-2 rounded-xl border-secondary hover:text-black hover:bg-secondary hover:duration-200 "
      >
        {visibleProjects == projects.length - 1 ? "Show more" : "Show less"}
      </button>
    </div>
  );
};

export default Projects;
