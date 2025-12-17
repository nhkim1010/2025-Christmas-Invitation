export function DecorativeBorder() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 400 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      {/* Top left curve */}
      <path
        d="M20 10 Q15 15, 20 25 Q25 35, 15 45 Q10 50, 15 60 L15 80"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top right curve */}
      <path
        d="M380 10 Q385 15, 380 25 Q375 35, 385 45 Q390 50, 385 60 L385 80"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Top center wave */}
      <path
        d="M80 15 Q120 10, 160 20 Q200 30, 240 20 Q280 10, 320 15"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bottom left curve */}
      <path
        d="M15 520 L15 540 Q10 550, 15 560 Q25 570, 15 580 Q15 585, 20 590"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bottom right curve */}
      <path
        d="M385 520 L385 540 Q390 550, 385 560 Q375 570, 385 580 Q385 585, 380 590"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Bottom center wave */}
      <path
        d="M80 585 Q120 590, 160 580 Q200 570, 240 580 Q280 590, 320 585"
        stroke="#dc2626"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />

      {/* Small decorative dots */}
      <circle cx="50" cy="40" r="2" fill="#dc2626" />
      <circle cx="350" cy="40" r="2" fill="#dc2626" />
      <circle cx="50" cy="560" r="2" fill="#dc2626" />
      <circle cx="350" cy="560" r="2" fill="#dc2626" />
    </svg>
  );
}