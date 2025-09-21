'use client'
import React, { useContext } from "react"
import { ProjectCard } from "./ProjectCard"
import projects from "../src/assets/data/projects.json";
import { ThemeContext } from "../context/ThemeContext";

const Projects = () => {
    const { theme } = useContext(ThemeContext);
    return (
        <div className="flex flex-col gap-4">
                  <h1 className={` ${theme === 'dark' ? 'text-white' : 'text-amber-950'} flex justify-center md:justify-start  font-poppins font-semibold text-4xl lg:text-6xl px-5 md:w-full`}>Projects</h1>
            <div className="flex flex-row flex-wrap justify-center items-center lg:justify-end gap-10 p-5">
                {
                    projects.map((project, key) => (<ProjectCard imgPath={project.imgPath} title={project.title} key={key} />))
                }
            </div>
        </div>
    )
}

export default Projects;