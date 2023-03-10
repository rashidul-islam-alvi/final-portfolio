import React from "react";
import { BsFacebook, BsWhatsapp } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Header from "./Header";

const Contact = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center my-16 "
    >
      <Header title="Hire Me" />

      <div className="md:flex mt-10 justify-between md:w-[40vw]">
        <div className="flex flex-col items-center flex-1">
          <MdEmail className="mb-2 text-2xl" />
          <h2>rashidul537@gmail.com</h2>
        </div>
        <div className="w-full flex-1 h-[1px] bg-gray-500 my-5 md:hidden"></div>
        <div className="flex flex-col items-center flex-1">
          <BsWhatsapp className="mb-2 text-2xl" />
          <h2>01760709684</h2>
        </div>
        <div className="w-full flex-1 h-[1px] bg-gray-500 my-5  md:hidden"></div>
        <div className="flex flex-col items-center flex-1">
          <BsFacebook className="mb-2 text-2xl" />
          <h2>Rashidul Islam Alvi</h2>
        </div>
        <div className="w-full flex-1 h-[1px] bg-gray-500 my-5 md:hidden"></div>
      </div>
    </footer>
  );
};

export default Contact;
