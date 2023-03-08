import React, { useState } from "react";
import Header from "./Header";
import ProjectCard from "./ProjectCard";
import portfolioPicture from "../assests/portfolio.png";
import prokemonProject from "../assests/pokemon.png";
import calculatorProject from "../assests/calculator.png";
import shikhbeNakiProject from "../assests/shikhbeNaki.png";
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
    },
    {
      id: 4,
      title: "Bill and Tip Calculator",
      desc: "A simple calculator to calculate the bill and tip by per person.",
      img: calculatorProject,
      tools: ["Vanilla JS", "CSS", "HTML", "JavaScript"],
    },
  ];
  return (
    <div
      id="projects"
      className="text-white md:flex md:flex-col md:items-center"
    >
      <Header title="Projects" />

      {projects.slice(0, visibleProjects).map((project) => (
        <ProjectCard key={project.id} project={project} />
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
