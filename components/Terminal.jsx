import React from "react";

const Terminal = () => {
  return (
    <div className="">
      <div className="bg-[#e4e3e5] p-2 rounded-t-lg flex">
        <div className="w-[12px] h-[12px] bg-[#f96256] rounded-full border-[#f65549] "></div>
        <div className="w-[12px] h-[12px] bg-[#fdbc3d] rounded-full border-[#ffb524] ml-[9px] "></div>
        <div className="w-[12px] h-[12px] bg-[#33c948] rounded-full border-[#2dbb41] ml-[9px] "></div>
      </div>

      <div className="bg-[#5a5d7a] px-2 text-lg rounded-b-lg shadow-gray-500/50 shadow-lg ">
        <div className="mx-[35px]">
          <div className="mb-[25px] pt-[35px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> my. currentLocation */}
              </p>
              <p className="text-[#e7d184]"> "Dhaka Cantonment"</p>
            </div>
          </div>

          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> my. contactInfo */}
              </p>
              <p className="text-[#e7d184]">
                [ "rashidul637@gmail.com", "facebook", "whatsapp" ]
              </p>
            </div>
          </div>
          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> my. resume */}
              </p>
              <p className="text-[#e7d184]"> "resume.pdf"</p>
            </div>
          </div>
          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> my. education */}
              </p>
              <p className="text-[#e7d184]">
                "B.sc in Computer Science & Engineering - Northern University
                Bangladesh"
              </p>
            </div>
          </div>
          <div className="mb-[25px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> my. skills */}
              </p>
              <p className="text-[#e7d184]">
                ["NextJs", "ReactJs", "Tailwind", "Styled Component", "Sass" ,
                "GraphQL", "NodeJs", "ExpressJs", "Python", "Java", "C", "C++" ,
                "C#", "Dart", "Flutter"]
              </p>
            </div>
          </div>
          <div className="pb-[35px]">
            <div>
              <p className="flex items-center text-[#f7f7f7]">
                {/* <BiChevronRight /> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
