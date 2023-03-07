import React, { useState } from "react";

const NavBar = () => {
  const [currentActive, setCurrentActive] = useState("");

  const navItems = ["skills", "projects", "contact"];
  console.log(currentActive);
  return (
    <div className="h-[10vh] flex flex-row-reverse px-4 py-4 sticky top-0">
      {
        <ul className="flex justify-end items-center text-xl md:text-3xl md:mx-auto w-1/2">
          {navItems?.map((item, index) => (
            <li
              id={`#${item == currentActive ? currentActive : ""}`}
              key={index}
              onClick={() => setCurrentActive(item)}
              className={` cursor-pointer ${
                index == 0 ? "" : "md:ml-20 ml-5"
              }  ${currentActive == item ? "text-[#FDCC49]" : "text-white"}`}
            >
              {item}
            </li>
          ))}
        </ul>
      }
    </div>
  );
};

export default NavBar;
