"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";

const About = () => {
  const [activeButton, setActiveButton] = useState<string>("Education");
  const { theme } = useContext(ThemeContext)

  const handleActiveButton = (event) => {
    const { name } = event.target;
    setActiveButton(name);
  };

  return (
    <div className={` ${theme === 'dark' ? 'bg-zinc-950' : 'bg-[#f5e7d9]'} flex flex-col items-center justify-center gap-7`}>
      <h1 className={` ${theme === 'dark' ? 'text-white' : 'text-amber-950'} flex justify-center md:justify-start  font-poppins font-semibold text-4xl lg:text-6xl px-5 md:w-full`}>About Me</h1>
      <div className="flex  flex-col md:flex-row gap-5 md:w-full">
        <div className="flex md:w-1/2 justify-center items-center">

          <div className="w-56 h-56 lg:w-64 lg:h-64 "><Image src="/photo.jpg" alt="profile" width={500} height={500} className="w-full h-full rounded-lg"/></div>
        </div>
        <div className="flex flex-col font-poppins lg:text-xl lg:gap-10 gap-5 lg:w-1/2">
          <div className="flex flex-row lg:justify-start justify-center gap-7">
            <button
              name="Education"
              onClick={(e) => handleActiveButton(e)}
              className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${activeButton === "Education" ? "bg-pink-800" : "bg-zinc-700"
                }`}
            >
              Education
            </button>
            <button
              name="Hobbies"
              onClick={(e) => handleActiveButton(e)}
              className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${activeButton === "Hobbies" ? "bg-pink-800" : "bg-zinc-700"
                }`}
            >
              Hobbies
            </button>
          </div>
          <div className={` ${theme === 'dark' ? 'text-white' : 'text-amber-900'} flex flex-col h-[400px] w-full`}>
            {activeButton === "Education" && (
              <div className="flex flex-col gap-6 md:gap-4 lg:flex-row w-full lg:items-end">
                <div className="flex flex-col items-center justify-center w-full  gap-4">
                  <Image
                    src="/icons/school.png"
                    alt="School image"
                    width={80}
                    height={80}
                    className="lg:w-32"
                  />
                  <p className="flex flex-col justify-center items-center">
                    Schooling Period
                    <span className="font-bold">
                      Sainik School Amaravathinagar
                    </span>
                    <span>{"( 2013 - 2020 )"} </span>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full  gap-4">
                  <Image
                    src="/icons/graduation.png"
                    alt="School image"
                    width={90}
                    height={90}
                    className="lg:w-36"
                  />

                  <p className="flex flex-col justify-center items-center">
                    B.E - Computer Science Engineeing
                    <span className="font-bold">
                      Anna University - Coimbatore
                    </span>
                    <span>{"( 2020 - 2024 )"} </span>
                  </p>

                </div>
              </div>
            )}
            {activeButton === "Hobbies" && (
              <div className="flex flex-col justify-center items-center gap-8 text-3xl h-full font-poppins">
                <div>Video Editing</div>
                <div>Logo Designing</div>
                <div>Origami</div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  )
}

export default About;
