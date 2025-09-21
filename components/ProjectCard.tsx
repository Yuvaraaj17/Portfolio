import React, { useContext } from "react"
import Image from "next/image";
import { ThemeContext } from "../context/ThemeContext";
export const ProjectCard = ({ imgPath, title }) => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className={`${theme === 'dark' ? 'hover:shadow-[0_0_20px_4px_rgba(255,105,180,0.7)]' : 'hover:shadow-[0_0_20px_4px_rgba(255,140,0,0.7)]'
} w-[clamp(16rem,20vw,400px)] h-[clamp(12rem,15vw,300px)] bg-white rounded-lg shadow-md 
                 transition-shadow duration-500`}>
            {/* Image container */}
            <div className="relative h-2/3 rounded-t-md overflow-hidden">
                <Image className="bg-red-200 rounded-t-md object-cover" src={imgPath} alt={title} fill />
            </div>

            {/* Text container */}
            <p className="font-poppins text-black p-3 text-center md:text-xl lg:text-2xl flex-1 flex items-center justify-center h-1/3">
                {title}
            </p>
        </div>

    )
}