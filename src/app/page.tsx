'use client'
import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import { useState} from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Intro from "../../components/Intro";
import About from "../../components/About";
import Projects from "../../components/Projects";

export default function Page() {

  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const toggleMenuBar = () => {
    console.log('clicked parent')
    setIsOpen(!isOpen)
  }

  return (
      <div className={`${theme === 'dark' ? 'bg-black' : 'bg-[#f1e8d5]'} text-white h-full w-full flex flex-col gap-7 overflow-x-hidden`}>
        <NavBar isMenuBarOpen={isOpen} toggleMenuBar={toggleMenuBar} />
        <Intro />
        <About />
        {/* <Skills /> Not needed */}
        <Projects />
      </div>
    
    // <div className="bg-red-400 flex flex-col border border-black gap-28">
      // {/* 
      // 

      // <Skills />
      // 
      // <ContactForm /> */}
      // {/* <h1 className="h-[400px] bg-black text-white">Footer content</h1> */}
    // </div>
  );
}
