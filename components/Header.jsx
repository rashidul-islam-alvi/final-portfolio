import React from "react";

const Header = ({ title }) => {
  return (
    <div>
      <div className="flex items-center text-[#5a5d7a] justify-center">
        <div className="bg-secondary w-[120px] md:w-[220px] h-[1px] mr-3"></div>
        <h2 className="relative text-xl text-center md:text-3xl ">{title}</h2>
        <div className="bg-secondary w-[120px] md:w-[220px] h-[1px] ml-3"></div>
      </div>
    </div>
  );
};

export default Header;
