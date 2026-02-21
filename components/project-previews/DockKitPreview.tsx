"use client";
import React from "react";

export default function DockKitPreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="DockKit preview"
    >
      <defs>
        <linearGradient id="dk-bg" x1="0" y1="0" x2="640" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0c0a09" />
          <stop offset="1" stopColor="#1c1917" />
        </linearGradient>
        <linearGradient id="dk-docker" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="dk-card" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1c1917" />
          <stop offset="1" stopColor="#0c0a09" />
        </linearGradient>
        <filter id="dk-glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="640" height="360" fill="url(#dk-bg)" />

      {/* Decorative Docker-blue gradient blob */}
      <circle cx="500" cy="80" r="150" fill="#0ea5e9" opacity="0.04" />
      <circle cx="160" cy="320" r="100" fill="#2563eb" opacity="0.03" />

      {/* Top bar */}
      <rect x="0" y="0" width="640" height="44" fill="#0c0a09" opacity="0.9" />
      <line x1="0" y1="44" x2="640" y2="44" stroke="#292524" strokeWidth="1" />

      {/* DockKit logo */}
      <rect x="20" y="14" width="16" height="16" rx="3" fill="#0ea5e9" opacity="0.8" />
      <rect x="23" y="17" width="4" height="4" rx="1" fill="#0c0a09" />
      <rect x="29" y="17" width="4" height="4" rx="1" fill="#0c0a09" />
      <rect x="23" y="23" width="4" height="4" rx="1" fill="#0c0a09" />
      <rect x="29" y="23" width="4" height="4" rx="1" fill="#0c0a09" />
      <rect x="44" y="16" width="60" height="8" rx="3" fill="#e7e5e4" opacity="0.8" />
      <rect x="44" y="28" width="40" height="4" rx="2" fill="#78716c" opacity="0.4" />

      {/* Step indicators */}
      {["Base OS", "Dev Tools", "Kits", "Generate"].map((step, i) => (
        <g key={step}>
          <circle
            cx={300 + i * 80}
            cy="22"
            r="10"
            fill={i <= 1 ? "#0ea5e9" : "transparent"}
            stroke={i <= 1 ? "#0ea5e9" : "#44403c"}
            strokeWidth="2"
            opacity={i <= 1 ? 0.8 : 0.4}
          />
          <text
            x={300 + i * 80}
            y="26"
            fill={i <= 1 ? "#0c0a09" : "#78716c"}
            fontSize="8"
            fontWeight="bold"
            fontFamily="system-ui"
            textAnchor="middle"
          >
            {i + 1}
          </text>
        </g>
      ))}

      {/* Left panel — OS selection */}
      <rect x="20" y="60" width="280" height="280" rx="10" fill="url(#dk-card)" stroke="#292524" strokeWidth="1" />
      <rect x="36" y="74" width="100" height="10" rx="4" fill="#e7e5e4" opacity="0.7" />
      <rect x="36" y="90" width="160" height="6" rx="3" fill="#78716c" opacity="0.4" />
      <line x1="20" y1="106" x2="300" y2="106" stroke="#292524" strokeWidth="1" />

      {/* OS options grid */}
      {[
        { x: 36, y: 118, name: "Ubuntu", ver: "22.04", selected: true },
        { x: 160, y: 118, name: "Alpine", ver: "3.18", selected: false },
        { x: 36, y: 186, name: "Debian", ver: "12", selected: false },
        { x: 160, y: 186, name: "CentOS", ver: "9", selected: false },
        { x: 36, y: 254, name: "Fedora", ver: "39", selected: false },
        { x: 160, y: 254, name: "Arch", ver: "Latest", selected: false },
      ].map((os) => (
        <g key={os.name}>
          <rect
            x={os.x}
            y={os.y}
            width="112"
            height="56"
            rx="8"
            fill={os.selected ? "#0ea5e9" : "#292524"}
            opacity={os.selected ? 0.15 : 0.5}
            stroke={os.selected ? "#0ea5e9" : "#44403c"}
            strokeWidth={os.selected ? 2 : 1}
          />
          {/* OS icon placeholder */}
          <rect x={os.x + 12} y={os.y + 12} width="20" height="20" rx="4"
            fill={os.selected ? "#0ea5e9" : "#57534e"} opacity={os.selected ? 0.4 : 0.2} />
          <text
            x={os.x + 40}
            y={os.y + 26}
            fill={os.selected ? "#7dd3fc" : "#a8a29e"}
            fontSize="11"
            fontWeight="600"
            fontFamily="system-ui"
          >
            {os.name}
          </text>
          <text
            x={os.x + 40}
            y={os.y + 40}
            fill={os.selected ? "#38bdf8" : "#78716c"}
            fontSize="8"
            fontFamily="system-ui"
          >
            {os.ver}
          </text>
          {os.selected && (
            <g filter="url(#dk-glow)">
              <circle cx={os.x + 98} cy={os.y + 12} r="6" fill="#0ea5e9" opacity="0.6" />
              <text x={os.x + 94} y={os.y + 16} fill="#fff" fontSize="9" fontWeight="bold">✓</text>
            </g>
          )}
        </g>
      ))}

      {/* Right panel — Selected tools / Preview */}
      <rect x="316" y="60" width="304" height="180" rx="10" fill="url(#dk-card)" stroke="#292524" strokeWidth="1" />
      <rect x="332" y="74" width="120" height="10" rx="4" fill="#e7e5e4" opacity="0.7" />
      <line x1="316" y1="96" x2="620" y2="96" stroke="#292524" strokeWidth="1" />

      {/* Tool chips */}
      {[
        { x: 332, y: 108, label: "Node.js 20", color: "#22c55e" },
        { x: 420, y: 108, label: "Python 3.12", color: "#eab308" },
        { x: 524, y: 108, label: "Git", color: "#f97316" },
        { x: 332, y: 134, label: "Go 1.21", color: "#06b6d4" },
        { x: 412, y: 134, label: "Rust", color: "#ef4444" },
        { x: 476, y: 134, label: "Docker CLI", color: "#0ea5e9" },
      ].map((tool) => (
        <g key={tool.label}>
          <rect
            x={tool.x}
            y={tool.y}
            width={tool.label.length * 8 + 24}
            height="20"
            rx="10"
            fill={tool.color}
            opacity="0.12"
            stroke={tool.color}
            strokeWidth="1"
            strokeOpacity="0.3"
          />
          <circle cx={tool.x + 12} cy={tool.y + 10} r="3" fill={tool.color} opacity="0.7" />
          <text x={tool.x + 20} y={tool.y + 14} fill={tool.color} fontSize="8" fontFamily="monospace" opacity="0.9">
            {tool.label}
          </text>
        </g>
      ))}

      {/* Dockerfile preview */}
      <rect x="332" y="164" width="272" height="64" rx="6" fill="#0c0a09" stroke="#292524" strokeWidth="1" />
      <text x="342" y="178" fill="#0ea5e9" fontSize="8" fontFamily="monospace" opacity="0.7">FROM</text>
      <text x="366" y="178" fill="#7dd3fc" fontSize="8" fontFamily="monospace">ubuntu:22.04</text>
      <text x="342" y="192" fill="#0ea5e9" fontSize="8" fontFamily="monospace" opacity="0.7">RUN</text>
      <text x="362" y="192" fill="#a8a29e" fontSize="8" fontFamily="monospace">apt-get update &amp;&amp; ...</text>
      <text x="342" y="206" fill="#0ea5e9" fontSize="8" fontFamily="monospace" opacity="0.7">RUN</text>
      <text x="362" y="206" fill="#a8a29e" fontSize="8" fontFamily="monospace">curl -fsSL https://...</text>
      <text x="342" y="220" fill="#44403c" fontSize="8" fontFamily="monospace">...</text>

      {/* Bottom right — Build button area */}
      <rect x="316" y="252" width="304" height="88" rx="10" fill="url(#dk-card)" stroke="#292524" strokeWidth="1" />

      {/* Layer visualization */}
      {[0, 1, 2, 3].map((i) => (
        <g key={`layer-${i}`}>
          <rect
            x={332 + i * 4}
            y={266 + i * 12}
            width={260 - i * 8}
            height="10"
            rx="3"
            fill="#0ea5e9"
            opacity={0.08 + i * 0.04}
          />
          <rect
            x={340 + i * 4}
            y={268 + i * 12}
            width={60}
            height="5"
            rx="2"
            fill="#0ea5e9"
            opacity={0.15 + i * 0.05}
          />
        </g>
      ))}

      {/* Build button */}
      <rect x="500" y="310" width="100" height="20" rx="10" fill="url(#dk-docker)" opacity="0.8" />
      <text x="522" y="324" fill="#fff" fontSize="9" fontWeight="bold" fontFamily="system-ui">Build Image</text>
    </svg>
  );
}
