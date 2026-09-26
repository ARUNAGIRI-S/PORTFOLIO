import React from 'react';

interface ArcReactorVisualProps {
  size?: number;
  className?: string;
}

export const ArcReactorVisual: React.FC<ArcReactorVisualProps> = ({ size = 280, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient background glow */}
      <div 
        className="absolute rounded-full bg-[#61DDF2]/15 blur-2xl animate-arc-pulse pointer-events-none"
        style={{ width: size * 1.2, height: size * 1.2 }}
      />
      
      {/* Outer armor ring glow */}
      <div 
        className="absolute rounded-full border border-[#D7A84B]/30 shadow-[0_0_30px_rgba(166,28,36,0.3)] pointer-events-none"
        style={{ width: size * 1.08, height: size * 1.08 }}
      />

      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className="w-full h-full max-w-[320px] max-h-[320px] drop-shadow-[0_0_18px_rgba(97,221,242,0.6)]"
      >
        <defs>
          <radialGradient id="arcCoreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="25%" stopColor="#61DDF2" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#00A8E8" stopOpacity="0.7" />
            <stop offset="85%" stopColor="#A61C24" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0C0D10" stopOpacity="0" />
          </radialGradient>

          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5C542" />
            <stop offset="50%" stopColor="#D7A84B" />
            <stop offset="100%" stopColor="#8A651E" />
          </linearGradient>
        </defs>

        {/* Outer Rotating HUD Ring */}
        <g className="animate-rotate-slow origin-center">
          <circle cx="100" cy="100" r="92" fill="none" stroke="#D7A84B" strokeWidth="1" strokeDasharray="3 7 12 7" strokeOpacity="0.6" />
          <circle cx="100" cy="100" r="86" fill="none" stroke="#61DDF2" strokeWidth="1.5" strokeDasharray="18 6 4 6" strokeOpacity="0.7" />
          {/* Tick marks */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <line
              key={i}
              x1={100 + 82 * Math.cos((angle * Math.PI) / 180)}
              y1={100 + 82 * Math.sin((angle * Math.PI) / 180)}
              x2={100 + 88 * Math.cos((angle * Math.PI) / 180)}
              y2={100 + 88 * Math.sin((angle * Math.PI) / 180)}
              stroke={i % 2 === 0 ? "#A61C24" : "#D7A84B"}
              strokeWidth="2"
            />
          ))}
        </g>

        {/* Counter-Rotating Inner Tech Ring */}
        <g className="animate-rotate-reverse origin-center">
          <circle cx="100" cy="100" r="74" fill="none" stroke="#A61C24" strokeWidth="1" strokeDasharray="20 10 5 10" strokeOpacity="0.8" />
          <circle cx="100" cy="100" r="68" fill="none" stroke="#61DDF2" strokeWidth="1" strokeDasharray="2 4" strokeOpacity="0.5" />
        </g>

        {/* Arc Reactor Copper Coil Segments (10 Triangles / Coils) */}
        <g className="origin-center">
          {Array.from({ length: 10 }).map((_, i) => {
            const angle = i * 36;
            return (
              <g key={i} transform={`rotate(${angle} 100 100)`}>
                <rect
                  x="93"
                  y="36"
                  width="14"
                  height="18"
                  rx="2"
                  fill="url(#goldMetallic)"
                  stroke="#A61C24"
                  strokeWidth="0.8"
                />
                <rect
                  x="96"
                  y="40"
                  width="8"
                  height="10"
                  fill="#61DDF2"
                  fillOpacity="0.8"
                />
              </g>
            );
          })}
        </g>

        {/* Inner Glass Ring */}
        <circle cx="100" cy="100" r="54" fill="#0C0D10" stroke="url(#goldMetallic)" strokeWidth="2.5" />
        <circle cx="100" cy="100" r="50" fill="none" stroke="#61DDF2" strokeWidth="1" strokeOpacity="0.8" />

        {/* Glowing Center Arc Core */}
        <circle cx="100" cy="100" r="44" fill="url(#arcCoreGlow)" className="animate-arc-pulse origin-center" />

        {/* Triangle / Tri-node HUD Overlay in center */}
        <polygon 
          points="100,68 124,110 76,110" 
          fill="none" 
          stroke="#FFFFFF" 
          strokeWidth="1.5" 
          strokeOpacity="0.9"
          className="drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
        />
        <circle cx="100" cy="82" r="3" fill="#61DDF2" />
        <circle cx="114" cy="104" r="3" fill="#61DDF2" />
        <circle cx="86" cy="104" r="3" fill="#61DDF2" />

        {/* Central Pure White Energy Light Dot */}
        <circle cx="100" cy="100" r="10" fill="#FFFFFF" className="animate-pulse" />
      </svg>
      
      {/* Decorative Technical Label overlay */}
      <div className="absolute -bottom-6 font-mono-tech text-[10px] tracking-widest text-[#61DDF2]/80 uppercase bg-[#0C0D10]/90 px-3 py-0.5 rounded border border-[#61DDF2]/30">
        ARC-CORE // 3.12 GW
      </div>
    </div>
  );
};
