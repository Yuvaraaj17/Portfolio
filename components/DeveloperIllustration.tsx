"use client";

import React from "react";

export default function DeveloperIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Developer at desk illustration"
    >
      {/* ===== DESK ===== */}
      <rect
        x="80" y="340" width="340" height="12" rx="4"
        className="fill-primary/80"
      />
      {/* Desk legs */}
      <rect x="100" y="352" width="10" height="70" rx="3" className="fill-primary/60" />
      <rect x="390" y="352" width="10" height="70" rx="3" className="fill-primary/60" />
      {/* Cross support */}
      <line x1="105" y1="380" x2="395" y2="400" className="stroke-primary/30" strokeWidth="3" />

      {/* ===== LAPTOP ===== */}
      {/* Screen */}
      <g className="animate-fade-in-up" style={{ animationDelay: "0.2s", animationFillMode: "backwards" }}>
        <rect
          x="175" y="240" width="150" height="100" rx="8"
          className="fill-secondary stroke-border"
          strokeWidth="2"
        />
        {/* Screen inner */}
        <rect
          x="183" y="248" width="134" height="80" rx="4"
          className="fill-background"
        />
        {/* Code lines on screen */}
        <g className="animate-pulse" style={{ animationDuration: "3s" }}>
          <rect x="192" y="258" width="50" height="4" rx="2" className="fill-primary/70" />
          <rect x="192" y="268" width="80" height="4" rx="2" className="fill-muted-foreground/40" />
          <rect x="200" y="278" width="60" height="4" rx="2" className="fill-primary/50" />
          <rect x="200" y="288" width="45" height="4" rx="2" className="fill-muted-foreground/30" />
          <rect x="200" y="298" width="70" height="4" rx="2" className="fill-primary/40" />
          <rect x="192" y="308" width="55" height="4" rx="2" className="fill-muted-foreground/40" />
          <rect x="192" y="318" width="35" height="4" rx="2" className="fill-primary/60" />
        </g>
        {/* Cursor blink */}
        <rect x="227" y="318" width="2" height="6" rx="1" className="fill-primary animate-pulse" />
        {/* Laptop base */}
        <path
          d="M165 340 L175 332 L325 332 L335 340 Z"
          className="fill-secondary stroke-border"
          strokeWidth="1.5"
        />
      </g>

      {/* ===== COFFEE MUG ===== */}
      <g className="animate-fade-in-up" style={{ animationDelay: "0.6s", animationFillMode: "backwards" }}>
        <rect x="350" y="310" width="28" height="30" rx="4" className="fill-primary/30 stroke-primary/50" strokeWidth="1.5" />
        <path d="M378 316 Q392 316 392 326 Q392 336 378 336" className="stroke-primary/50 fill-none" strokeWidth="1.5" />
        {/* Steam */}
        <g className="animate-float">
          <path d="M358 308 Q360 298 356 290" className="stroke-muted-foreground/30 fill-none" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M366 306 Q368 296 364 286" className="stroke-muted-foreground/20 fill-none" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M374 308 Q376 298 372 288" className="stroke-muted-foreground/25 fill-none" strokeWidth="1.5" strokeLinecap="round" />
        </g>
      </g>

      {/* ===== PLANT ===== */}
      <g className="animate-fade-in-up" style={{ animationDelay: "0.8s", animationFillMode: "backwards" }}>
        {/* Pot */}
        <path d="M95 340 L100 310 L125 310 L130 340 Z" className="fill-primary/25 stroke-primary/40" strokeWidth="1.5" />
        {/* Leaves */}
        <g className="origin-bottom" style={{ transformOrigin: "112px 310px" }}>
          <path d="M112 310 Q100 280 112 265" className="stroke-green-500/70 fill-none" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="108" cy="275" rx="10" ry="6" transform="rotate(-30, 108, 275)" className="fill-green-500/50" />
          <path d="M112 310 Q125 275 115 260" className="stroke-green-500/60 fill-none" strokeWidth="2" strokeLinecap="round" />
          <ellipse cx="120" cy="270" rx="9" ry="5" transform="rotate(20, 120, 270)" className="fill-green-500/40" />
          <path d="M112 310 Q108 290 100 280" className="stroke-green-500/50 fill-none" strokeWidth="1.5" strokeLinecap="round" />
          <ellipse cx="100" cy="282" rx="7" ry="4" transform="rotate(-45, 100, 282)" className="fill-green-500/35" />
        </g>
      </g>

      {/* ===== PERSON ===== */}
      <g className="animate-fade-in-up" style={{ animationDelay: "0.4s", animationFillMode: "backwards" }}>
        {/* Body / torso */}
        <path
          d="M220 230 Q250 200 280 230 L275 270 Q250 280 225 270 Z"
          className="fill-primary/70"
        />
        {/* Head */}
        <circle cx="250" cy="190" r="28" className="fill-primary/20 stroke-primary/50" strokeWidth="2" />
        {/* Hair */}
        <path
          d="M222 185 Q225 160 250 158 Q275 160 278 185"
          className="fill-foreground/80"
        />
        {/* Glasses */}
        <circle cx="240" cy="192" r="7" className="stroke-foreground/50 fill-none" strokeWidth="1.5" />
        <circle cx="260" cy="192" r="7" className="stroke-foreground/50 fill-none" strokeWidth="1.5" />
        <line x1="247" y1="192" x2="253" y2="192" className="stroke-foreground/50" strokeWidth="1.5" />
        <line x1="233" y1="190" x2="225" y2="188" className="stroke-foreground/50" strokeWidth="1.5" />
        <line x1="267" y1="190" x2="275" y2="188" className="stroke-foreground/50" strokeWidth="1.5" />
        {/* Smile */}
        <path d="M243 200 Q250 206 257 200" className="stroke-foreground/40 fill-none" strokeWidth="1.5" strokeLinecap="round" />

        {/* Arms */}
        {/* Left arm reaching to keyboard */}
        <path
          d="M225 245 Q200 270 205 310 Q208 330 215 335"
          className="stroke-primary/60 fill-none"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Right arm reaching to keyboard */}
        <path
          d="M275 245 Q300 270 295 310 Q292 330 285 335"
          className="stroke-primary/60 fill-none"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>

      {/* ===== FLOATING ELEMENTS ===== */}
      {/* Floating brackets */}
      <g className="animate-float" style={{ animationDuration: "4s" }}>
        <text x="138" y="250" className="fill-primary/30 text-2xl font-mono" fontSize="24">&lt;/&gt;</text>
      </g>
      <g className="animate-float" style={{ animationDuration: "5s", animationDelay: "1s" }}>
        <text x="340" y="260" className="fill-primary/25 text-xl font-mono" fontSize="18">&#123;&#125;</text>
      </g>
      <g className="animate-float" style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}>
        <text x="120" y="210" className="fill-primary/20 font-mono" fontSize="14">01</text>
      </g>
      <g className="animate-float" style={{ animationDuration: "4.5s", animationDelay: "1.5s" }}>
        <text x="370" y="220" className="fill-primary/20 font-mono" fontSize="14">fn()</text>
      </g>

      {/* Small decorative dots */}
      <circle cx="140" cy="300" r="3" className="fill-primary/20 animate-pulse" style={{ animationDelay: "0s" }} />
      <circle cx="365" cy="280" r="2" className="fill-primary/15 animate-pulse" style={{ animationDelay: "1s" }} />
      <circle cx="155" cy="270" r="2" className="fill-primary/15 animate-pulse" style={{ animationDelay: "2s" }} />
    </svg>
  );
}
