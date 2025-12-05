export function WineGlassIllustration() {
  return (
    <svg width="180" height="280" viewBox="0 0 180 280" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Wine Glass */}
      <path
        d="M130 60 C130 100, 120 140, 95 170 L95 230 L85 230 L85 170 C60 140, 50 100, 50 60 L130 60 Z"
        stroke="#2d5f4f"
        strokeWidth="2.5"
        fill="rgba(220, 38, 38, 0.15)"
      />
      
      {/* Glass base */}
      <line x1="65" y1="230" x2="115" y2="230" stroke="#2d5f4f" strokeWidth="2.5" strokeLinecap="round"/>
      <line x1="90" y1="170" x2="90" y2="230" stroke="#2d5f4f" strokeWidth="2.5"/>
      
      {/* Wine */}
      <ellipse cx="90" cy="140" rx="25" ry="12" fill="#dc2626" opacity="0.7"/>
      
      {/* Christmas Trees in glass */}
      <g transform="translate(70, 80)">
        {/* Tree 1 */}
        <path d="M10 35 L10 45" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M10 20 L5 30 L15 30 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M10 25 L6 33 L14 33 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M10 30 L7 37 L13 37 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <circle cx="10" cy="18" r="2" fill="#fbbf24"/>
        
        {/* Tree 2 */}
        <path d="M30 40 L30 50" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M30 25 L25 35 L35 35 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M30 30 L26 38 L34 38 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <path d="M30 35 L27 42 L33 42 Z" fill="none" stroke="#2d5f4f" strokeWidth="1.5"/>
        <circle cx="30" cy="23" r="2" fill="#fbbf24"/>
      </g>
      
      {/* Snowflakes in glass */}
      <circle cx="65" cy="100" r="1.5" fill="#94a3b8"/>
      <circle cx="105" cy="110" r="1.5" fill="#94a3b8"/>
      <circle cx="75" cy="125" r="1.5" fill="#94a3b8"/>
      <circle cx="100" cy="95" r="1.5" fill="#94a3b8"/>
      <circle cx="80" cy="115" r="1.5" fill="#94a3b8"/>
      <circle cx="95" cy="105" r="1.5" fill="#94a3b8"/>
    </svg>
  );
}
