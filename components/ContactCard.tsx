import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { getSocials } from "@/lib/socials";

export function ContactCard() {
  const socials = getSocials("h-5 w-5");

  return (
    <div className="w-full lg:w-1/2 flex flex-col items-center justify-center gap-6">
      {/* Photo */}
      <div className="relative group">
        <div className="absolute -inset-2 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <Image
          src="/photo.jpg"
          alt="Yuvaraaj S"
          width={200}
          height={200}
          className="relative rounded-2xl shadow-[0_8px_30px_rgba(var(--primary-rgb,180,80,30),0.25)]"
        />
      </div>

      {/* Socials */}
      <div className="flex items-center gap-4">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="p-2.5 rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
          >
            {s.icon}
          </a>
        ))}
      </div>

      {/* Download CV */}
      <Button variant="outline" size="lg" asChild>
        <a href="/Resume.pdf" download="Resume.pdf">
          <Download className="mr-2 h-4 w-4" />
          Download My CV
        </a>
      </Button>
    </div>
  );
}
