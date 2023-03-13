import React from "react";

import { BiChevronRight } from "react-icons/bi";

const Terminal = () => {
  return (
    <div className="">
      <div className="flex p-2 rounded-t-lg">
        <div className="w-[12px] h-[12px] bg-[#f96256] rounded-full border-[#f65549] "></div>
        <div className="w-[12px] h-[12px] bg-[#fdbc3d] rounded-full border-[#ffb524] ml-[9px] "></div>
        <div className="w-[12px] h-[12px] bg-[#33c948] rounded-full border-[#2dbb41] ml-[9px] "></div>
      </div>

      <div className="bg-[#5a5d7a] text-xs px-2 md:text-lg rounded-b-lg shadow-gray-500/50 shadow-lg ">
        <div className="px-[15px] md:px-[35px]">
          <div className="mb-[25px] pt-[35px] ">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                <BiChevronRight /> about.me
              </p>
              <p className="text-[#e7d184]">
                I am a front end engineer with JavaScript frameworks
                problem-solving skills and proven experience in creating and
                designing websites in a test-driven environment with clean code.
              </p>
            </div>
          </div>

          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                <BiChevronRight /> my. education
              </p>
              <p className="text-[#e7d184]">
                B.sc in Computer Science & Engineering - Northern University
                Bangladesh
              </p>
            </div>
          </div>

          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                <BiChevronRight /> my. competencies
              </p>
              <p className="text-[#e7d184]">
                [ "teamwork", "problem-solving", "multi-tasking",
                "analytical-thinking" , "communication" , "fast-learn"]
              </p>
            </div>
          </div>

          <div className="pb-[35px]">
            <div>
              <span className="flex items-center text-[#f7f7f7]  ">
                <BiChevronRight />
                <div className="w-2 h-5 ml-2 bg-gray-500 animate-ping"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
