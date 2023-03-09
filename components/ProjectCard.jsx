import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrow90DegUp, BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const spanStyle = "text-sm mr-2";

  return (
    <div className=" w-full md:w-[70%] px-2 md:px-0 flex gap-x-5 bg-[#0B1C31]  mt-10 rounded-md text-gray-300">
      {/* <div className="flex-1 hidden w-full md:flex">
        <Image src={project.img} alt="project" className="object-cover" />
      </div> */}
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
          <Link href="https://final-portfolio-bv61-git-main-rashidul-islam-alvi.vercel.app/">
            <BsBoxArrowUpRight className="curson-pointer" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
