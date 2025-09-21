import React from "react"


export const PlayingCard = () => {

    return (
        <div className="bg-white w-36 h-56 rounded-md p-[10px] shadow-lg">
  <div className="bg-red-700 w-full h-full rounded-md relative overflow-hidden">
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 120 200"
      className="absolute inset-0"
    >
      <defs>
        {/* ClipPath to ensure content stays inside oval */}
        <clipPath id="ovalClip">
          <ellipse
            cx="60"
            cy="100"
            rx="58"
            ry="95"
            transform="rotate(25 60 100)"
          />
        </clipPath>
      </defs>

      {/* White oval background */}
      <ellipse
        cx="60"
        cy="100"
        rx="58"
        ry="95"
        fill="white"
        transform="rotate(25 60 100)"
      />

      {/* Number 8 clipped to oval */}
      <g clipPath="url(#ovalClip)">
        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="120"
          fontWeight="bold"
          fill="black"
          fontFamily="sans-serif"
        >
          8
        </text>
      </g>
    </svg>
  </div>
</div>

    )
}