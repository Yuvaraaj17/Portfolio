"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import Typed from "typed.js";
import { Button } from "@/components/ui/button";
import { ArrowDown, Download } from "lucide-react";

export default function Intro() {
  const { resolvedTheme } = useTheme();
  const typedRef = useRef<HTMLSpanElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typedRef.current) {
      const typed = new Typed(typedRef.current, {
        strings: [
          "Software Developer",
          "Full Stack Engineer",
          "Problem Solver",
        ],
        typeSpeed: 60,
        backSpeed: 40,
        backDelay: 2000,
        loop: true,
      });
      return () => typed.destroy();
    }
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-[calc(100vh-4rem)] flex items-center"
    >
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2 gap-5 animate-fade-in-up">
            <span className="text-sm md:text-base uppercase tracking-[6px] text-muted-foreground font-poppins">
              Hello!
            </span>
            <h1 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              This is{" "}
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Yuvaraaj
              </span>{" "}
              here
            </h1>
            <div className="h-8 md:h-10">
              <span className="font-mono text-lg md:text-xl lg:text-2xl text-primary">
                {"<"}
              </span>
              <span
                ref={typedRef}
                className="font-mono text-lg md:text-xl lg:text-2xl text-muted-foreground"
              />
              <span className="font-mono text-lg md:text-xl lg:text-2xl text-primary">
                {"/>"}
              </span>
            </div>
            <p className="text-muted-foreground text-sm md:text-base lg:text-lg font-poppins leading-relaxed max-w-lg">
              I&apos;m a versatile software developer with experience in
              building scalable web apps, efficient back-end systems, and
              intuitive UIs. I thrive on solving problems and adapting to new
              technologies to deliver high-quality, innovative solutions.
            </p>
            <div className="flex flex-row gap-3 mt-3">
              <Button size="lg" asChild>
                <a href="#projects">
                  <ArrowDown className="mr-2 h-4 w-4" />
                  View Projects
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/Resume.pdf" download="Resume.pdf">
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-primary/5 rounded-full blur-2xl" />
              <Image
                src={
                  mounted && resolvedTheme === "light"
                    ? "/light-profile.png"
                    : "/dark-profile.png"
                }
                width={500}
                height={500}
                alt="Yuvaraaj S — Software Developer"
                priority
                className="relative z-10"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
