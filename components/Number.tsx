export const Eight = ({ size = 160, color = "#111" }) =>{
  return (
    <svg
      viewBox="0 0 100 140"
      width={size}
      height={(size * 14) / 10}
      aria-label="Number 8"
    >
      <g stroke={color} strokeWidth={16} fill="none" strokeLinecap="round">
        <circle cx="50" cy="40" r="30" />
        <circle cx="50" cy="100" r="30" />
      </g>
    </svg>
  );
}
