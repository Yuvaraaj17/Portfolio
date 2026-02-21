"use client";
import React from "react";

export default function PlacementPalPreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="PlacementPal preview"
    >
      <defs>
        <linearGradient id="pp-bg" x1="0" y1="0" x2="640" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f172a" />
          <stop offset="1" stopColor="#1e1b4b" />
        </linearGradient>
        <linearGradient id="pp-accent" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#6366f1" />
          <stop offset="1" stopColor="#a78bfa" />
        </linearGradient>
        <linearGradient id="pp-card" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <filter id="pp-glow">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="640" height="360" fill="url(#pp-bg)" />

      {/* Decorative circles */}
      <circle cx="520" cy="60" r="120" fill="#6366f1" opacity="0.06" />
      <circle cx="100" cy="300" r="80" fill="#a78bfa" opacity="0.05" />

      {/* Sidebar */}
      <rect x="0" y="0" width="140" height="360" fill="#0f172a" opacity="0.8" />
      <rect x="0" y="0" width="140" height="360" stroke="#1e293b" strokeWidth="1" fill="none" />

      {/* Sidebar logo area */}
      <rect x="20" y="20" width="100" height="8" rx="4" fill="#6366f1" opacity="0.8" />
      <rect x="20" y="36" width="60" height="4" rx="2" fill="#475569" />

      {/* Sidebar nav items */}
      <rect x="16" y="70" width="108" height="28" rx="6" fill="#6366f1" opacity="0.15" />
      <rect x="28" y="80" width="12" height="8" rx="2" fill="#6366f1" />
      <rect x="48" y="80" width="56" height="8" rx="2" fill="#a78bfa" opacity="0.8" />

      {[{ y: 110, w: 55 }, { y: 150, w: 48 }, { y: 190, w: 62 }, { y: 230, w: 44 }].map((item) => (
        <g key={item.y}>
          <rect x="28" y={item.y} width="12" height="8" rx="2" fill="#475569" opacity="0.4" />
          <rect x="48" y={item.y} width={item.w} height="8" rx="2" fill="#475569" opacity="0.3" />
        </g>
      ))}

      {/* Main content area header */}
      <rect x="160" y="20" width="180" height="12" rx="4" fill="#e2e8f0" opacity="0.9" />
      <rect x="160" y="40" width="120" height="6" rx="3" fill="#64748b" opacity="0.5" />

      {/* Stats cards row */}
      {[
        { x: 160, label: "Students", value: "1,284", color: "#6366f1" },
        { x: 280, label: "Companies", value: "48", color: "#8b5cf6" },
        { x: 400, label: "Placed", value: "892", color: "#a78bfa" },
        { x: 520, label: "Match %", value: "94.2", color: "#c4b5fd" },
      ].map((card) => (
        <g key={card.x}>
          <rect x={card.x} y="65" width="105" height="65" rx="8" fill="url(#pp-card)" stroke="#1e293b" strokeWidth="1" />
          <rect x={card.x + 12} y="78" width="40" height="6" rx="3" fill="#64748b" opacity="0.6" />
          <text x={card.x + 12} y="108" fill={card.color} fontSize="16" fontWeight="bold" fontFamily="system-ui">
            {card.value}
          </text>
          <rect x={card.x + 80} y="78" width="16" height="16" rx="4" fill={card.color} opacity="0.15" />
          <rect x={card.x + 84} y="82" width="8" height="8" rx="1" fill={card.color} opacity="0.5" />
        </g>
      ))}

      {/* Table / Student list */}
      <rect x="160" y="145" width="250" height="195" rx="8" fill="url(#pp-card)" stroke="#1e293b" strokeWidth="1" />
      <rect x="172" y="155" width="80" height="8" rx="3" fill="#e2e8f0" opacity="0.7" />
      <line x1="160" y1="172" x2="410" y2="172" stroke="#1e293b" strokeWidth="1" />

      {/* Table headers */}
      {["Name", "Dept", "Score", "Status"].map((_, i) => (
        <rect key={i} x={172 + i * 56} y="178" width={40} height="6" rx="3" fill="#6366f1" opacity="0.4" />
      ))}

      {/* Table rows */}
      {[{ y: 195, w: 42 }, { y: 218, w: 38 }, { y: 241, w: 46 }, { y: 264, w: 40 }, { y: 287, w: 44 }, { y: 310, w: 36 }].map((item, i) => (
        <g key={item.y}>
          {/* Avatar */}
          <circle cx={182} cy={item.y + 5} r="8" fill={`hsl(${240 + i * 20}, 60%, ${50 + i * 5}%)`} opacity="0.3" />
          <rect x={194} y={item.y} width={item.w} height="6" rx="3" fill="#cbd5e1" opacity="0.4" />
          <rect x={228 + 24} y={item.y} width={20} height="6" rx="3" fill="#64748b" opacity="0.3" />
          <rect x={228 + 56 + 12} y={item.y} width={24} height="6" rx="3" fill="#64748b" opacity="0.3" />
          <rect
            x={228 + 56 + 48}
            y={item.y - 1}
            width={36}
            height="12"
            rx="6"
            fill={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#eab308" : "#6366f1"}
            opacity="0.2"
          />
          <rect
            x={228 + 56 + 54}
            y={item.y + 2}
            width={24}
            height="5"
            rx="2"
            fill={i % 3 === 0 ? "#22c55e" : i % 3 === 1 ? "#eab308" : "#6366f1"}
            opacity="0.6"
          />
        </g>
      ))}

      {/* Right panel – AI matching card */}
      <rect x="425" y="145" width="195" height="195" rx="8" fill="url(#pp-card)" stroke="#1e293b" strokeWidth="1" />
      <rect x="437" y="155" width="90" height="8" rx="3" fill="#e2e8f0" opacity="0.7" />
      <line x1="425" y1="172" x2="620" y2="172" stroke="#1e293b" strokeWidth="1" />

      {/* AI match sparkle icon */}
      <g filter="url(#pp-glow)">
        <circle cx="600" cy="159" r="6" fill="#a78bfa" opacity="0.3" />
        <text x="596" y="163" fill="#a78bfa" fontSize="10">✦</text>
      </g>

      {/* Match cards */}
      {[180, 225, 270, 315].map((y, i) => (
        <g key={y}>
          <rect x="437" y={y} width="171" height="36" rx="6" fill="#1e293b" opacity="0.6" />
          <circle cx="455" cy={y + 18} r="10" fill={`hsl(${250 + i * 15}, 70%, 60%)`} opacity="0.25" />
          <rect x="472" y={y + 8} width="50" height="6" rx="3" fill="#cbd5e1" opacity="0.5" />
          <rect x="472" y={y + 20} width="80" height="4" rx="2" fill="#64748b" opacity="0.3" />
          {/* Match percentage */}
          <rect x="570" y={y + 8} width="28" height="14" rx="7" fill="#6366f1" opacity="0.2" />
          <text x="576" y={y + 19} fill="#a78bfa" fontSize="8" fontWeight="bold" fontFamily="system-ui">
            {95 - i * 4}%
          </text>
        </g>
      ))}
    </svg>
  );
}
