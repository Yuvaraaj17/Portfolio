'use client'
import React, { useContext } from 'react'
import { IoMdClose } from "react-icons/io";
import sections from "../src/assets/data/sections.json";
import { IoMenu } from "react-icons/io5";
import { LuSunMoon } from "react-icons/lu";
import { ThemeContext } from '../context/ThemeContext';

export default function NavBar(props : {isMenuBarOpen: boolean, toggleMenuBar: () => void }) {

  type sectionType = {
    name: string,
    title: string
  }

  const handleClick = () => {
    props.toggleMenuBar();
  }

  const { theme , setTheme } = useContext(ThemeContext);

  return (
    <div className='flex flex-row justify-between p-3 gap-3 lg:gap-6 border-b-2 border-amber-600'>
      <div className='bg-blue-400 w-10 h-10 flex items-center justify-center'>L {theme}</div>
      <div className={`${theme === 'dark' ? 'text-white' : 'text-amber-950'} hidden lg:flex flex-row gap-32 items-center font-bold justify-end w-full text-2xl font-mono pr-5 hover:cursor-pointer`}>
        {sections.map((section: sectionType, key) => <div key={key} className='hover:text-amber-500 transition-all ease-in-out text-3xl'>{section.title}</div>)}
      </div>
      <div className='flex flex-row gap-4 items-center lg:pr-5'>
        <LuSunMoon className={`${theme === 'dark' ? 'text-white' : 'text-amber-600'} text-xl  lg:text-3xl`} onClick={()=>setTheme( theme === 'dark' ? 'light' : 'dark')}/>
        <IoMenu className={`${theme === 'dark' ? 'text-white' : 'text-amber-600'} lg:hidden`} size={30} onClick={handleClick} />
      </div>
      {props.isMenuBarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => props.toggleMenuBar()} // closes when clicking background
        />
      )}
        <div className={`fixed top-0 right-0 shadow-lg z-50 transform transition-transform duration-300 h-full bg-white text-black lg:hidden w-52 md:w-2/5 p-3 gap-3 flex flex-col ${props.isMenuBarOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className='border-b-2 border-black p-2 flex justify-end w-full'>
            <IoMdClose onClick={handleClick} />
          </div>
          <div className='flex flex-col gap-2'>
            {sections.map((section: sectionType, key) => <div key={key}>{section.title}</div>)}
          </div>
        </div>
    </div>
  )
}
