'use client'
import React from 'react'
import { IoMdClose } from "react-icons/io";
import sections from "../src/assets/data/sections.json";
import { IoMenu } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";

export default function NavBar(props : {isMenuBarOpen: boolean, toggleMenuBar: () => void }) {

  type sectionType = {
    name: string,
    title: string
  }

  const handleClick = () => {
    props.toggleMenuBar();
  }

  return (
    <div className='flex flex-row justify-between p-3 gap-3 lg:gap-6 lg:border-b border-violet-300 '>
      <div className='bg-blue-400 w-10 h-10 flex items-center justify-center'>L</div>
      <div className='hidden lg:flex flex-row gap-32 bg-black items-center justify-end w-full text-2xl font-mono pr-5'>
        {sections.map((section: sectionType, key) => <div key={key}>{section.title}</div>)}
      </div>
      <div className='flex flex-row gap-4 items-center lg:pr-5'>
        <LuSunMoon className='text-xl lg:text-3xl'/>
        <IoMenu className='lg:hidden' size={30} onClick={handleClick} />
      </div>
      {props.isMenuBarOpen && (
        <div className='h-full bg-white text-black absolute lg:hidden right-0 w-52 md:w-2/5 p-3 gap-3 flex flex-col'>
          <div className='border-b-2 border-black p-2 flex justify-end w-full'>
            <IoMdClose onClick={handleClick} />
          </div>
          <div className='flex flex-col gap-2'>
            {sections.map((section: sectionType, key) => <div key={key}>{section.title}</div>)}
          </div>
        </div>
      )}
    </div>
  )
}
