import React from "react";

interface PixelVerseLogoProps {
  className?: string;
  size?: number;
  iconOnly?: boolean;
}

export default function PixelVerseLogo({ className = "", size = 44, iconOnly = false }: PixelVerseLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Dynamic Futuristic Geometric SVG matching the uploaded logo */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transform transition-transform duration-500 group-hover:scale-105"
      >
        <defs>
          {/* Cyan/Blue Top Gradients */}
          <linearGradient id="cyanTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3af0ff" />
            <stop offset="100%" stopColor="#00a3ff" />
          </linearGradient>
          <linearGradient id="cyanSideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#007fa5" />
            <stop offset="100%" stopColor="#005d7a" />
          </linearGradient>

          {/* Purple/Magenta Bottom Gradients */}
          <linearGradient id="purpleTopGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#df57ff" />
            <stop offset="100%" stopColor="#8d1bff" />
          </linearGradient>
          <linearGradient id="purpleSideGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#670d8a" />
            <stop offset="100%" stopColor="#43005c" />
          </linearGradient>

          {/* Glow and Shadow Filters */}
          <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Tech Grid Hints (subtle decorative background lines matching the logo) */}
        <g opacity="0.15">
          <line x1="10" y1="50" x2="90" y2="50" stroke="#a855f7" strokeWidth="0.5" />
          <line x1="50" y1="10" x2="50" y2="90" stroke="#06b6d4" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="38" stroke="#00f2fe" strokeWidth="0.5" strokeDasharray="2 4" />
        </g>

        {/* Bottom Purple 3D Slab */}
        <g transform="translate(0, 14)">
          {/* Back/Side shadow thickness */}
          <path
            d="M 33 55 L 50 63 L 67 55 L 67 59 L 50 67 L 33 59 Z"
            fill="url(#purpleSideGrad)"
          />
          {/* Top isometric face of the purple bottom plate */}
          <path
            d="M 50 43 L 67 55 L 50 63 L 33 55 Z"
            fill="url(#purpleTopGrad)"
            filter="url(#neonGlow)"
            opacity="0.9"
          />
        </g>

        {/* Top Cyan Glowing Arrow/P Shape (Overlapping futuristic voxel) */}
        <g transform="translate(0, -4)">
          {/* Side depth / thickness of cyan shape */}
          <path
            d="M 23 45 L 50 25 L 77 45 L 77 49 L 50 29 L 23 49 Z"
            fill="#005d7a"
          />
          <path
            d="M 77 45 L 58 45 L 50 38 L 50 42 L 58 49 L 77 49 Z"
            fill="#00465c"
          />
          {/* Top main isometric face */}
          {/* A folded polygon forming the chevron "C"/"P" notch */}
          <path
            d="M 50 25 
               L 77 45 
               L 58 45 
               L 50 38 
               L 50 49
               L 42 45
               L 23 45 Z"
            fill="url(#cyanTopGrad)"
            filter="url(#neonGlow)"
          />
        </g>
      </svg>

      {!iconOnly && (
        <div className="flex flex-col font-sans select-none">
          <span className="font-sans font-black text-lg tracking-wider text-white leading-none">
            PIXELVERSE
          </span>
          <span className="font-mono text-[9px] uppercase font-bold tracking-[0.28em] text-cyan-400 mt-1 leading-none">
            STUDIO
          </span>
        </div>
      )}
    </div>
  );
}
