import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    {
      icon: <FaLinkedin className="h-4 w-4" />,
      href: "https://www.linkedin.com/in/yuvaraaj-s-30642b21b/",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub className="h-4 w-4" />,
      href: "https://github.com/Yuvaraaj17",
      label: "GitHub",
    },
    {
      icon: <SiGmail className="h-4 w-4" />,
      href: "mailto:yuvaraaj5910@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="mt-auto">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground font-poppins">
            © {currentYear}{" "}
            <span className="font-semibold text-foreground">Yuvaraaj S</span>.
            Designed with 💜
          </p>

          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}