import React, { useContext } from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";

export const ContactCard = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="lg:flex w-1/2 items-center justify-center hidden">
      <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          <Image alt="photo" src="/photo.jpg" width={224} height={224} className="col-span-3 rounded-lg shadow-lg" />
        <a
          href="https://www.linkedin.com/in/yuvaraaj-s-30642b21b/"
          className="hover:cursor-pointer"
        >
          <FaLinkedin size={30} color={theme === 'dark' ? 'white' : '#451a03'} />
        </a>
        <a href="https://github.com/Yuvaraaj17">
          <FaGithub size={30} color={theme === 'dark' ? 'white' : '#451a03'} />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=yuvaraaj5910@gmail.com"
          target="_blank"
        >
          <SiGmail size={30} color={theme === 'dark' ? 'white' : '#451a03'} />
        </a>
        <a href="/Resume.pdf" download="Resume.pdf" className={`col-span-3 bg-inherit rounded-[3px] -shadow-md text-center text-xl font-poppins font-medium py-3 w-full transition-all duration-300 ease-in-out border ${theme === 'dark' ? 'text-pink-500 border-pink-500 hover:bg-pink-500 hover:text-white' : 'text-amber-950 border-amber-950 hover:bg-amber-950 hover:text-[#e0d1c3]'}`}>Download My CV</a>
      </div>
    </div>
  );
};
