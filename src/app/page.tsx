'use client'
import React, { useContext } from "react";
import NavBar from "../../components/NavBar";
import { useState, createContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

export default function Page() {

  const [isOpen, setIsOpen] = useState(false);
  const { theme , setTheme } = useContext(ThemeContext);

  const toggleMenuBar = () => {
    console.log('clicked parent')
    setIsOpen(!isOpen)
  }

  return (
      <div className={`${theme === 'dark' ? 'bg-black' : 'bg-white'} text-white h-full w-full flex flex-col`}>
        <NavBar isMenuBarOpen={isOpen} toggleMenuBar={toggleMenuBar} />
        <div>Hello world</div>
      </div>
    
    // <div className="bg-red-400 flex flex-col border border-black gap-28">
      // {/* 
      // <Intro />
      // <About />
      // <Skills />
      // <Projects />
      // <ContactForm /> */}
      // {/* <h1 className="h-[400px] bg-black text-white">Footer content</h1> */}
    // </div>
  );
}
