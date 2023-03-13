import React from "react";
import {
  frontEndTools,
  backendEndTools,
  adobesuiteTools,
  othersTools,
  mobileTools,
} from "../data/data";
import Header from "./Header";

const Skills = () => {
  return (
    <div id="skills" className="mt-12 mb-10">
      <Header title="Skills" />

      <div className="flex flex-col items-center gap-3 mt-10 md:grid md:grid-cols-2 md:gap-2 ">
        <div className="flex flex-col items-center border-2 md:border-0   flex-1 w-full p-2 h-[350px]">
          <h1 className="mb-10 text-lg font-bold tex md:text-2xl">
            Frontend Developement
          </h1>
          <div className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-10">
            {frontEndTools.map((tool) => (
              <section className="flex items-center" key={tool.id}>
                <div className="flex items-center justify-center">
                  <div className={`text-2xl md:text-4xl md:mr-3`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h2 className="hidden md:block text-md md:text-lg">
                      {tool.name}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-2 md:border-0  items-center flex-1 w-full p-2 h-[350px] ">
          <div>
            <h1 className="mb-10 text-lg font-bold md:text-2xl">
              Backend Developement
            </h1>
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-10">
            {backendEndTools.map((tool) => (
              <section className={tool.id} key={tool.id}>
                <div className="flex items-center">
                  <div className={`text-2xl md:text-4xl md:mr-3`}>
                    {tool.icon}
                  </div>
                  <div>
                    <h2 className="hidden md:block text-md md:text-lg">
                      {tool.name}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-2 md:border-0  items-center flex-1 w-full p-2 h-[350px] ">
          <h1 className="mb-10 text-lg font-bold md:text-2xl">Adobe Suites</h1>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-10">
            {adobesuiteTools.map((tool) => (
              <section className={tool.id} key={tool.id}>
                <div className="flex items-center">
                  <div className={`text-2xl md:text-4xl mr-3`}>{tool.icon}</div>
                  <div>
                    <h2 className="hidden md:block text-md md:text-lg">
                      {tool.name}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
        <div className="flex flex-col border-2 md:border-0  items-center flex-1 w-full p-2 h-[350px]">
          <h1 className="mb-10 text-lg font-bold md:text-2xl">
            Mobile App Development
          </h1>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-10">
            {mobileTools.map((tool) => (
              <section className={tool.id} key={tool.id}>
                <div className="flex items-center">
                  <div className={`text-2xl md:text-4xl mr-3`}>{tool.icon}</div>
                  <div>
                    <h2 className="hidden md:block text-md md:text-lg">
                      {tool.name}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>

        <div className="flex flex-col border-2 md:border-0  items-center flex-1 w-full p-2 h-[350px] ">
          <h1 className="mb-10 text-lg font-bold md:text-2xl">Others</h1>
          <div className="flex flex-wrap justify-center md:grid md:grid-cols-2 md:gap-y-5 md:gap-x-10">
            {othersTools.map((tool) => (
              <section className={tool.id} key={tool.id}>
                <div className="flex items-center">
                  <div className={`text-2xl md:text-4xl mr-3`}>{tool.icon}</div>
                  <div>
                    <h2 className="hidden md:block text-md md:text-lg">
                      {tool.name}
                    </h2>
                  </div>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
