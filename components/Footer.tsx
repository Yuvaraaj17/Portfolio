import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";


const Footer = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <footer className={` ${theme === 'dark' ? 'bg-pink-700' : 'bg-amber-950'}  text-white py-6 text-center 
                   hover:shadow-[0_0_15px_3px_rgba(255,105,180,0.6)] transition-shadow duration-500`}>
            <p className="mt-1 text-lg"><span className="font-bold">@codescracker</span> Designed with 💜 & Tailwind CSS</p>
        </footer>
    );
}

export default Footer;