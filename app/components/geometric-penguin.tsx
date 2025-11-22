export function GeometricPenguin() {
  return (
    <svg
      className="h-full w-full max-w-md animate-float drop-shadow-2xl"
      viewBox="0 0 400 500"
    >
      <title>Geometric Penguin Illustration</title>
      <defs>
        <linearGradient id="polyGradient" x1="0%" x2="100%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#4C566A" />
          <stop offset="100%" stopColor="#2E3440" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" x2="100%" y1="0%" y2="0%">
          <stop offset="0%" stopColor="#88C0D0" />
          <stop offset="100%" stopColor="#5E81AC" />
        </linearGradient>
      </defs>

      <g transform="translate(50, 50)">
        {/* Background Elements */}
        <path
          d="M20,400 L380,400 L300,300 L100,300 Z"
          fill="rgba(255,255,255,0.03)"
          stroke="var(--border-color)"
          strokeWidth="1"
        />

        {/* Body Shape (Geometric) */}
        <path
          d="M150,100 L250,100 L280,200 L250,350 L150,350 L120,200 Z"
          fill="url(#polyGradient)"
          stroke="var(--text-secondary)"
          strokeWidth="2"
        />

        {/* Belly (White space) */}
        <path
          d="M170,150 L230,150 L240,200 L230,300 L170,300 L160,200 Z"
          fill="var(--bg-secondary)"
          opacity="0.9"
        />

        {/* Beak/Face */}
        <path d="M180,130 L220,130 L200,160 Z" fill="#D08770" />
        <circle cx="180" cy="120" fill="#ECEFF4" r="4" />
        <circle cx="220" cy="120" fill="#ECEFF4" r="4" />

        {/* Scarf (Tech Accent) */}
        <path
          d="M140,180 L260,180 L260,200 L140,200 Z"
          fill="url(#accentGradient)"
        />
        <rect
          fill="url(#accentGradient)"
          height="80"
          transform="rotate(-10 240 180)"
          width="20"
          x="230"
          y="180"
        />

        {/* Floating UI Elements */}
        <g className="animate-float-delayed">
          <rect
            fill="var(--bg-elevated)"
            height="60"
            rx="4"
            stroke="var(--border-color)"
            strokeWidth="1"
            width="80"
            x="280"
            y="80"
          />
          <rect
            fill="var(--text-secondary)"
            height="4"
            rx="2"
            width="40"
            x="290"
            y="95"
          />
          <rect
            fill="var(--text-secondary)"
            height="4"
            opacity="0.5"
            rx="2"
            width="60"
            x="290"
            y="105"
          />
          <circle cx="340" cy="95" fill="#A3BE8C" r="3" />
        </g>

        <g
          className="animate-float"
          style={{ animationDuration: "6s" } as React.CSSProperties}
        >
          <circle
            cx="100"
            cy="250"
            fill="none"
            r="40"
            stroke="var(--border-color)"
            strokeDasharray="4 4"
            strokeWidth="1"
          />
          <text
            fill="var(--text-secondary)"
            fontFamily="monospace"
            fontSize="14"
            x="82"
            y="255"
          >
            DATA
          </text>
        </g>
      </g>
    </svg>
  );
}
