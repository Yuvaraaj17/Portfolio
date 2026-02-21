"use client";
import React from "react";

export default function UrbanEyePreview() {
  return (
    <svg
      viewBox="0 0 640 360"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-label="UrbanEye preview"
    >
      <defs>
        <linearGradient id="ue-bg" x1="0" y1="0" x2="640" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="#022c22" />
          <stop offset="1" stopColor="#0c0a09" />
        </linearGradient>
        <linearGradient id="ue-green" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#22c55e" />
          <stop offset="1" stopColor="#16a34a" />
        </linearGradient>
        <linearGradient id="ue-card" x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#1a1a1a" />
          <stop offset="1" stopColor="#0f0f0f" />
        </linearGradient>
        <filter id="ue-glow-green">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="ue-glow-orange">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Background */}
      <rect width="640" height="360" fill="url(#ue-bg)" />

      {/* Map area */}
      <rect x="0" y="0" width="440" height="360" fill="#071a12" opacity="0.5" />

      {/* Map grid lines */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <line key={`h-${i}`} x1="0" y1={i * 50} x2="440" y2={i * 50} stroke="#22c55e" strokeWidth="0.3" opacity="0.1" />
      ))}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <line key={`v-${i}`} x1={i * 55} y1="0" x2={i * 55} y2="360" stroke="#22c55e" strokeWidth="0.3" opacity="0.1" />
      ))}

      {/* Map roads */}
      <path d="M 50 180 Q 120 120 200 150 T 350 100" stroke="#22c55e" strokeWidth="2" opacity="0.15" fill="none" />
      <path d="M 30 280 Q 100 200 220 260 T 400 200" stroke="#22c55e" strokeWidth="2" opacity="0.12" fill="none" />
      <path d="M 100 50 L 100 320" stroke="#22c55e" strokeWidth="1.5" opacity="0.1" />
      <path d="M 250 30 L 250 340" stroke="#22c55e" strokeWidth="1.5" opacity="0.1" />
      <path d="M 20 150 L 420 150" stroke="#22c55e" strokeWidth="1.5" opacity="0.1" />
      <path d="M 20 250 L 420 250" stroke="#22c55e" strokeWidth="1.5" opacity="0.1" />

      {/* Vehicle markers with pulse effect */}
      {[
        { cx: 120, cy: 130, active: true },
        { cx: 250, cy: 200, active: true },
        { cx: 80, cy: 260, active: false },
        { cx: 320, cy: 110, active: true },
        { cx: 180, cy: 290, active: false },
        { cx: 370, cy: 250, active: true },
      ].map((v, i) => (
        <g key={`vehicle-${i}`}>
          <circle cx={v.cx} cy={v.cy} r="12" fill={v.active ? "#22c55e" : "#f97316"} opacity="0.08">
            <animate attributeName="r" values="12;18;12" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
            <animate attributeName="opacity" values="0.08;0.02;0.08" dur="2s" repeatCount="indefinite" begin={`${i * 0.3}s`} />
          </circle>
          <circle cx={v.cx} cy={v.cy} r="5" fill={v.active ? "#22c55e" : "#f97316"} opacity="0.7" filter={v.active ? "url(#ue-glow-green)" : "url(#ue-glow-orange)"} />
          <circle cx={v.cx} cy={v.cy} r="2" fill="#fff" opacity="0.9" />
        </g>
      ))}

      {/* Route line connecting vehicles */}
      <path
        d="M 120 130 Q 180 160 250 200 T 370 250"
        stroke="#22c55e"
        strokeWidth="1.5"
        opacity="0.3"
        strokeDasharray="4 4"
        fill="none"
      >
        <animate attributeName="strokeDashoffset" values="8;0" dur="1s" repeatCount="indefinite" />
      </path>

      {/* Violation detection box */}
      <rect x="290" cy="80" y="70" width="60" height="50" rx="3" fill="none" stroke="#f97316" strokeWidth="1.5" opacity="0.6">
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="1.5s" repeatCount="indefinite" />
      </rect>
      <text x="295" y="86" fill="#f97316" fontSize="7" fontFamily="monospace" opacity="0.8">VIOLATION</text>
      <text x="295" y="96" fill="#fbbf24" fontSize="6" fontFamily="monospace" opacity="0.6">Speed Sign 40</text>
      <text x="295" y="108" fill="#78716c" fontSize="6" fontFamily="monospace">conf: 0.94</text>

      {/* YOLO detection overlay box */}
      <rect x="60" y="240" width="50" height="40" rx="2" fill="none" stroke="#22c55e" strokeWidth="1.5" opacity="0.5" strokeDasharray="3 2">
        <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2s" repeatCount="indefinite" />
      </rect>
      <text x="65" y="256" fill="#22c55e" fontSize="6" fontFamily="monospace" opacity="0.7">STOP</text>
      <text x="65" y="270" fill="#4ade80" fontSize="5" fontFamily="monospace" opacity="0.5">0.97</text>

      {/* Right sidebar */}
      <rect x="440" y="0" width="200" height="360" fill="#0f0f0f" opacity="0.95" />
      <rect x="440" y="0" width="1" height="360" fill="#1a1a1a" />

      {/* Stats cards */}
      {[
        { y: 12, label: "Active Fleet", value: "24", color: "#22c55e" },
        { y: 68, label: "Violations Today", value: "7", color: "#f97316" },
        { y: 124, label: "Compliance", value: "94.2%", color: "#22c55e" },
      ].map((stat) => (
        <g key={stat.label}>
          <rect x="452" y={stat.y} width="176" height="46" rx="8" fill="url(#ue-card)" stroke="#1a1a1a" strokeWidth="1" />
          <rect x="464" y={stat.y + 12} width="60" height="5" rx="2" fill="#78716c" opacity="0.5" />
          <text x="464" y={stat.y + 34} fill={stat.color} fontSize="16" fontWeight="bold" fontFamily="system-ui">
            {stat.value}
          </text>
          {/* Mini indicator */}
          <rect x="608" y={stat.y + 14} width="8" height="8" rx="4" fill={stat.color} opacity="0.3">
            <animate attributeName="opacity" values="0.3;0.6;0.3" dur="2s" repeatCount="indefinite" />
          </rect>
        </g>
      ))}

      {/* Alert feed */}
      <rect x="452" y="182" width="176" height="8" rx="3" fill="#e7e5e4" opacity="0.6" />
      <line x1="452" y1="196" x2="628" y2="196" stroke="#1a1a1a" strokeWidth="1" />

      {/* Alert items */}
      {[
        { y: 204, type: "warning", text: "Speed limit exceeded", time: "2m ago" },
        { y: 240, type: "danger", text: "Stop sign ignored", time: "5m ago" },
        { y: 276, type: "warning", text: "No entry detected", time: "12m ago" },
        { y: 312, type: "info", text: "Route deviation", time: "18m ago" },
      ].map((alert) => (
        <g key={alert.y}>
          <rect x="452" y={alert.y} width="176" height="28" rx="6" fill="url(#ue-card)" stroke="#1a1a1a" strokeWidth="1" />
          <circle
            cx="466"
            cy={alert.y + 14}
            r="4"
            fill={alert.type === "danger" ? "#ef4444" : alert.type === "warning" ? "#f97316" : "#0ea5e9"}
            opacity="0.6"
          />
          <rect x="476" y={alert.y + 8} width="80" height="5" rx="2" fill="#a8a29e" opacity="0.5" />
          <rect x="476" y={alert.y + 18} width="40" height="4" rx="2" fill="#57534e" opacity="0.3" />
          <rect x="596" y={alert.y + 9} width="24" height="10" rx="5" fill="#1a1a1a" />
          <text x="600" y={alert.y + 17} fill="#78716c" fontSize="5" fontFamily="monospace">{alert.time}</text>
        </g>
      ))}

      {/* Live indicator */}
      <g filter="url(#ue-glow-green)">
        <circle cx="608" cy="186" r="4" fill="#22c55e" opacity="0.7">
          <animate attributeName="r" values="3;5;3" dur="1.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0.3;0.7" dur="1.5s" repeatCount="indefinite" />
        </circle>
      </g>
      <text x="592" y="189" fill="#22c55e" fontSize="6" fontFamily="monospace" opacity="0.6">LIVE</text>
    </svg>
  );
}
