"use client";
import React, { useState } from "react";
import Image from "next/image";

const About = () => {
  const [activeButton, setActiveButton] = useState<string>("Bio");

  const handleActiveButton = (event) => {
    const { name } = event.target;
    setActiveButton(name);
  };

  return (
    <div className="bg-zinc-950 text-white w-full h-fit">
      <h1 className="text-white font-poppins font-semibold text-4xl px-10 pt-5">
        About Me
      </h1>
      <div className="grid grid-cols-2 min-h-[350px] w-full">
        <div className="w-full h-full items-center justify-center flex">
          <div className="w-56 h-56 bg-white rounded-[3px] shadow-md"></div>
        </div>
        <div className="w-full flex flex-col p-3 gap-3">
          <div className="flex flex-row  h-fit w-fit font-poppins text-white gap-1">
            <button
              name="Bio"
              onClick={(e) => handleActiveButton(e)}
              className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${
                activeButton === "Bio" ? "bg-pink-800" : "bg-zinc-700"
              }`}
            >
              Bio
            </button>
            <button
              name="Education"
              onClick={(e) => handleActiveButton(e)}
              className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${
                activeButton === "Education" ? "bg-pink-800" : "bg-zinc-700"
              }`}
            >
              Education
            </button>
            <button
              name="Hobbies"
              onClick={(e) => handleActiveButton(e)}
              className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${
                activeButton === "Hobbies" ? "bg-pink-800" : "bg-zinc-700"
              }`}
            >
              Hobbies
            </button>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            {activeButton === "Bio" && (
              <div
                className={`w-full min-h-[220px] text-justify p-10 bg-blue text-lg font-poppins flex items-center justify-center translate-y-8 transition-all duration-500 ${
                  activeButton === "Bio" ? "animate-slide-in" : ""
                }`}
              >
                An enthusiastic and curious individual who enjoys solving
                problems, learning new things, and collaborating with others.
                Known for being detail-oriented and adaptable, always striving
                to improve and make a positive impact.
              </div>
            )}
            {activeButton === "Education" && (
              <div className="grid grid-cols-2 w-full min-h-[220px]">
                <Image
                  src="/icons/school.png"
                  alt="School image"
                  width={80}
                  height={80}
                  className={`justify-self-center self-end ${
                    activeButton === "Education" ? "animate-slide-in" : ""
                  }`}
                />
                <Image
                  src="/icons/graduation.png"
                  alt="School image"
                  width={90}
                  height={90}
                  className={`justify-self-center self-end ${
                    activeButton === "Education" ? "animate-slide-in" : ""
                  }`}
                />
                <p
                  className={`font-mono flex flex-col text-sm h-[60px] px-8 text-center self-end ${
                    activeButton === "Education" ? "animate-slide-in" : ""
                  }`}
                >
                  Schooling Period
                  <span className="font-bold">
                    Sainik School Amaravathinagar
                  </span>
                  <span>{"( 2013 - 2020 )"} </span>
                </p>
                <p
                  className={`font-mono flex flex-col text-sm h-[60px] px-8 text-center self-end ${
                    activeButton === "Education" ? "animate-slide-in" : ""
                  }`}
                >
                  B.E - Computer Science Engineeing
                  <span className="font-bold">
                    Anna University - Coimbatore
                  </span>
                  <span>{"( 2013 - 2020 )"} </span>
                </p>
              </div>
            )}
            {activeButton === "Hobbies" && (
              <div className="text-white flex flex-col min-h-[220px] w-full items-center justify-center">
                <div className="min-w-max min-h-max relative">
                  <div
                    className="flex flex-col gap-6 font-poppins text-2xl animate-fade-in-out"
                    style={{ textAlignLast: "justify" }}
                  >
                    <div>Video Editing - Da vinci Resolve</div>
                    <div>Logo Designing - Vector Graphics</div>
                    <div>Captain - University Volleyball Team</div>
                  </div>
                  <div
                    className="flex flex-col gap-6 font-poppins text-2xl animate-fade-in-out absolute opacity-0 inset-0 w-max"
                    style={{ animationDelay: "4s", textAlignLast: "justify" }}
                  >
                    <div>Video Editing - Da vinci Resolve 2</div>
                    <div>Logo Designing - Vector Graphics 2</div>
                    <div>Captain - University Volleyball Team</div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
