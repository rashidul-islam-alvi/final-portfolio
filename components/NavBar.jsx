import Link from "next/link";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  // const [currentActive, setCurrentActive] = useState("");
  // const [clientWindowHeight, setClientWindowHeight] = useState("");

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // });

  // const handleScroll = () => {
  //   setClientWindowHeight(window.scrollY);
  // };

  // const bgColor = clientWindowHeight > 0 ? "bg-red" : "";
  // const navItems = ["skills", "projects", "contact"];

  return (
    <div className={`h-[10vh] flex flex-row-reverse p-4 sticky top-0`}>
      {
        <ul className="flex justify-end items-center text-xl md:text-3xl md:mx-auto w-[70%]">
          {/* {navItems?.map((item, index) => (
            <Link
              href={`/#${item == currentActive ? currentActive : ""}`}
              key={index}
              onClick={() => setCurrentActive(item)}
              className={` cursor-pointer ${
                index == 0 ? "" : "md:ml-20 ml-5"
              } text-white hover:text-[#FDCC49]`}
            >
              {item}
            </Link>
          ))} */}

          <Link
            href="#skills"
            className={` cursor-pointer  text-white hover:text-[#FDCC49] ml-5 md:ml-20`}
          >
            skills
          </Link>
          <Link
            href="#projects"
            className={` cursor-pointer  text-white hover:text-[#FDCC49] ml-5 md:ml-20`}
          >
            projects
          </Link>
          <Link
            href="#contact"
            className={` cursor-pointer  text-white hover:text-[#FDCC49] ml-5 md:ml-20`}
          >
            Contact
          </Link>
        </ul>
      }
    </div>
  );
};

export default NavBar;
