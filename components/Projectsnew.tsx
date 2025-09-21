"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { IoIosArrowBack, IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {


  const projectDetails = [
    {
      name: "Door Alert System with Telegram Bot"
    },
    {
      name: "AI Enhanced Placement Module"
    },
    {
      name: "Scripting and Automation"
    },
    {
      name: "Traffic Sign Recognition using YOLOv8"
    },
    {
      name: "Demo Placeholder"
    }
  ]


  const [cardNum, setCardNum] = useState<number>(0);
  const mainRef = useRef(null);
  const rightRef = useRef(null);
  const parentRef = useRef(null);
  const leftRef = useRef(null);
  const emptyLeft = useRef(null);
  const emptyRight = useRef(null);

  const nextCard = () => {
    if (cardNum < 5) {
      setCardNum(cardNum + 1);
    } else {
      setCardNum(0);
    }
    const temp = rightRef.current.className;
    rightRef.current.className = mainRef.current.className;
    mainRef.current.className = leftRef.current.className;
    leftRef.current.className = emptyLeft.current.className;
    emptyLeft.current.className = emptyRight.current.className;
    emptyRight.current.className = temp;
  };

  const prevCard = () => {
    if (cardNum > 0) {
      setCardNum(cardNum - 1);
    } else {
      setCardNum(5);
    }
    const temp = leftRef.current.className;
    leftRef.current.className = mainRef.current.className;
    mainRef.current.className = rightRef.current.className;
    rightRef.current.className = emptyRight.current.className;
    emptyRight.current.className = emptyLeft.current.className;
    emptyLeft.current.className = temp;
  };

  return (
    <div className="flex flex-col gap-3 bg-zinc-950">
      <h1 className="text-white font-poppins font-semibold text-4xl px-10 pt-6 lg:text-6xl text-center md:text-start">
        My Work
      </h1>
      <div className="w-full h-full flex items-center">
        <div
          ref={parentRef}
          className="flex justify-center w-full bg-zinc-950 h-[350px] md:h-[450px] items-center relative"
        >
          <div
            ref={leftRef}
            className={
              "md:w-72 md:h-44 flex items-center justify-center absolute transition-all duration-[400ms] ease-out -translate-x-[400px] lg:-translate-x-[550px] scale-[0.75] lg:scale-[1.2] blur-[2px]"
            }
          >
            <div className="w-full h-full relative">
              <Image src={"/images/Door_Alert_System.jpg"} alt="Door-Alert-System-with-Iot" fill className="rounded-sm"></Image>
              <Link className="hidden w-fit absolute text-white font-ubuntu_mono bottom-0 right-0 text-[10px] items-center md:flex hover:underline underline-offset-2 pr-2 pb-1 tracking-wide" href={"https://github.com/Yuvaraaj17/placement"}><IoIosArrowRoundForward size={14}></IoIosArrowRoundForward></Link>
            </div>
          </div>
          <div
            ref={mainRef}
            className="p-2 w-72 h-44 flex flex-col gap-2 items-center justify-center transition-all duration-[400ms] ease-out scale-[1.6] lg:scale-[2.5] shadow-md translate-z-96 rounded-sm"
          >
            <div className="w-full h-full relative group overflow-hidden rounded-sm">
              {/* Image */}
              <Image
                src="/images/Placement_Module.jpg"
                alt="AI-Enhanced-Placement-Module"
                fill
                className="rounded-sm object-cover"
              />

              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black/40 
               transform translate-y-full 
               group-hover:translate-y-0 
               transition-transform duration-500 ease-in-out 
               rounded-sm pointer-events-none
               flex items-center justify-center"
              >
                {/* Redirect Icon */}
                <Link
                  href="https://github.com/Yuvaraaj17/placement"
                  target="_blank"
                  className="pointer-events-auto text-white transform 
                 opacity-0 translate-y-4
                 group-hover:opacity-100 group-hover:translate-y-0 
                 transition-all duration-500 ease-out"
                >
                  <IoIosArrowRoundForward size={40} />
                </Link>
              </div>
            </div>

          </div>
          <div
            ref={rightRef}
            className={`md:w-72 md:h-44 flex items-center justify-center absolute transition-all duration-[400ms] ease-out translate-x-[400px] lg:translate-x-[600px] scale-[0.73] lg:scale-[1.2] blur-[2px] -translate-z-96`}
          >
            <div className="w-full h-full relative">
              <Image src={"/images/Placement_Module.jpg"} alt="AI-Enhanced-Placement-Module" fill className="rounded-sm"></Image>
              <Link className="hidden w-fit absolute text-white font-ubuntu_mono bottom-0 right-0 text-[10px] items-center md:flex hover:underline underline-offset-2 pr-2 pb-1" href={"https://github.com/Yuvaraaj17/placement"}>{projectDetails[2].name} <IoIosArrowRoundForward size={14}></IoIosArrowRoundForward></Link>
            </div>
          </div>
          <div
            className="opacity-0 absolute scale-[0.3] h-44 w-72 transiiton-all duration-50 ease-out -translate-x-[400px] lg:-translate-x-[550px]"
            ref={emptyLeft}
          >
            <div className="w-full h-full relative">
              <Image src={"/images/Placement_Module.jpg"} alt="AI-Enhanced-Placement-Module" fill className="rounded-sm"></Image>
              <Link className="hidden w-fit absolute text-white font-ubuntu_mono bottom-0 right-0 text-[10px] items-center md:flex hover:underline underline-offset-2 pr-2 pb-1" href={"https://github.com/Yuvaraaj17/placement"}>{projectDetails[0].name} <IoIosArrowRoundForward size={14}></IoIosArrowRoundForward></Link>
            </div>
          </div>
          <div
            className="opacity-0 absolute scale-[0.3] h-44 w-72 transiiton-all duration-50 ease-out translate-x-[400px] lg:translate-x-[00px]"
            ref={emptyRight}
          >
            <div className="w-full h-full relative">
              <Image src={"/images/Placement_Module.jpg"} alt="AI-Enhanced-Placement-Module" fill className="rounded-sm"></Image>
              <Link className="hidden w-fit absolute text-white font-ubuntu_mono bottom-0 right-0 text-[10px] items-center md:flex hover:underline underline-offset-2 pr-2 pb-1" href={"https://github.com/Yuvaraaj17/placement"}>{projectDetails[0].name} <IoIosArrowRoundForward size={14}></IoIosArrowRoundForward></Link>
            </div>
          </div>
          <button
            onClick={nextCard}
            className="absolute left-[20px] md:left-[200px] flex"
          >
            <IoIosArrowBack size={45} color="white" />
          </button>
          <button
            onClick={prevCard}
            className="absolute right-[20px] md:right-[200px] flex"
          >
            <IoIosArrowForward size={45} color="white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
