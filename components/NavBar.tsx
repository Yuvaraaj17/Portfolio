'use client'
import { useState } from "react"
import React from 'react'
import { IoMdClose } from "react-icons/io";
import sections from "../src/assets/data/sections.json";

export default function NavBar() {

  type sectionType = {
    name: string,
    title: string
  }

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='flex flex-row justify-between bg-red-300 p-3'>
      <div className='bg-blue-400 w-10 h-10 flex items-center justify-center'>L</div>
      <div className='flex flex-row gap-4'>
        <div className='bg-blue-400 w-10 h-10 flex items-center justify-center'>L1</div>
        <button className='bg-blue-400 w-10 h-10 flex items-center justify-center lg:hidden' onClick={handleClick}>L2</button>
      </div>
      {isOpen && (
        <div className='h-full bg-white text-black absolute lg:hidden right-0 w-2/5 p-3 gap-3 flex flex-col'>
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
