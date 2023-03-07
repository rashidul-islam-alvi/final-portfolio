import React, { useEffect, useState } from "react";
import { RxDoubleArrowUp } from "react-icons/rx";

const GoToTop = () => {
  const [clientWindowHeight, setClientWindowHeight] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };

  const isBrowser = () => typeof window !== "undefined";
  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const display = clientWindowHeight > 0 ? "flex flex-col-reverse" : "hidden";

  return (
    <div
      className={`fixed right-0 ${display} items-center  h-[70vh] w-[5%] animate-bounce pr-5 md:p-0`}
    >
      <div onClick={scrollToTop}>
        <RxDoubleArrowUp className="text-lg text-white cursor-pointer md:text-4xl " />
        <RxDoubleArrowUp className="text-lg text-white cursor-pointer md:text-4xl " />
      </div>
    </div>
  );
};

export default GoToTop;
