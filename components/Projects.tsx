"use client";
import React, { useRef, useState } from "react";

const Projects = () => {

  var index = 1

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
      <h1 className="text-white font-poppins font-semibold text-4xl px-10 pt-6">
        My Work
      </h1>
      <div className="w-full h-full flex items-center">
        <div
          ref={parentRef}
          className="flex justify-center w-full bg-zinc-950 h-[450px] items-center relative"
        >
          <div
            ref={leftRef}
            className={
              "w-72 h-44 flex items-center justify-center bg-red-600 absolute transition-all duration-[400ms] ease-out -translate-x-[400px] scale-[0.73] blur-[2px]"
            }
          >
            {projectDetails[0].name}
          </div>
          <div
            ref={mainRef}
            className={`p-2 w-72 h-44 flex flex-col gap-2 items-center justify-center bg-red-600 transition-all duration-[400ms] ease-out scale-[1.6] shadow-md translate-z-96`}
          >
            <div className="w-full h-full bg-white relative">
              <div className="w-fit absolute bg-slate-300 bottom-0 right-0 text-[10px] items-center flex">{projectDetails[1].name}</div>
            </div>            
          </div>
          <div
            ref={rightRef}
            className={`w-72 h-44 flex items-center justify-center bg-red-600 absolute transition-all duration-[400ms] ease-out translate-x-[400px] scale-[0.73] blur-[2px] -translate-z-96`}
          >
            {projectDetails[2].name}
          </div>
          <div
            className="opacity-0 absolute scale-[0.3] h-44 w-72 transiiton-all duration-50 ease-out -translate-x-[400px]"
            ref={emptyLeft}
          >{projectDetails[3].name}</div>
          <div
            className="opacity-0 absolute scale-[0.3] h-44 w-72 transiiton-all duration-50 ease-out translate-x-[400px]"
            ref={emptyRight}
          >{projectDetails[4].name}</div>
          <button
            onClick={nextCard}
            className="absolute bg-pink-500 rounded-sm shadow-md px-2 py-1 left-[250px] flex"
          >
            click
          </button>
          <button
            onClick={prevCard}
            className="absolute bg-pink-500 rounded-sm shadow-md px-2 py-1 right-[250px] flex"
          >
            click
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
