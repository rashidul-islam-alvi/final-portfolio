import Image from "next/image";
import React from "react";
import Terminal from "./Terminal";
import profilePic from "../assests/profile.jpg";
import { BsGithub, BsWhatsapp, BsFacebook } from "react-icons/bs";

const About = () => {
  const icons = [<BsFacebook />, <BsGithub />, <BsWhatsapp />];
  return (
    <div className="flex flex-col md:flex-row md:h-[90vh] text-white justify-between items-center pt-10 md:pt-0 ">
      <div className="flex flex-col items-center justify-center flex-1 mb-10 ">
        <div
        //   className="relative z-0 before:absolute before:-top-1 md:before:-top-7 md:before:-left-20 before:rounded-full
        //     before:w-full before:max-w-[300px] md:before:max-w-[600px] before:h-full before:border-2 before:border-gray before:z-[-1]"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full max-w-[200px] mb-10 md:max-w-[300px]"
          />
        </div>
        <p className="text-xs ">Hello, i'm</p>
        <h2 className="text-xl text-[#e7d184] md:text-2xl">
          Md. Rashidul Islam
        </h2>
        <p className="text-xs ">Front End Engineer</p>

        <div className="py-3 md:hidden">
          <ul className="flex">
            {icons.map((icon, i) => (
              <li
                key={i}
                className={`text-3xl ${
                  i == 0 ? "" : "ml-5"
                } cursor-pointer hover:text-[#e7d184] duration-200 transition-all
             `}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-center flex-1 ">
        <Terminal />
      </div>
    </div>
  );
};

export default About;
