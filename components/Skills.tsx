"use client";

import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiCplusplus,
  SiC,
  SiPython,
  SiLinux,
  SiAmazonwebservices,
  SiFigma,
  SiJavascript,
  SiGit,
  SiTypescript,
  SiReact,
} from "react-icons/si";

interface Skill {
  name: string;
  description: string;
  icon: React.ReactNode;
}

const mySkills: Skill[] = [
  {
    name: "Next.js",
    description:
      "Proficient in building fast, SEO-optimized web applications using Next.js with SSR, SSG, and ISR.",
    icon: <SiNextdotjs className="h-6 w-6" />,
  },
  {
    name: "React",
    description:
      "Experienced in building dynamic user interfaces with React, hooks, context, and component architecture.",
    icon: <SiReact className="h-6 w-6 text-cyan-400" />,
  },
  {
    name: "TypeScript",
    description:
      "Strong typing for scalable and maintainable JavaScript applications with full IDE support.",
    icon: <SiTypescript className="h-6 w-6 text-blue-500" />,
  },
  {
    name: "JavaScript",
    description:
      "Expert in modern ES6+ JavaScript, async patterns, DOM manipulation, and framework integration.",
    icon: <SiJavascript className="h-6 w-6 text-yellow-400" />,
  },
  {
    name: "Tailwind CSS",
    description:
      "Skilled in creating responsive, modern interfaces using utility-first design and custom theming.",
    icon: <SiTailwindcss className="h-6 w-6 text-sky-400" />,
  },
  {
    name: "C++",
    description:
      "Versatile in high-performance applications with OOP, STL, and multi-threading.",
    icon: <SiCplusplus className="h-6 w-6 text-blue-600" />,
  },
  {
    name: "C",
    description:
      "Efficient algorithms, memory management, and systems-level programming.",
    icon: <SiC className="h-6 w-6 text-gray-400" />,
  },
  {
    name: "Python",
    description:
      "Data processing, automation, and web development with modern Python frameworks.",
    icon: <SiPython className="h-6 w-6 text-yellow-500" />,
  },
  {
    name: "Linux",
    description:
      "Expert in Linux environments including Rocky Linux in WSL and server administration.",
    icon: <SiLinux className="h-6 w-6" />,
  },
  {
    name: "AWS",
    description:
      "EC2, S3, and Lambda for building scalable, cost-effective cloud applications.",
    icon: <SiAmazonwebservices className="h-6 w-6 text-orange-400" />,
  },
  {
    name: "Figma",
    description:
      "UI/UX design, prototyping, wireframing, and collaborative design projects.",
    icon: <SiFigma className="h-6 w-6 text-purple-400" />,
  },
  {
    name: "Git",
    description:
      "Version control, branching strategies, and collaborative development workflows.",
    icon: <SiGit className="h-6 w-6 text-orange-500" />,
  },
];

export default function Skills() {
  return (
    <section className="py-16 md:py-24" id="skills">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-poppins font-bold text-3xl md:text-4xl lg:text-5xl text-foreground">
            Skills & Expertise
          </h2>
          <div className="mt-2 h-1 w-16 bg-primary rounded-full" />
        </div>

        {/* Skills Grid */}
        <TooltipProvider delayDuration={100}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {mySkills.map((skill) => (
              <Tooltip key={skill.name}>
                <TooltipTrigger asChild>
                  <div className="group cursor-default">
                    <div className="flex flex-col items-center gap-3 rounded-xl border border-border/50 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:-translate-y-1">
                      <div className="p-2.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                        {skill.icon}
                      </div>
                      <Badge
                        variant="secondary"
                        className="font-poppins text-xs whitespace-nowrap"
                      >
                        {skill.name}
                      </Badge>
                    </div>
                  </div>
                </TooltipTrigger>
                <TooltipContent
                  side="bottom"
                  className="max-w-[250px] text-center font-poppins text-sm"
                >
                  <p>{skill.description}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
}
