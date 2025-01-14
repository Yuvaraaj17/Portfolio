'use client'
import React, { useState } from "react";

const About = () => {
    const [activeButton,setActiveButton] = useState<string>("Bio")

    const handleActiveButton = (event)=>{
        const { name } = event.target
        setActiveButton(name)
    }

  return (
    <div className="bg-zinc-950 text-white w-full h-fit">
      <h1 className="text-white font-poppins font-semibold text-4xl px-10 pt-5">
        About Me
      </h1>
      <div className="grid grid-cols-2 h-[350px] w-full bg-zinc-800">
        <div className="w-full h-full items-center justify-center flex bg-slate-400">
          <div className="w-56 h-56 bg-white rounded-[3px] shadow-md"></div>
        </div>
        <div className="w-full h-full flex flex-col  p-3 gap-3">
          <div className="flex flex-row  h-fit w-fit font-poppins text-white gap-1">
            <button name="Bio" onClick={(e)=>handleActiveButton(e)} className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${ activeButton === "Bio" ? "bg-pink-800" : "bg-zinc-700" }`}>Bio</button>
            <button name="Education" onClick={(e)=>handleActiveButton(e)} className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${ activeButton === "Education" ? "bg-pink-800" : "bg-zinc-700" }`}>Education</button>
            <button name="Accomplishments" onClick={(e)=>handleActiveButton(e)} className={`px-5 py-2 rounded-[3px] transtion-all duration-300 ease-in ${ activeButton === "Accomplishments" ? "bg-pink-800" : "bg-zinc-700" }`}>Accomplishments</button>
          </div>
          <div className="w-full h-full bg-blue-200">

          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default About;
