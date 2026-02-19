"use client";

import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import sections from "../src/assets/data/sections.json";

type SectionType = {
  name: string;
  title: string;
  target: string;
};

export default function NavBar() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full glass border-b border-border/40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* Logo / Name */}
        <Link
          href="#"
          className="font-poppins text-xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
        >
          Yuvaraaj S
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1">
          {sections.map((section: SectionType) => (
            <Button key={section.name} variant="ghost" size="default" asChild>
              <Link
                href={`#${section.target}`}
                className="font-poppins text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {section.title}
              </Link>
            </Button>
          ))}
          <Button
            variant="ghost"
            size="default"
            asChild
          >
            <a href="/Resume.pdf" download="Resume.pdf" className="font-poppins text-base font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resume
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="ml-2"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="flex md:hidden items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-64">
              <SheetTitle className="font-poppins text-lg font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Navigation
              </SheetTitle>
              <nav className="flex flex-col gap-2 mt-6">
                {sections.map((section: SectionType) => (
                  <Button
                    key={section.name}
                    variant="ghost"
                    className="justify-start font-poppins"
                    asChild
                    onClick={() => setOpen(false)}
                  >
                    <Link href={`#${section.target}`}>{section.title}</Link>
                  </Button>
                ))}
                <Button
                  variant="ghost"
                  className="justify-start font-poppins"
                  asChild
                  onClick={() => setOpen(false)}
                >
                  <a href="/Resume.pdf" download="Resume.pdf">Resume</a>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
