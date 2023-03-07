import React from "react";
import { BsGithub, BsWhatsapp, BsFacebook } from "react-icons/bs";
const SideBar = () => {
  const icons = [<BsFacebook />, <BsGithub />, <BsWhatsapp />];

  return (
    <div className="hidden fixed left-0 h-full text-white  border-white w-[10%] md:flex flex-col items-center justify-center">
      <ul>
        {icons.map((icon, i) => (
          <li
            key={i}
            className={`text-3xl ${
              i == 0 ? "" : "mt-[4.5rem]"
            } cursor-pointer hover:text-[#e7d184] duration-200 transition-all
             `}
          >
            {icon}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
