import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import Image from "next/image";

export const ContactCard = () => {
  return (
    <div className="flex w-1/2 items-center justify-center">
      <div className="grid grid-cols-3 gap-4 items-center justify-items-center">
          <Image alt="photo" src="/photo.jpg" width={224} height={224} className="col-span-3 rounded-lg shadow-lg" />
        <a
          href="https://www.linkedin.com/in/yuvaraaj-s-30642b21b/"
          className="hover:cursor-pointer"
        >
          <FaLinkedin size={30} color="white" />
        </a>
        <a href="https://github.com/Yuvaraaj17">
          <FaGithub size={30} color="white" />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/#inbox?compose=yuvaraaj5910@gmail.com"
          target="_blank"
        >
          <SiGmail size={30} color="white" />
        </a>
      </div>
    </div>
  );
};
