import Image from "next/image";
import React from "react";
import Terminal from "./Terminal";
import profilePic from "../assests/profile.jpg";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row md:h-[90vh] text-white justify-between items-center mt-10">
      <div className=" flex-1 flex flex-col items-center justify-center ">
        <div
        //   className="relative z-0 before:absolute before:-top-1 md:before:-top-7 md:before:-left-20 before:rounded-full
        //     before:w-full before:max-w-[300px] md:before:max-w-[600px] before:h-full before:border-2 before:border-gray before:z-[-1]"
        >
          <Image
            src={profilePic}
            alt="Profile Picture"
            className="rounded-full mb-10 md:max-w-[400px]"
          />
        </div>
        <p className="text-xs">Hello, i'm</p>
        <h2 className="text-2xl">Md. Rashidul Islam</h2>
        <p className="text-xs">Front End Engineer</p>
      </div>
      <div className=" flex-1  flex justify-center items-center">
        <Terminal />
      </div>
    </div>
  );
};

export default About;
