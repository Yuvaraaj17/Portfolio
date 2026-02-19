import React from "react";
import { getSocials } from "@/lib/socials";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socials = getSocials("h-4 w-4");

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