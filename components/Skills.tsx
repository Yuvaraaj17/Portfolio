"use client";
import React from "react";
import { PlayingCard } from "./PlayingCard";


const Skills = () => {

  return (
    <div className="flex bg-red-300">
      <PlayingCard />
    </div>
    // <div className="flex flex-col gap-3 bg-zinc-950">
    //   <h1 className="text-white font-poppins font-semibold text-4xl px-10 pt-5">
    //     My Areas of Expertise
    //   </h1>
    //   <div className="w-full min-h-[300px] flex items-center px-4 bg-zinc-950">
    //     <div className="h-max w-full flex flex-col gap-3 py-5">
    //       <div
    //         className={`flex ${
    //           style ? "gap-x-9 gap-y-4" : "gap-x-20 gap-y-10"
    //         } flex-wrap relative`}
    //       >
    //         {style
    //           ? mySkills.map((element, key) => (
    //               <div
    //                 key={key}
    //                 onClick={() => handleClick(element)}
    //                 className="border hover:cursor-pointer hover:scale-95 border-black shadow-md gap-3 flex flex-row min-w-24 w-fit h-fit py-1 text-slate-400 font-poppins bg-zinc-800 rounded-[3px] items-center justify-between px-3 focus:outline-none"
    //               >
    //                 <div>{element.name}</div>
    //                 <div>{element.icon(20)}</div>
    //               </div>
    //             ))
    //           : mySkills.map((element, key) => (
    //               <div
    //                 key={key}
    //                 className="rounded-md hover:bg-zinc-900 transition-all hover:scale-105 duration-300 ease-in-out hover:shadow-md p-2 hover:cursor-pointer focus:outline-none"
    //                 onClick={() => handleClick(element)}
    //               >
    //                 {element.icon(75)}
    //               </div>
    //             ))}
    //         {style && (
    //           <IoIosCloseCircle
    //             color="white"
    //             className="hover:cursor-pointer absolute right-0"
    //             size={30}
    //             onClick={() => setStyle(false)}
    //           />
    //         )}
    //       </div>
    //       {style && (
    //         <div className="flex flex-row w-full h-[330px]">
    //           <div className="w-1/2 border-r-2 border-b border-t border-white flex items-center justify-center">
    //             {activeElement.icon(75)}
    //           </div>
    //           <div className="font-poppins px-8 font-normal tracking-widest text-[15px] w-1/2 border-t border-l-2 border-b border-white text-white flex items-center justify-center">
    //             {activeElement.description}
    //           </div>
    //         </div>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Skills;
