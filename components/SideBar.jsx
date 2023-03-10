import Link from "next/link";
import React from "react";
import {
  BsGithub,
  BsWhatsapp,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
} from "react-icons/bs";
const SideBar = () => {
  // const icons = [<BsFacebook />, <BsGithub />, <BsWhatsapp />];

  return (
    <div className="hidden fixed left-0 h-full text-black  border-white w-[10%] md:flex flex-col items-center justify-center">
      <ul>
        {/* {icons.map((icon, i) => (
          <li
            key={i}
            className={`text-3xl ${
              i == 0 ? "" : "mt-[4.5rem]"
            } cursor-pointer hover:text-[#e7d184] duration-200 transition-all
             `}
          >
            {icon}
          </li>
        ))} */}

        <li className="text-3xl transition-all duration-200 cursor-pointer hover:text-red">
          <Link
            href="https://www.instagram.com/rashidulislamalvi/"
            target="_blank"
          >
            <BsInstagram />
          </Link>
        </li>
        <li className="text-3xl mt-[4.5rem] cursor-pointer hover:text-[#0072b1] duration-200 transition-all">
          <Link href="">
            <BsLinkedin />
          </Link>
        </li>
        <li className="text-3xl mt-[4.5rem] cursor-pointer hover:text-[#3b5998] duration-200 transition-all">
          <Link
            href="https://www.facebook.com/hellomynameistroublexD"
            target="_blank"
          >
            <BsFacebook />
          </Link>
        </li>
      </ul>{" "}
      <div className="w-[1px] h-[220px] bg-secondary mt-10"></div>
    </div>
  );
};

export default SideBar;
